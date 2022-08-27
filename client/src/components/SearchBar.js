import React, { useState } from "react";
import styled from "styled-components";

const SearchForm = styled.form`
  flex-grow: 1;
  display: flex;
  padding: 0 20px;

  > input {
    flex-grow: 1;
    padding: 5px;
  }
`;

function SearchBar() {
  const [value, setValue] = useState("");

  const handleSearchInput = (e) => {
    setValue(e.target.value);
  };

  // 전체 게시글 관련 정보를 전역으로 관리, 거기서 가져와서 대조하기
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SearchForm onSubmit={handleSearchSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleSearchInput}
        placeholder="Search..."
      />
    </SearchForm>
  );
}

export default SearchBar;
