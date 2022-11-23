import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "./logoWhite.png";
// import { useOuterClick } from "../../hooks/useOuterClick";

export const Navbar = () => {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false);
  // const [ref, isVisible, setIsVisible] = useOuterClick(true);
  // console.log(isVisible, "isVisible");

  //navbar scroll changeBackground function
  const changeBackground = () => {
    //console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  // console.log(navbar);
  return (
    <div className={navbar ? "nav-true" : "nav-false"}>
      <nav className="navbar fixed-top navbar-expand-md navbar-light" >
      {/* ref={ref} */}
      <Link to="/">
          <img src={logo} alt="Logo"/>
          </Link>
      {/* onClick={() => !isVisible && setIsVisible(true)} */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup"  >
        {/*{isVisible &&  <div className="navbar-nav text-right"...></div> onClick={(e) => {e.stopPropagation();setIsVisible(false)}}} */}
         <div className="navbar-nav text-right" >
          <Link className="nav-item nav-link" to="/" >
              HOME <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-item nav-link" to="/my-favourites" >
              MY FAVOURITES <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-item nav-link" to="/top-50">
              TOP 50
            </Link>
            <Link className="nav-item nav-link" to="/about">
              ABOUT
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};