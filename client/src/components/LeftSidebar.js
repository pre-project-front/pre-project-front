import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function LeftSidebar() {
  return (
    <LeftSidebarContainer>
      <nav>
        <Link to="/">
          <div className="home">Questions</div>
        </Link>
        <Link to="/members">
          <div className="user">Users</div>
        </Link>
      </nav>
    </LeftSidebarContainer>
  );
}

export default LeftSidebar;

const LeftSidebarContainer = styled.aside`
  min-width: 164px;
  flex-grow: 0;

  > nav {
    position: sticky;
    top: 50px;
    padding-top: 20px;
    font-size: 0.9rem;
  }

  .home {
    height: 26px;
    padding: 2px 4px 2px 12px;
  }

  .user {
    height: 26px;
    padding: 2px 4px 2px 12px;
  }
`;
