import { useSelector } from "react-redux"
import BackButton from "../../components/UI/BackButton/BackButton";
import { StatItem, StatsList, StatsWrapper } from "./StatsStyles";


const Stats = () => {

    const {buyers} = useSelector(state => state.buyers)
    const {buyersAmount, email} = useSelector(state => state.user);
    const moneyAccumulated = buyers.reduce((acc, current) => acc + parseInt(current.price), 0);
    console.log(moneyAccumulated)

  return (
    <StatsWrapper>
        <BackButton/>
        <StatsList>
            <StatItem>
                Soberbi@s cargados: {buyersAmount}
            </StatItem>
            <StatItem>
                Biyuya acumulada: {moneyAccumulated}
            </StatItem>
        </StatsList>
    </StatsWrapper>
  )
}

export default Stats