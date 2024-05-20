import supabase from "./supabase";

export async function getFlowers() {
  const { data, error } = await supabase.from("flowers").select("*");

  if (error) console.log(error);
  return data;
}
