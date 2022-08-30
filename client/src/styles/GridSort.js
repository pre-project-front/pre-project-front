import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 20px 15px 0px;
  font-size: 100%;
  width: 1000px;
  gap: 12px;
  background-color: #6a737c;
  @media screen and (max-width: 767px) {
    width: 300px;
    height: 1000px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

const UserButton = (props) => {
  return <button className={props.className}>{props.children}</button>;
};

const UserNameButton = styled(UserButton)`
  display: table;
  margin-left: 60px;
  padding: 0px -10px;
  width: 35px;
  height: 7px;
  color: #0074cc;
  font-size: 15px;
`;

const UserlocationButton = styled.div`
  color: #6a737c;
  margin: 4px 0px -10px 60px;
  font-size: 13px;
`;

const UserReputationButton = styled.div`
  font-weight: bold;
  font-size: 13px;
  margin: -5px 0px 0px 60px;
`;

const UserTagsButton = styled(UserButton)`
  display: flex;
  margin-left: 60px;
  color: #0074cc;
  font-size: 13px;
  text-align: left;
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
                <UserNameButton>{item.nickname}</UserNameButton>
                <UserlocationButton>{item.location}</UserlocationButton>
                <UserReputationButton>{item.reputation}</UserReputationButton>
                <UserTagsButton>{item.tags}</UserTagsButton>
              </BoxStyle>
            </div>
          ))}
    </Grid>
  );
}

export default GridTest;
