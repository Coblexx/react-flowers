import { GoArrowRight } from "react-icons/go";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate("/gallery")}>
        Go to gallery
        <GoArrowRight />
      </Button>
    </div>
  );
}
