import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ marginLeft: "50px", marginTop: "50px" }}>
      <NavLink to="/" style={{ marginRight: "50px" }}>
        Home Page
      </NavLink>
      <NavLink to="/add">Add product</NavLink>
    </div>
  );
}

export default Navbar;
