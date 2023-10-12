import React from "react";
import { Link } from "react-router-dom";

function DropDown() {
  return (
    <div class="dropdown">
      <button class="dropbtn">Dropdown</button>
      <div class="dropdown-content">
        <Link to="/">Account</Link>
        <Link to="/">Logout</Link>
      </div>
    </div>
  );
}

export default DropDown;
