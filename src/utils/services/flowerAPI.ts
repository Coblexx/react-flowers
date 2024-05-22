import supabase from "./supabase";

export type Flower = {
  id: number;
  name: string;
  desc: string;
  image: string;
  primary_color: string;
};

export async function getFlowers() {
  const { data, error } = await supabase.from("flowers").select("*");

  if (error) console.error(error.message);
  return data as Flower[];
}

export async function deleteFlower(id: number) {
  const { error } = await supabase.from("flowers").delete().eq("id", id);

  if (error) console.error(error.message);
}
