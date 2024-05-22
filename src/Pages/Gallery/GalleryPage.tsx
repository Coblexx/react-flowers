import { useQuery } from "@tanstack/react-query";
import { getFlowers } from "../../utils/services/flowerAPI.ts";

export default function GalleryPage() {
  const {
    isLoading,
    data: flowersData,
    error,
  } = useQuery({
    queryKey: ["flowers"],
    queryFn: getFlowers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return console.error(error);

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
