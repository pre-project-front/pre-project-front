import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LeftSide = styled.div`
  min-width: 164px;
  border: 1px solid black;
  height: 100vh;
`;

function LeftSidebar() {
  return (
    <LeftSide>
      <div>Left sidebar</div>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/members">
        <div>Users</div>
      </Link>
    </LeftSide>
  );
}

export default LeftSidebar;
