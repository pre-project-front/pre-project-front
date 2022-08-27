import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LeftSidebarContainer = styled.nav`
  min-width: 164px;

  > div {
    position: sticky;
    top: 50px;
    padding-top: 24px;
  }
`;

function LeftSidebar() {
  return (
    <LeftSidebarContainer>
      <div>
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/members">
          <div>Users</div>
        </Link>
      </div>
    </LeftSidebarContainer>
  );
}

export default LeftSidebar;
