import { BuyerName } from "./BuyerNameContainerStyles";

const BuyerNameContainer = ({ name, surname, price}) => {
  return (
    <BuyerName>
      <h3>{surname}, {name}</h3>
      <h3>${price}</h3>
    </BuyerName>
  );
};

export default BuyerNameContainer;
