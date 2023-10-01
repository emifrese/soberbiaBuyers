import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import BuyersForm from "../pages/BuyersForm/BuyersForm";
import Buyers from "../pages/Buyers/Buyers";
import Stats from "../pages/Stats/Stats";

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<BuyersForm />} />
      <Route path="/buyers" element={<Buyers />} />
      <Route path="/stats" element={<Stats />} />
    </ReactDomRoutes>
  );
}

export default Routes;
