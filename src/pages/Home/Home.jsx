import { useSelector } from "react-redux";
import Sign from "../../components/UI/Sign/Sign";
import { HeaderName, HomeWrapper, LinkList, LinkListElement } from "./HomeStyles";
import { Link } from "react-router-dom";
import PartyWrapper from "../../components/Logo/PartyWrapper";

const Home = () => {
  const { displayName } = useSelector((state) => state.user);

  return (
    <HomeWrapper>
      <PartyWrapper></PartyWrapper>
      <HeaderName>{displayName}</HeaderName>
      <LinkList>
        <LinkListElement>
          <Link to={"/form"}>Carga tu/s Soberbi@/s</Link>
        </LinkListElement>
        <LinkListElement>
          <Link to={"/stats"}>Stats del user</Link>
        </LinkListElement>
        <LinkListElement>
          <Link to={"/buyers"}>Todos tus soberbi@s</Link>
        </LinkListElement>
      </LinkList>
      <Sign type="out" />
    </HomeWrapper>
  );
};

export default Home;
