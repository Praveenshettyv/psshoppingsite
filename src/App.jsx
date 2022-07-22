import { useState, useEffect } from "react";
import Mainpage from "./Allpages/Mainpage";
import "./App.css";
import { useDispatch } from "react-redux";
import { setallproducts } from "./redux/action/index";
import Header from "./Headers/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Men from "./Allpages/Men";
import Women from "./Allpages/Women";
import Jewelery from "./Allpages/Jewelery";
import Electronics from "./Allpages/Electronics";
import Finalcart from "./Headers/Finalcart";
import Footer from "./footers/Footer";
import Whatspp from "./footers/Whatspp";
import Payments from "./Payment/Payments";
import Headerone from "./Headers/Headerone";
import Product from "./Allpages/Product";
import Privacy_Policy from "./footers/Privacy_Policy";
import Terms_and_Conditions from "./footers/Terms_and_Conditions";
import Cookies from "./footers/Cookies";
function App() {
  var dispatch = useDispatch();
  const [state, setstate] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((Response) => Response.json())
      .then((data) => {
        setstate(data);
      });
  }, []);
  useEffect(() => {
    if (state != "") {
      dispatch(setallproducts(state));
    }
  }, [state]);

  return (
    <div className="App">
      <BrowserRouter>
        <Headerone />
        <Header />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/cart" element={<Finalcart />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/whatsapp" element={<Whatspp />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/Privacy_Policy" element={<Privacy_Policy />} />
          <Route
            path="/Terms_and_Conditions"
            element={<Terms_and_Conditions />}
          />
          <Route path="/Cookies" element={<Cookies />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
