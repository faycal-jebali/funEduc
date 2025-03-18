import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const tableName = "exercices_funeduc";

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
      const { data, error } = await supabase.from(tableName).select("*");
      if (error) {
        console.error("Supabase GET Error:", error);
        throw error;
      }
      return res.status(200).json(data);
    }

    if (req.method === "POST") {
      const {
        type,
        question,
        options,
        correct_answer,
        explanation,
        difficulty,
        created_by,
        section_id,
      } = req.body;

      if (
        !type ||
        !question ||
        !correct_answer ||
        !difficulty ||
        !created_by ||
        !section_id
      ) {
        return res.status(400).json({
          error:
            "Tous les champs sont requis (type, question, correct_answer, difficulty, created_by, section_id)",
        });
      }

      const { data, error } = await supabase.from(tableName).insert([
        {
          type,
          question,
          options,
          correct_answer,
          explanation,
          difficulty,
          created_by,
          section_id,
        },
      ]);

      if (error) {
        console.error("Supabase POST Error:", error);
        throw error;
      }
      return res.status(201).json(data);
    }

    res.setHeader("Allow", ["GET", "POST", "OPTIONS"]);
    res.status(405).end(`Méthode ${req.method} non autorisée`);
  } catch (error) {
    console.error("Erreur API :", error.message);
    res
      .status(500)
      .json({ error: "Erreur interne du serveur", details: error.message });
  }
}
