import { useState } from "react";
import { GoStar, GoStarFill, GoTrash } from "react-icons/go";
import { Flower } from "../utils/services/flowerAPI.ts";

// components
import Button from "../ui/Button.tsx";

export type FlowerCardType = {
  flower: Flower;
  isDeleting: boolean;
  mutate: (id: number) => void;
};

export default function FlowerCard({
  flower,
  isDeleting,
  mutate,
}: FlowerCardType) {
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
        <Button disabled={isDeleting} onClick={() => mutate(id)}>
          <GoTrash />
          Delete
        </Button>
      </div>
    </li>
  );
}
