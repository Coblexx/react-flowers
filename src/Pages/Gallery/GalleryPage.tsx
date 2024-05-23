import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteFlower, getFlowers } from "../../utils/services/flowerAPI.ts";
import { Flower } from "../../utils/services/flowerAPI.ts";
import toast from "react-hot-toast";
import { GoStar, GoStarFill, GoTrash } from "react-icons/go";
import { useState } from "react";

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
    <>
      <h1>Gallery</h1>
      <div>
        <ul className="flex gap-4 flex-wrap">
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
    </>
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
    <div className="m-3 border-[1px] rounded-lg border-solid border-slate-200 px-4 py-3 flex flex-col gap-2">
      <div className="flex justify-between">
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
        className="block w-60 h-60 overflow-hidden rounded-lg"
        src={image}
        alt={name}
      />
      <div className="flex justify-end">
        <button
          className="rounded-full bg-slate-100 h-fit px-4 w-fit flex items-center gap-2 hover:bg-slate-200 p-2"
          disabled={isDeleting}
          onClick={() => mutate(id)}
        >
          <GoTrash />
          Delete
        </button>
      </div>
    </div>
  );
}
