import { createClient } from "@supabase/supabase-js";

// ⚠️ Remplace par tes vraies clés Supabase (utilise les variables d'env pour la prod)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
