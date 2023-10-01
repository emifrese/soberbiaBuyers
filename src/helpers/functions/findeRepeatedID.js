export const findRepeatedID = (buyers, ID) => {
  const index = buyers.findIndex(
    (buyer) => buyer.ID.toString().trim() === ID.toString().trim()
  );

  return index !== -1;
};
