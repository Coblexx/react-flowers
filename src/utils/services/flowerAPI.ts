import supabase, { supabaseUrl } from "./supabase";

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
  return data;
}

export async function deleteFlower(id: number) {
  const { data: flowerData } = await supabase
    .from("flowers")
    .select()
    .eq("id", id);

  const flower = flowerData?.[0];
  const { image } = flower;
  const lastSlashId = image.lastIndexOf("/");
  const flowerImageName = image.slice(lastSlashId);

  const { error: deleteError } = await supabase
    .from("flowers")
    .delete()
    .eq("id", id);

  if (deleteError) console.error(deleteError.message);

  // delete image from storage if flower is deleted
  const { error: deleteStorageError } = await supabase.storage
    .from("image")
    .remove([flowerImageName]);

  if (deleteStorageError)
    throw new Error("Flower image could not have been deleted");
}

export async function createFlower(newFlowerData) {
  const { flowerName, flowerDesc, flowerPrimaryColor, flowerImg } =
    newFlowerData;

  const imageFile = flowerImg[0];
  const imageName = `${Date.now()}---${imageFile.name?.replaceAll("/", "")}`;
  const imagePath = `${supabaseUrl}/storage/v1/object/public/image/${imageName}`;

  const { data, error: createError } = await supabase
    .from("flowers")
    .insert([
      {
        name: flowerName,
        desc: flowerDesc,
        primary_color: flowerPrimaryColor,
        image: imagePath,
      },
    ])
    .select();

  if (createError)
    throw new Error("Something went wrong while creating your flower!");

  // upload image to bucket
  const { error: storageError } = await supabase.storage
    .from("image")
    .upload(imageName, imageFile, {
      cacheControl: "3600",
      upsert: false,
    });

  if (storageError) {
    const { error: deleteError } = await supabase
      .from("flowers")
      .delete()
      .eq("id", data[0].id);

    if (deleteError) console.error(deleteError.message);

    throw new Error("Something went wrong with your image upload!");
  }
}
