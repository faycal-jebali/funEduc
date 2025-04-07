import { createClient } from "@supabase/supabase-js";
/* eslint-disable @typescript-eslint/no-explicit-any */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email, password } = req.body;

  // 🔐 1. Authentifier l’utilisateur
  const {
    data: { session, user },
    error: authError,
  } = await supabase.auth.signInWithPassword({ email, password });

  if (authError || !user) {
    console.error("Erreur d'authentification :", authError);
    return res.status(401).json({ error: "Identifiants incorrects." });
  }

  // 🔍 2. Récupérer les infos supplémentaires depuis la table personnalisée `users`
  const { data: userDetails, error: userError } = await supabase
    .from("users")
    .select("*")
    .eq("id", user.id)
    .single();

  if (userError) {
    console.error("Erreur récupération user details :", userError);
    return res.status(500).json({
      error: "Erreur lors de la récupération des informations utilisateur.",
    });
  }

  // ✅ 3. Répondre avec le token et les données utilisateur
  return res.status(200).json({
    access_token: session.access_token,
    user_details: userDetails,
  });
}
