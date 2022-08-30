import LeftSidebar from "components/LeftSidebar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ContentContainer, PageContainer } from "styles/common";
import Footer from "components/Footer";
import styled from "styled-components";
import GridTest from "styles/GridTest";

const HeaderContainer = styled.header`
  width: 100vh;
  padding: 1rem;
  border: 1px solid red;
  background: #f4f4f4;
  @media screen and (max-width: 767px) {
    width: 700px;
    align-items: flex-end;
  }
`;

const Container = styled(ContentContainer)`
  flex-direction: column;
  margin: 0;
  padding: 30px 20px;
  @media screen and (max-width: 767px) {
    width: 700px;
  }
`;

function AllUsersPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/members`).then((res) => {
      setUsers(res.data);
      setIsLoading(false);
    });
  }, []);

  // 서버 통신 테스트
  useEffect(() => {
    axios.get("/helloworld").then((res) => console.log(res));
  }, []);

  const handleInputValue = (key) => (e) => {
    setUsers({ ...users, [key]: e.target.value });
  };

  return (
    <PageContainer>
      <ContentContainer>
        <LeftSidebar />
        <Container>
          <HeaderContainer>
            <h1>Users</h1>
            <div>
              <input
                type="text"
                placeholder="Filter by user"
                onChange={handleInputValue("users")}
              />
            </div>
          </HeaderContainer>
          <GridTest users={users} isLoading={isLoading}></GridTest>
        </Container>
        {/* <div id="alluserspage">
            {!isLoading &&
              users.map((user) => (
                <div key={user.id}>
                  <div>{user.nickname}</div>
                  <div>{user.reputation}</div>
                </div>
              ))}
          </div> */}
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}

export default AllUsersPage;
