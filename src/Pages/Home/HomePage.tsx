import { getFlowers, Flower } from "../../utils/services/flowerAPI.ts";
import { useEffect, useState } from "react";

export default function HomePage() {
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
      <h1>HOMEPAGE</h1>
      <div>
        <ul>
          {flowers.map((flower) => {
            return (
              <div key={flower.id}>
                <h3>{flower.name}</h3>
                <p>{flower.desc}</p>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
