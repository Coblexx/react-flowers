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

  if (error) console.log(error);
  return data as Flower[];
}
