import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "styles/common";
import { logo } from "styles/image";
import SearchBar from "./SearchBar";

const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  padding: 8px 10px;
  border-top: 3px solid rgb(244, 130, 37);
  background-color: hsl(210, 8%, 97.5%);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);

  > #logo {
    display: inline-block;
    flex-grow: 0;
  }

  img {
    width: 145px;
  }
`;

const Buttons = styled.div`
  display: inline-block;
  flex-grow: 0;
`;

function Header() {
  return (
    <HeaderContainer>
      <div id="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <SearchBar />
      <Buttons>
        <Link to="/login">
          <Button>Log in</Button>
        </Link>
        <Link to="/signup">
          <Button margin="0 0 0 5px">Sign up</Button>
        </Link>
      </Buttons>
    </HeaderContainer>
  );
}

export default Header;
