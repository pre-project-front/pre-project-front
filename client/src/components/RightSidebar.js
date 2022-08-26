import React from "react";
import styled from "styled-components";

const RightSide = styled.div`
  min-width: 300px;
  flex-grow: 0;
  border: 1px solid black;
`;

function RightSidebar() {
  return (
    <RightSide>
      <div>Right sidebar</div>
    </RightSide>
  );
}

export default RightSidebar;
