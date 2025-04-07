import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function handler(req: any, res: any) {
  const { id } = req.query;

  if (req.method === "GET") {
    const { data, error } = await supabase
      .from("modules")
      .select("*")
      .eq("id", id)
      .single();

    if (error) return res.status(500).json({ error });
    return res.status(200).json(data);
  }

  if (req.method === "PUT") {
    const { title, parent_id } = req.body;

    const { data, error } = await supabase
      .from("modules")
      .update({ title, parent_id })
      .eq("id", id)
      .single();

    if (error) return res.status(500).json({ error });
    return res.status(200).json(data);
  }

  if (req.method === "DELETE") {
    const { error } = await supabase.from("modules").delete().eq("id", id);
    if (error) return res.status(500).json({ error });
    return res.status(204).end();
  }
}
