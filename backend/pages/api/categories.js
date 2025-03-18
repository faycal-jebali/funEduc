import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");
    return res.status(204).end();
  }

  if (req.headers["x-api-key"] !== process.env.API_KEY) {
    return res.status(401).json({ error: "Accès non autorisé" });
  }

  try {
    if (req.method === "GET") {
      const { data, error } = await supabase
        .from("lesson_categories_funeduc")
        .select("*");
      if (error) throw error;
      return res.status(200).json(data);
    }

    if (req.method === "POST") {
      const { lesson_id, alias, title } = req.body;
      if (!lesson_id || !alias || !title)
        return res.status(400).json({ error: "Données invalides" });

      const { data, error } = await supabase
        .from("lesson_categories_funeduc")
        .insert([{ lesson_id, alias, title }]);
      if (error) throw error;
      return res.status(201).json(data);
    }

    res.setHeader("Allow", ["GET", "POST", "OPTIONS"]);
    res.status(405).end(`Méthode ${req.method} non autorisée`);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur", details: error.message });
  }
}
