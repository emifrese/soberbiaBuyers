import Form from "./components/Form/Form";
import { LayoutWrapper } from "./components/UI/Layout/Layout";
import Sign from "./components/UI/Sign/Sign.jsx";

function App() {
  return (
    <>
      <Sign type="in" />
      <LayoutWrapper>
        <Form />
      </LayoutWrapper>
    </>
  );
}

export default App;
