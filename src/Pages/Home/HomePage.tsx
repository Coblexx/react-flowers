import { useNavigate } from "react-router-dom";
import { GoArrowRight, GoPlus } from "react-icons/go";
import Button from "../../ui/Button";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex gap-4">
        <Button onClick={() => navigate("/add-flower")}>
          Add a flower
          <GoPlus />
        </Button>
        <Button onClick={() => navigate("/gallery")}>
          Go to gallery
          <GoArrowRight />
        </Button>
      </div>
    </div>
  );
}
