import { BuyersPay } from "./BuyersPayContainerStyles";

const BuyersPayContainer = ({ length }) => {
  return (
    <BuyersPay>
      <p>Cantidad de personas: {length}</p>
    </BuyersPay>
  );
};

export default BuyersPayContainer;
