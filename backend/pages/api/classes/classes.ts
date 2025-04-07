import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../lib/supabase-client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { data, error } = await supabase.from("classes_funeduc").select("*");
    if (error) return res.status(500).json({ error });
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const { title, alias } = req.body;
    const { data, error } = await supabase
      .from("classes_funeduc")
      .insert({ title, alias })
      .select()
      .single();
    if (error) return res.status(500).json({ error });
    return res.status(201).json(data);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
