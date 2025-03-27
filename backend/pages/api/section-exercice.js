import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const sectionTable = "exercices_section_funeduc";
const exerciceTable = "exercices_funeduc";

/**
 * @swagger
 * /api/createSection:
 *   post:
 *     summary: Créer une section et ajouter des exercices associés
 *     description: Endpoint permettant de créer une nouvelle section avec plusieurs exercices.
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
 *             required:
 *               - section
 *               - exercices
 *             properties:
 *               section:
 *                 type: object
 *                 required:
 *                   - title
 *                   - created_by
 *                   - class_id
 *                   - lesson_id
 *                   - category_id
 *                   - subLesson_id
 *                 properties:
 *                   title:
 *                     type: string
 *                     example: "Section sur les fractions"
 *                   description:
 *                     type: string
 *                     example: "Introduction aux fractions"
 *                   class_id:
 *                     type: integer
 *                     example: 3
 *                   lesson_id:
 *                     type: integer
 *                     example: 5
 *                   category_id:
 *                     type: integer
 *                     example: 2
 *                   subLesson_id:
 *                     type: integer
 *                     example: 1
 *                   created_by:
 *                     type: string
 *                     example: "admin"
 *               exercices:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - title
 *                     - content
 *                   properties:
 *                     title:
 *                       type: string
 *                       example: "Exercice 1"
 *                     content:
 *                       type: string
 *                       example: "Trouver la valeur de x dans 3x + 2 = 8"
 *     responses:
 *       201:
 *         description: Section et exercices créés avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Section et exercices créés avec succès."
 *                 sectionId:
 *                   type: integer
 *                   example: 123
 *       400:
 *         description: Données invalides
 *       401:
 *         description: Clé API invalide
 *       500:
 *         description: Erreur interne du serveur
 */

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-api-key");
    res.status(204).end();
    return;
  }

  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: "Accès non autorisé" });
  }

  try {
    if (req.method === "POST") {
      const { section, exercices } = req.body;

      if (
        !section.title ||
        !section.created_by ||
        !section.class_id ||
        !section.lesson_id ||
        !section.category_id ||
        !section.subLesson_id ||
        !Array.isArray(exercices) ||
        exercices.length === 0
      ) {
        return res.status(400).json({
          error:
            "Les champs 'title', 'created_by', 'lesson_id', 'category_id', 'sublesson_id' et un tableau 'exercices' sont requis.",
        });
      }

      const { data: sectionData, error: sectionError } = await supabase
        .from(sectionTable)
        .insert([section])
        .select("id")
        .single();

      if (sectionError) throw sectionError;
      const sectionId = sectionData.id;

      const exercicesToInsert = exercices.map((exo) => ({
        ...exo,
        section_id: sectionId,
      }));

      const { error: exerciceError } = await supabase
        .from(exerciceTable)
        .insert(exercicesToInsert);

      if (exerciceError) throw exerciceError;

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
