import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Fonction récursive pour construire l’arbre
const buildModuleTree = (modules, parentId = null) =>
  modules
    .filter((mod) => mod.parent_id === parentId)
    .sort((a, b) => a.order - b.order)
    .map((mod) => ({
      id: mod.id,
      title: mod.title,
      alias: mod.alias,
      active: mod.active,
      order: mod.order,
      children: buildModuleTree(modules, mod.id),
    }));

export default async function handler(req, res) {
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
      class_matiere (
        module_id,
        modules (
          id, title, alias, order, active, parent_id
        )
      )
    `);

    if (error) throw error;

    // Récupération de tous les modules pour construire la hiérarchie complète
    const { data: allModules, error: modulesError } = await supabase
      .from("modules")
      .select("*");

    if (modulesError) throw modulesError;

    const transformed = data.map((cls) => {
      const moduleRoots = cls.class_matiere.map((cm) => cm.modules.id);
      const roots = allModules.filter((mod) => moduleRoots.includes(mod.id));

      // Pour chaque module racine, construire sa hiérarchie
      const children = roots.map((root) => ({
        id: root.id,
        title: root.title,
        alias: root.alias,
        order: root.order,
        active: root.active,
        children: buildModuleTree(allModules, root.id),
      }));

      return {
        id: cls.id,
        title: cls.title,
        alias: cls.alias,
        children,
      };
    });

    return res.status(200).json(transformed);
  } catch (err) {
    console.error("Erreur serveur :", err.message);
    return res
      .status(500)
      .json({ error: "Erreur serveur", details: err.message });
  }
}
