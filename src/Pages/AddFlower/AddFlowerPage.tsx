import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { createFlower } from "../../utils/services/flowerAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type FlowerFormType = {
  flowerName: string;
  flowerDesc: string;
  flowerPrimaryColor: string;
  flowerImg: File | null;
};

export default function AddFlowerPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FlowerFormType>({
    defaultValues: {
      flowerName: "",
      flowerDesc: "",
      flowerPrimaryColor: "",
      flowerImg: null,
    },
  });

  function onSubmit(data) {
    mutate(data);
  }

  useEffect(() => {
    if (errors.flowerName)
      toast.error(errors.flowerName.message || "The flower name is required.");
    if (errors.flowerDesc)
      toast.error(
        errors.flowerDesc.message || "The flower description is required."
      );
    if (errors.flowerPrimaryColor)
      toast.error(
        errors.flowerPrimaryColor.message || "The flower color is required."
      );
    if (errors.flowerImg)
      toast.error(errors.flowerImg.message || "The flower image is required.");
  }, [errors]);

  // query
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate } = useMutation({
    mutationFn: (data) => createFlower(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["flowers"],
      });

      toast.success("Flower succesfully created!");
    },
    onError: () => {
      toast.error("The flower could not have been created!");
    },
  });

  return (
    <div className="w-full h-full items-center flex flex-col justify-center">
      <h1 className="text-2xl px-2 py-4">Add a flower to the gallery!</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <label className="flex flex-col" htmlFor="flowerName">
          Name of the flower:
          <input
            className="bg-slate-100 px-5 py-3 rounded-full"
            type="text"
            placeholder="Name of the flower"
            {...register("flowerName", {
              required: "The flower name is required.",
              minLength: 3,
            })}
          />
        </label>
        <label className="flex flex-col" htmlFor="flowerPrimaryColor">
          Flower's primary color:
          <input
            className="bg-slate-100 px-5 py-3 rounded-full"
            type="text"
            placeholder="Short description"
            {...register("flowerPrimaryColor", {
              required: "The flower primary color is required.",
              minLength: 3,
            })}
          />
        </label>
        <label className="flex flex-col" htmlFor="flowerDesc">
          Description of the flower:
          <input
            className="bg-slate-100 px-5 py-3 rounded-full"
            type="text"
            placeholder="Short description"
            {...register("flowerDesc", {
              required: "The flower description is required.",
              minLength: 3,
            })}
          />
        </label>
        <label className="flex flex-col" htmlFor="flowerImg">
          Image of the flower:
          <input
            className="bg-slate-100 px-5 py-3 rounded-full"
            type="file"
            {...register("flowerImg", {
              required: "The flower image is required.",
            })}
          />
        </label>
        <div className="w-full flex justify-end">
          <Button disabled={isCreating}>
            <input className="cursor-pointer" type="submit" />
          </Button>
        </div>
      </form>
    </div>
  );
}
