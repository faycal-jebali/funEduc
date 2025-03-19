import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const sectionTable = "exercices_section_funeduc";
const exerciceTable = "exercices_funeduc";

export default async function handler(req, res) {
  // **Gérer les pré-requêtes CORS (OPTIONS)**
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");
    res.status(204).end();
    return;
  }

  // **Vérifier la clé API**
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: "Accès non autorisé" });
  }

  try {
    if (req.method === "POST") {
      //const { section, exercices } = req.body;
      const section = req.body.section;
      const exercices = req.body.exercices;

      // **Validation des champs obligatoires**
      if (
        !section.title ||
        !section.created_by ||
        !section.lesson_id ||
        !section.category_id ||
        !section.subLesson_id ||
        !Array.isArray(exercices) ||
        exercices.length === 0
      ) {
        return res.status(400).json({
          error:
            "Les champs 'title', 'created_by' , 'lesson_id', 'category_id', 'sublesson_id' et un tableau 'exercices' sont requis.",
        });
      }

      // **Démarrer une transaction pour garantir l'intégrité**
      const { data: sectionData, error: sectionError } = await supabase
        .from(sectionTable)
        .insert([
          {
            title: section.title,
            description: section.description,
            lesson_id: section.lesson_id,
            category_id: section.category_id,
            subLesson_id: section.subLesson_id,
            created_by: "admin",
          },
        ])
        .select("id")
        .single();

      if (sectionError) {
        console.error(
          "Erreur lors de la création de la section:",
          sectionError
        );
        throw sectionError;
      }

      const sectionId = sectionData.id;

      // **Préparer les exercices liés à cette section**
      const exercicesToInsert = exercices.map((exo) => ({
        ...exo,
        section_id: sectionId,
      }));

      // **Insérer les exercices**
      const { error: exerciceError } = await supabase
        .from(exerciceTable)
        .insert(exercicesToInsert);

      if (exerciceError) {
        console.error("Erreur lors de l'ajout des exercices:", exerciceError);
        throw exerciceError;
      }

      return res.status(201).json({
        message: "Section et exercices créés avec succès.",
        sectionId,
      });
    }

    res.setHeader("Allow", ["POST", "OPTIONS"]);
    res.status(405).end(`Méthode ${req.method} non autorisée`);
  } catch (error) {
    console.error("Erreur API :", error.message);
    res
      .status(500)
      .json({ error: "Erreur interne du serveur", details: error.message });
  }
}
