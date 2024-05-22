import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteFlower, getFlowers } from "../../utils/services/flowerAPI.ts";

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
                <div key={flower.id}>
                  <h3>{flower.name}</h3>
                  <p>{flower.desc}</p>

                  <button
                    disabled={isDeleting}
                    onClick={() => mutate(flower.id)}
                  >
                    Delete
                  </button>
                </div>
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
