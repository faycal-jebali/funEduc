import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../lib/supabase-client";
/* eslint-disable @typescript-eslint/no-explicit-any */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (typeof id !== "string")
    return res.status(400).json({ error: "Invalid ID" });

  if (req.method === "GET") {
    const { data, error } = await supabase
      .from("classes_funeduc")
      .select("*")
      .eq("id", id)
      .single();
    if (error) return res.status(404).json({ error });
    return res.status(200).json(data);
  }

  if (req.method === "PUT") {
    const { title, alias } = req.body;
    const { data, error } = await supabase
      .from("classes_funeduc")
      .update({ title, alias })
      .eq("id", id)
      .select()
      .single();
    if (error) return res.status(500).json({ error });
    return res.status(200).json(data);
  }

  if (req.method === "DELETE") {
    const { error } = await supabase
      .from("classes_funeduc")
      .delete()
      .eq("id", id);
    if (error) return res.status(500).json({ error });
    return res.status(204).end();
  }

  res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
