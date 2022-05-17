import React from "react";
import "./Header.css";
import './content'
import { useState } from "react";






function Header() {


  var i = 0;
  return (
    <div className="navigation">
      <div className="links">

        <div style={{ background: "#24547a" }} className="item">
          <h1 className="item2">Projects</h1>
        </div>

        <div style={{ background: "#24227a" }} className="item">
          <h1 className="item2">GitHub</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
