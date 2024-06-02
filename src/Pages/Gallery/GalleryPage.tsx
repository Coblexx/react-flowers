// react

// react query
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// utils
import { deleteFlower, getFlowers } from "../../utils/services/flowerAPI.ts";

import toast from "react-hot-toast";
import FlowerCard from "../../ui/FlowerCard.tsx";

export default function GalleryPage() {
  const queryClient = useQueryClient();

  const {
    isFetching,
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

  if (error) return <p>Something went wrong! {`${error.message}`}</p>;

  return (
    <div className="flex">
      <ul className="flex flex-col py-6 px-4 md:flex-row gap-4 flex-wrap">
        {flowersData
          ? flowersData.map((flower) => {
              return (
                <FlowerCard
                  isDeleting={isDeleting}
                  mutate={mutate}
                  flower={flower}
                  key={flower.id}
                />
              );
            })
          : (isFetching && <p>Loading...</p>) || <p>No flowers found</p>}
      </ul>
    </div>
  );
}
