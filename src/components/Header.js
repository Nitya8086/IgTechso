import React from "react";
import companylogo from "../Photos/company icon.png";
import catlogo from "../Photos/catlogo.png";
import cart from "../Photos/Cart.png";
import "./Header.css";
import search from "../Photos/search.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-css">
        <div>
          <img src={companylogo} alt="img1" />
        </div>
        <div className="link">
          <p>HOME</p>
          <p>COURSES</p>

          <p>SHOP</p>
          <p>BLOGS</p>
        </div>
        <div className="search-container">
          <span className="img-input">
            <input type="text" placeholder="SEARCH FOR COURSES" />
          </span>

          <span className="catagories">
            <img src={catlogo} alt="img" />
            <p>CATEGORIES</p>
          </span>
        </div>
        <div className="cart-icon">
          <img src={cart} alt="img1" />
          <button>LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
