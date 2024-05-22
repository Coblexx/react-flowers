import { getFlowers, Flower } from "../../utils/services/flowerAPI.ts";
import { useEffect, useState } from "react";

export default function GalleryPage() {
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    async function fetchFlowers() {
      try {
        const res = await getFlowers();

        setFlowers(res);
      } catch (err) {
        console.error(err);
      }
    }

    fetchFlowers();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <div>
        <ul className="flex gap-4 flex-wrap">
          {flowers ? (
            flowers.map((flower) => {
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
    </div>
  );
}
