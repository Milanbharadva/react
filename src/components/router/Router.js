import { Routes, Route } from "react-router-dom";
import Home from "../UI/Home";
import About from "../UI/About";
import Contact from "../UI/Contact";
import Signin from "../UI/Signin";
import Cart from "../UI/Cart/Cart";
import Singleproduct from "../Singleproduct";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact/>}/>
      <Route path="signin" element={<Signin/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="singleproduct/:prodid" element={<Singleproduct/>}/>
      <Route path="singleproduct" element={<Singleproduct/>}/>
      <Route path="*" element={<Home/>}/>

    </Routes>
  );
};

export default Router;
