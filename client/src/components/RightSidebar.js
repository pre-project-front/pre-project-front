import React from "react";
import styled from "styled-components";

function RightSidebar() {
  return <RightSide></RightSide>;
}

export default RightSidebar;

const RightSide = styled.div`
  min-width: 300px;
  flex-grow: 0;
  border: 1px solid black;
  margin-left: 24px;
`;
