import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TopHeader = styled.header`
  /* display: flex;
  justify-content: space-between; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 100%;
  height: 47px;
  background-color: lightgrey;
  border: 1px black solid;
`;

const Buttons = styled.ul`
  display: inline-block;
`;

const Button = styled.li`
  display: inline-block;
`;

const SearchForm = styled.form`
  display: inline-block;
`;

function Header() {
  const [value, setValue] = useState("");

  const handleSearchInput = (e) => {
    setValue(e.target.value);
  };

  // 전체 게시글 관련 정보를 전역으로 관리, 거기서 가져와서 대조하기
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <TopHeader>
      <Link to="/">
        <span>Stack overflow</span>
      </Link>
      <SearchForm onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleSearchInput}
          placeholder="Search..."
        />
      </SearchForm>
      <Buttons>
        <Link to="/login">
          <Button>Log in</Button>
        </Link>
        <Link to="/signup">
          <Button>Sign up</Button>
        </Link>
      </Buttons>
    </TopHeader>
  );
}

export default Header;
