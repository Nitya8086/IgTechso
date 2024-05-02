import React from "react";
import { useState } from "react";
import companylogo from "../Photos/company icon.png";
import catlogo from "../Photos/catlogo.png";
import cart from "../Photos/Cart.png";
import search from "../Photos/search.png";
import "./Header.css";


const Header = () => {
  const [task,setTask]=useState();


  const changeHandeler = ()=>{
    setTask('hello');

    alert('login with email id');
  }
  return (
    <div className="header">
      <div className="header-css">
        <div className="logo">
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
          <img src={search} alt ="search"/>
            <input type="search" placeholder="SEARCH FOR COURSES"/>
          </span>

          <span className="catagories">
            <img src={catlogo} alt="img" />
            <p>CATEGORIES</p>
          </span>
        </div>
        <div className="cart-icon">
          <img src={cart} alt="img1" />
          <button onClick={changeHandeler}>LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
