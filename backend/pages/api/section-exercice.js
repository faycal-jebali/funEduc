import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const sectionTable = "exercices_section_funeduc";
const exerciceTable = "exercices_funeduc";

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     apiKey:
 *       type: apiKey
 *       in: header
 *       name: x-api-key
 *
 * security:
 *   - apiKey: []
 *
 * servers:
 *   - url: http://localhost:3000
 *     description: Serveur de développement
 *
 * /api/section-exercice:
 *   get:
 *     summary: Récupérer une ou plusieurs sections
 *     description: >
 *       Récupère une section et ses exercices si `sectionId` est fourni.
 *       Sinon, récupère toutes les sections avec des filtres optionnels (`class_id`, `category`, `course`).
 *     tags:
 *       - Sections
 *     security:
 *       - apiKey: []
 *     parameters:
 *       - name: sectionId
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *         description: ID de la section (si fourni, récupère une seule section et ses exercices).
 *       - name: class_id
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtrer par classe.
 *       - name: module_id
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtrer par module.
 *       - name: category
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtrer par catégorie.
 *       - name: course
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtrer par cours.
 *     responses:
 *       200:
 *         description: Sections récupérées avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sections:
 *                   type: array
 *                   items:
 *                     type: object
 *       400:
 *         description: Requête invalide.
 *       401:
 *         description: Clé API invalide.
 *       500:
 *         description: Erreur interne du serveur.
 *
 *   post:
 *     summary: Créer une section et ajouter des exercices associés
 *     tags:
 *       - Sections
 *     security:
 *       - apiKey: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               section:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *               exercices:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     question:
 *                       type: string
 *                     answer:
 *                       type: string
 *     responses:
 *       201:
 *         description: Section et exercices créés avec succès.
 *       400:
 *         description: Données invalides.
 *       401:
 *         description: Clé API invalide.
 *       500:
 *         description: Erreur interne du serveur.
 *
 *   put:
 *     summary: Modifier une section et ses exercices
 *     tags:
 *       - Sections
 *     security:
 *       - apiKey: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sectionId:
 *                 type: string
 *               section:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *               exercices:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     question:
 *                       type: string
 *                     answer:
 *                       type: string
 *     responses:
 *       200:
 *         description: Section et exercices mis à jour avec succès.
 *       400:
 *         description: Données invalides.
 *       401:
 *         description: Clé API invalide.
 *       500:
 *         description: Erreur interne du serveur.
 *
 *   delete:
 *     summary: Supprimer une section et ses exercices
 *     tags:
 *       - Sections
 *     security:
 *       - apiKey: []
 *     parameters:
 *       - name: sectionId
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Section et exercices supprimés avec succès.
 *       400:
 *         description: sectionId est requis.
 *       401:
 *         description: Clé API invalide.
 *       500:
 *         description: Erreur interne du serveur.
 */

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");
    return res.status(204).end();
  }

  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: "Accès non autorisé" });
  }

  try {
    //GET ONE or ALL
    if (req.method === "GET") {
      const { sectionId, class_id: sectionClass } = req.query;

      // 🔹 Si sectionId est fourni, on récupère une seule section avec ses exercices
      if (sectionId) {
        const { data: section, error: sectionError } = await supabase
          .from(sectionTable)
          .select("*")
          .eq("id", sectionId)
          .single();

        if (sectionError || !section) {
          return res.status(404).json({ error: "Section non trouvée." });
        }

        const { data: exercices, error: exerciceError } = await supabase
          .from(exerciceTable)
          .select("*")
          .eq("section_id", sectionId);

        if (exerciceError) throw exerciceError;

        return res.status(200).json({ section, exercices });
      }

      // 🔹 Sinon, on récupère toutes les sections avec filtres (facultatifs)
      let query = supabase.from(sectionTable).select("*");

      // if (category) query = query.eq("category", category);
      if (sectionClass) query = query.eq("class_id", sectionClass);
      // if (course) query = query.eq("course", course);

      const { data: sections, error } = await query;

      if (error) {
        console.error("Erreur récupération sections :", error.message);
        return res.status(500).json({ error: "Erreur interne du serveur" });
      }

      return res.status(200).json({ sections });
    }

    // POST
    if (req.method === "POST") {
      //const { section, exercices } = req.body;
      const section = req.body.section;
      const exercices = req.body.exercices;

      // **Validation des champs obligatoires**
      if (
        !section.title ||
        !section.created_by ||
        !section.class_id ||
        !section.module_id ||
        // !section.lesson_id ||
        // !section.category_id ||
        // !section.subLesson_id ||
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
            class_id: section.class_id,
            module_id: section.module_id,
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

    // PUT
    if (req.method === "PUT") {
      console.log("Requête PUT reçue :", req.body);

      const { sectionId, section, exercices } = req.body;

      if (!sectionId || !section?.title || !Array.isArray(exercices)) {
        return res.status(400).json({
          error: `Données invalides section id : ${sectionId} | section.title: ${
            section?.title
          } | exercices: ${Array.isArray(exercices)}`,
        });
      }

      const { error: sectionError } = await supabase
        .from(sectionTable)
        .update(section)
        .eq("id", sectionId);

      if (sectionError) throw sectionError;

      await supabase.from(exerciceTable).delete().eq("section_id", sectionId);

      const exercicesToInsert = exercices.map((exo) => ({
        ...exo,
        section_id: sectionId,
      }));

      const { error: exerciceError } = await supabase
        .from(exerciceTable)
        .insert(exercicesToInsert);

      if (exerciceError) throw exerciceError;

      return res
        .status(200)
        .json({ message: "Section et exercices mis à jour avec succès." });
    }

    // DELETE
    if (req.method === "DELETE") {
      const { sectionId } = req.query;

      if (!sectionId) {
        return res
          .status(400)
          .json({ error: "Le paramètre 'sectionId' est requis." });
      }

      // Supprimer les exercices liés
      const { error: exerciceError } = await supabase
        .from(exerciceTable)
        .delete()
        .eq("section_id", sectionId);

      if (exerciceError) {
        console.error("Erreur suppression exercices:", exerciceError);
        return res
          .status(500)
          .json({ error: "Erreur lors de la suppression des exercices." });
      }

      // Supprimer la section
      const { error: sectionError } = await supabase
        .from(sectionTable)
        .delete()
        .eq("id", sectionId);

      if (sectionError) {
        console.error("Erreur suppression section:", sectionError);
        return res
          .status(500)
          .json({ error: "Erreur lors de la suppression de la section." });
      }

      return res
        .status(200)
        .json({ message: "Section et exercices supprimés avec succès." });
    }

    res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE", "OPTIONS"]);
    return res
      .status(405)
      .json({ error: `Méthode ${req.method} non autorisée` });
  } catch (error) {
    console.error("Erreur API :", error.message);
    return res
      .status(500)
      .json({ error: "Erreur interne du serveur", details: error.message });
  }
}
