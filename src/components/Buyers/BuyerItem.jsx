import React from "react";
import { BuyerItemLi } from "./BuyerItemStyles";

const BuyerItem = ({ children, expandPayID, ID, check, background }) => {
  return <BuyerItemLi  background={background} onClick={() => check && expandPayID(ID)}>{children}</BuyerItemLi>;
};

export default BuyerItem;
