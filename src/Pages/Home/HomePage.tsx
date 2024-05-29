import { GoArrowRight } from "react-icons/go";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="">
        <Button onClick={() => navigate("/gallery")}>
          Go to gallery
          <GoArrowRight />
        </Button>
      </div>
    </div>
  );
}
