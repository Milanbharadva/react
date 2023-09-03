import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import searchlogo from "../../../assets/search.svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-around flex-col lg:flex-row bg-[#007dbc] pt-2 pb-2">
      <NavLink to="/">
        <img
          src={logo}
          style={{
            width: "140px",
            paddingTop: "1px",
            borderWidth: "1px",
            outline: "none ",
          }}
          alt="company logo"
          className="mb-2 sm:mb-0"
        />
      </NavLink>

      <div className="flex bg-white pr-3 rounded-md mb-2 sm:mb-0">
        <input
          type="text"
          style={{ height: "30px", width: "300px", borderRadius: "10px" }}
        />
        <img src={searchlogo} style={{ width: "15px" }} alt="" />
      </div>
      <div className="flex flex-col sm:flex-row  items-center sm:gap-16  text-white">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
        <NavLink to="/signin">SIGNIN</NavLink>
        <NavLink to="/cart">CART</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
