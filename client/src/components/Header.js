import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <span>Header</span>
      </Link>
      <ul style={{ listStyle: "none", display: "inline" }}>
        <Link to="/login">
          <li style={{ display: "inline" }}>Log in</li>
        </Link>
        <Link to="/signup">
          <li style={{ display: "inline" }}>Sign up</li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
