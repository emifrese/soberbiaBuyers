import { LogoImg, LogoWrapper } from "./PartyWrapperStyles"
import biggLogo from "../../assets/biggSoberbiaLogo.jpg"

const PartyWrapper = () => {
  return (
    <LogoWrapper>
        <LogoImg src={biggLogo}/>
    </LogoWrapper>
  )
}

export default PartyWrapper