import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [screen, setScreen] = useState(window.innerWidth);
  const toggleNav = () => {
    setMenu(!menu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreen(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      
     
      {(menu || screen > 500) && (
        <ul className="list">
         
          <li><Link  className="items" to="/sign">Home</Link></li>
          <li><Link  className="items" to="/sign">Blog</Link></li>
          <li><Link  className="items" to="/sign">Sign up</Link></li>
          <button><Link className="button-login" to="/login">Login</Link></button>
        </ul>
      )}

      <button onClick={toggleNav} className="btn">
        BTN{" "}
      </button>
    </nav>
  );
};

export default Navbar;
