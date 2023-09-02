import { Routes, Route } from "react-router-dom";
import Home from "../UI/Home";
import About from "../UI/About";
import Contact from "../UI/Contact";
import Signin from "../UI/Signin";
import Cart from "../UI/Cart/Cart";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact/>}/>
      <Route path="signin" element={<Signin/>}/>
      <Route path="cart" element={<Cart/>}/>
    </Routes>
  );
};

export default Router;
