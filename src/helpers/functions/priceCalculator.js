import { prices } from "../data/prices.js";

const actualDate = new Date();

export const showNumbers = () => {};

export const calculatePrice = () => {
  if (actualDate.getMonth() + 1 === 10 && actualDate.getDate() >= 7 && actualDate.getHours() >= 22) {
    return 5000;
  }
  return prices.filter(
    (round) => round.dateStart <= actualDate && round.dateEnd >= actualDate
  )[0].price;
};
