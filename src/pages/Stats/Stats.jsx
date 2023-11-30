import { useSelector } from "react-redux";
import BackButton from "../../components/UI/BackButton/BackButton";
import { StatItem, StatsList, StatsWrapper } from "./StatsStyles";

import maleImg from "../../assets/male.svg";
import femaleImg from "../../assets/female.svg";

const Stats = () => {
  const { buyers } = useSelector((state) => state.buyers);
  const amountMale = buyers.filter((buyer) => buyer.gender === "male").length;
  const amountFemale = buyers.filter((buyer) => buyer.gender === "female").length 
  const { buyersAmount, email } = useSelector((state) => state.user);
  const moneyAccumulated = buyers.reduce(
    (acc, current) => acc + parseInt(current.price),
    0
  );
  return (
    <StatsWrapper>
      <BackButton />
      <StatsList>
        <StatItem>Soberbi@s cargados: {buyersAmount}</StatItem>
        <StatItem>Biyuya acumulada: {moneyAccumulated}</StatItem>
        <StatItem>
          <img
            src={maleImg}
            alt=""
            style={{
              filter:
                "invert(100%) sepia(100%) saturate(0%) hue-rotate(247deg) brightness(103%) contrast(101%)",
            }}
          />
          {amountMale}
        </StatItem>
        <StatItem>
          <img
            src={femaleImg}
            alt=""
            style={{
              filter:
                "invert(100%) sepia(100%) saturate(0%) hue-rotate(247deg) brightness(103%) contrast(101%)",
            }}
          />
          {amountFemale}
        </StatItem>
      </StatsList>
    </StatsWrapper>
  );
};

export default Stats;
