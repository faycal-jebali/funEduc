import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");
    return res.status(204).end();
  }

  if (req.headers["x-api-key"] !== process.env.API_KEY) {
    return res.status(401).json({ error: "Accès non autorisé" });
  }

  try {
    const { data, error } = await supabase.from("classes_funeduc").select(`
        id, title, alias,
        lesson_classes_funeduc (lesson_id, lessons_funeduc (
          id, title, alias,
          lesson_categories_funeduc (
            id, title, alias,
            sub_lessons_funeduc (id, title, alias)
          )
        ))
      `);

    if (error) {
      console.error("Supabase Error:", error);
      throw error;
    }

    // Transformation des données pour simplifier la structure
    const transformData = (data) => {
      return data.map((cls) => ({
        id: cls.id,
        title: cls.title,
        alias: cls.alias,
        children:
          cls.lesson_classes_funeduc?.map((lc) => ({
            id: lc.lessons_funeduc.id,
            title: lc.lessons_funeduc.title,
            alias: lc.lessons_funeduc.alias,
            children:
              lc.lessons_funeduc.lesson_categories_funeduc?.map((cat) => ({
                id: cat.id,
                title: cat.title,
                alias: cat.alias,
                children:
                  cat.sub_lessons_funeduc?.map((sub) => ({
                    id: sub.id,
                    title: sub.title,
                    alias: sub.alias,
                  })) || [],
              })) || [],
          })) || [],
      }));
    };

    return res.status(200).json(transformData(data));
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ error: "Erreur serveur", details: error.message });
  }
}
