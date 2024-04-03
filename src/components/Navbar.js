import React, { useRef } from "react";
import Logo from "../assets/images/logo.png";
import { cart } from "../Data";

// Refs provide us with an API to access and modify DOM elements without using props, states, etc.
const Navbar = () => {
  const navbarRef = useRef();
  const searchRef = useRef();
  const cartRef = useRef();
  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");  //activates the nav bar
    searchRef.current.classList.remove("active"); // deactivates search bar menu to avoid lapping
    cartRef.current.classList.remove("active");  // deactivates cart menu to avoid lapping
  };

  const searchHandler = () => {
    searchRef.current.classList.toggle("active"); // activates searchbar
    navbarRef.current.classList.remove("active"); // deactivates navbar menu to avoid lapping
    cartRef.current.classList.remove("active");  // deactivates cart menu to avoid lapping
  };
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");   // activates cart menu
    searchRef.current.classList.remove("active"); // deactivates search bar menu to avoid lapping
    navbarRef.current.classList.remove("active"); // deactivates navbar menu to avoid lapping
  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#products">Products</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
          <a href="#blogs">Blogs</a>
        </nav>

        {/* Navbar Buttons */}
        <div className="icons">
          <div
            className="fas fa-search"
            id="search-btn"
            onClick={searchHandler}
          ></div>
          <div
            className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={cartHandler}
          ></div>
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" id="search-box" placeholder="search here..." />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
        <div className="cart-items-container" ref={cartRef}>
          {cart.map((item, index) => (                               
            <div className="cart-item" key={index }>
              <span className="fas fa-times"></span>      { /* this icon is used for cross symbol displayed in the cart */}
              <img src={item.img} alt="" />
              <div className="content">
                <h3>cart item 01</h3>
                <div className="price">$15.99/-</div>
              </div>
            </div>
          ))}
          <a href="#" className="btn">
            checkout now
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
