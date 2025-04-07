import { createClient } from "@supabase/supabase-js";
/* eslint-disable @typescript-eslint/no-explicit-any */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Pour les appels "authentifiés" classiques
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { email, password, nom, prenom, role } = req.body;

    // Étape 1 : Inscription dans Supabase Auth
    const { data: signupData, error: signupError } = await supabase.auth.signUp(
      {
        email,
        password,
      }
    );

    if (signupError) {
      console.error(signupError);
      return res.status(400).json({ error: "Erreur d'inscription." });
    }

    const userId = signupData.user?.id;
    if (!userId) {
      return res.status(500).json({ error: "Aucun ID utilisateur trouvé." });
    }

    // Étape 2 : Insertion dans la table `users` personnalisée
    const { error: insertError } = await supabase.from("users").insert([
      {
        id: userId,
        nom,
        prenom,
        role,
      },
    ]);

    if (insertError) {
      console.error(insertError);
      return res
        .status(500)
        .json({ error: "Échec de l'ajout dans la table users." });
    }

    return res.status(200).json({ message: "Inscription réussie." });
  }

  res.status(405).json({ error: "Méthode non autorisée." });
}
