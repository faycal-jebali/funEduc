import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    const { data, error } = await supabase.from("modules").select("*");

    if (error) return res.status(500).json({ error });
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const { title, parent_id } = req.body;
    const { data, error } = await supabase
      .from("modules")
      .insert([{ title, parent_id }])
      .single();

    if (error) return res.status(500).json({ error });
    return res.status(201).json(data);
  }
}
