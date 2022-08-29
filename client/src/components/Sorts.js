import React from "react";
import styled from "styled-components";

const DFlex = styled.div`
  display: flex;
  border-radius: 3px;
`;

function Sorts() {
  return (
    <DFlex>
      <div>Newest</div>
      <div>Active</div>
      <div>Unansered</div>
    </DFlex>
  );
}

export default Sorts;
