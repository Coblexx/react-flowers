// react
import { useState } from "react";

// react query
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// utils
import { GoStar, GoStarFill, GoTrash } from "react-icons/go";
import { deleteFlower, getFlowers } from "../../utils/services/flowerAPI.ts";
import { Flower } from "../../utils/services/flowerAPI.ts";
import toast from "react-hot-toast";

export default function GalleryPage() {
  const queryClient = useQueryClient();

  const {
    isLoading,
    data: flowersData,
    error,
  } = useQuery({
    queryKey: ["flowers"],
    queryFn: getFlowers,
  });

  const { isPending: isDeleting, mutate } = useMutation({
    mutationFn: (id: number) => deleteFlower(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["flowers"],
      });

      toast.success("Flower succesfully deleted!");
    },
    onError: () => {
      toast.error("The flower could not have been deleted!");
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong! {`${error.message}`}</p>;

  return (
    <div className="flex justify-center">
      <ul className="flex flex-col py-6 px-4 md:flex-row gap-4 flex-wrap">
        {flowersData ? (
          flowersData.map((flower) => {
            return (
              <FlowerCard
                isDeleting={isDeleting}
                mutate={mutate}
                flower={flower}
                key={flower.id}
              />
            );
          })
        ) : (
          <p>No flowers found</p>
        )}
      </ul>
    </div>
  );
}

type FlowerCardType = {
  flower: Flower;
  isDeleting: boolean;
  mutate: (id: number) => void;
};

function FlowerCard({ flower, isDeleting, mutate }: FlowerCardType) {
  const [isFavorite, setIsFavorite] = useState(false);

  const { id, name, image } = flower;

  return (
    <li className="border-[1px] w-fit rounded-lg border-solid border-slate-200 p-2 flex-shrink-0 flex flex-col gap-2">
      <div className="flex">
        <h3 className="text-2xl w-full">{name}</h3>
        <button
          onClick={() => {
            setIsFavorite((fav) => !fav);
          }}
        >
          {isFavorite ? (
            <GoStarFill size={25} color="yellow" />
          ) : (
            <GoStar size={25} color="gray" />
          )}
        </button>
      </div>
      <img
        className="block md:w-60 md:h-60 w-80 overflow-hidden rounded-lg"
        src={image}
        alt={name}
      />
      <div className="flex justify-end">
        <button
          className="rounded-full h-fit px-4 w-fit flex items-center gap-2 hover:bg-slate-200 p-2 border-solid border-2 border-slate-200"
          disabled={isDeleting}
          onClick={() => mutate(id)}
        >
          <GoTrash />
          Delete
        </button>
      </div>
    </li>
  );
}
