import React from "react";
import styled from "styled-components";

// const Common = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin: 20px;

// `;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 20px 0px;
  width: 900px;
  background-color: #6a737c;
  @media screen and (max-width: 767px) {
    width: 400px;
    height: 1000px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

const BoxStyle = styled.div`
  background-color: white;
  height: 90px;
  margin: 5px;
  @media screen and (max-width: 767px) {
    width: 300px;
  }
`;

function GridTest({ users, isLoading }) {
  const items = [...users];

  return (
    <Grid>
      {isLoading
        ? null
        : items.map((item, key) => (
            <div key={key}>
              <BoxStyle>
                <div> {item.nickname}</div>
                <div> {item.reputation}</div>
              </BoxStyle>
            </div>
          ))}
    </Grid>
  );
}

export default GridTest;
