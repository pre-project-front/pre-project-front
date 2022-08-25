import React from "react";
import { Link } from "react-router-dom";

function LeftSidebar() {
  return (
    <div style={{ border: "1px solid black" }}>
      <div>Left sidebar</div>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/members">
        <div>Users</div>
      </Link>
    </div>
  );
}

export default LeftSidebar;
