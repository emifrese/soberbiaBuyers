import { Back } from "./BackButtonStyles";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const returnHomerHandler = () => {
    navigate("/");
  };

  return <Back onClick={returnHomerHandler}>Return Home</Back>;
};

export default BackButton;
