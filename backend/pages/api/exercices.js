import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

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
      const { data, error } = await supabase.from("exercices").select("*");
      if (error) throw error;
      return res.status(200).json(data);
    }

    if (req.method === "POST") {
      const { title, content, difficulty } = req.body;
      if (!title || !content || !difficulty) {
        return res.status(400).json({ error: "Tous les champs sont requis" });
      }

      const { data, error } = await supabase
        .from("exercices")
        .insert([{ title, content, difficulty }]);

      if (error) throw error;
      return res.status(201).json(data);
    }

    res.setHeader("Allow", ["GET", "POST", "OPTIONS"]);
    res.status(405).end(`Méthode ${req.method} non autorisée`);
  } catch (error) {
    console.error("Erreur API :", error.message);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
}
