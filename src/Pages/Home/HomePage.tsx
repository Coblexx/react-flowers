import { getFlowers } from "../../utils/services/flowerAPI.ts";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    async function fetchFlowers() {
      const res = await getFlowers();

      console.log(res);
    }

    fetchFlowers();
  }, []);

  return (
    <div>
      <h1>HOMEPAGE</h1>
    </div>
  );
}
