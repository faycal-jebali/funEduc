import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const sectionTableName = "exercices_section_funeduc";
const limitSection = 5;

export default async function handler(req, res) {
  // **Gérer les pré-requêtes CORS (OPTIONS)**
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");
    res.status(204).end();
    return;
  }

  // Vérifier la clé API
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: "Accès non autorisé" });
  }

  try {
    if (req.method === "GET") {
      const { class_id, filter_id } = req.query; // Récupérer les paramètres de requête

      let query = supabase.from(sectionTableName).select(`
    id, 
    title, 
    description,
    class_id,
    lesson_id,
    category_id,
    subLesson_id,
    exercices:exercices_funeduc (
      id, 
      type, 
      question,
      consigne,
      correct_answer, 
      options,
      explanation, 
      difficulty, 
      created_by
    )
  `);

      // Appliquer des filtres seulement si class_id et subLesson_id sont fournis
      if (class_id) {
        query = query.eq("class_id", class_id);
      }
      /*if (subLesson_id) {
        query = query.eq("subLesson_id", subLesson_id);
      }*/
      if (filter_id) {
        query = query.or(
          `subLesson_id.eq.${filter_id},category_id.eq.${filter_id},lesson_id.eq.${filter_id}`
        );
      }

      // Exécuter la requête
      const { data, error } = await query;

      if (error) {
        console.error("Erreur Supabase:", error);
      } else {
        // Mélanger les exercices de chaque section et limiter à 5 exercices
        const sectionsWithRandomExercises = data.map((section) => ({
          ...section,
          exercices: section.exercices
            ? section.exercices
                .sort(() => 0.5 - Math.random())
                .slice(0, limitSection)
                .map((exercice) => ({
                  ...exercice,
                  options:
                    exercice.options && exercice.options.length > 0
                      ? exercice.options.sort(() => 0.5 - Math.random())
                      : [], // Mélange les options
                }))
            : [],
        }));

        console.log(sectionsWithRandomExercises);
      }

      return res.status(200).json(data);
    }

    if (req.method === "POST") {
      const { title, description, lesson_id, created_by } = req.body;

      if (!title) {
        return res.status(400).json({
          error: "Le champ 'title' est requis",
        });
      }

      // Insérer une nouvelle section dans la base de données
      const { data, error } = await supabase.from(sectionTableName).insert([
        {
          title,
          description: description || null,
          lesson_id: lesson_id || null,
          created_by: created_by || null,
        },
      ]);

      if (error) {
        console.error("Supabase POST Error:", error);
        throw error;
      }

      return res
        .status(201)
        .json({ message: "Section créée avec succès", data });
    }

    res.setHeader("Allow", ["GET", "OPTIONS"]);
    res.status(405).end(`Méthode ${req.method} non autorisée`);
  } catch (error) {
    console.error("Erreur API :", error.message);
    res
      .status(500)
      .json({ error: "Erreur interne du serveur", details: error.message });
  }
}
