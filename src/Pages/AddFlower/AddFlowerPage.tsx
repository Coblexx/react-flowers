import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import toast from "react-hot-toast";
import { useEffect } from "react";

type FlowerFormType = {
  flowerName: string;
  flowerDesc: string;
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
      flowerImg: null,
    },
  });

  function onSubmit() {
    console.log();
  }

  // display toast with error message
  useEffect(() => {
    if (errors.flowerName)
      toast.error(errors.flowerName.message || "The flower name is required.");
    if (errors.flowerDesc)
      toast.error(
        errors.flowerDesc.message || "The flower description is required."
      );
    if (errors.flowerImg)
      toast.error(errors.flowerImg.message || "The flower image is required.");
  }, [errors]);

  return (
    <div className="w-full h-full items-center flex justify-center">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="bg-slate-50"
          type="text"
          placeholder="Name of the flower"
          {...register("flowerName", {
            required: "The flower name is required.",
            minLength: 3,
          })}
        />
        <input
          className="bg-slate-100"
          type="text"
          placeholder="Short description"
          {...register("flowerDesc", {
            required: "The flower description is required.",
            minLength: 3,
          })}
        />
        <input
          className="bg-slate-200"
          type="file"
          {...register("flowerImg", {
            required: "The flower image is required.",
          })}
        />
        <Button>
          <input className="cursor-pointer" type="submit" />
        </Button>
      </form>
    </div>
  );
}
