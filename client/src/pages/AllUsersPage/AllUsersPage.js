import LeftSidebar from "components/LeftSidebar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ContentContainer, PageContainer } from "styles/common";
import Footer from "components/Footer";
import styled from "styled-components";
import GridSort from "styles/GridSort";

const HeaderContainer = styled.header`
  width: 20%;
  height: 200px;
  padding: 1rem;
  font-size: 2rem;

  @media screen and (max-width: 767px) {
    width: 700px;
    align-items: flex-end;
  }
`;

const UserInput = styled("input")`
  background: gray;
  width: 150px;
  margin-top: 25px;
  padding: 0.6em 0.7em;
  border: 1px solid #babfc4;
  border-radius: 3px;
  background-color: white;
  color: #0c0d0e;
  font-size: 13px;
  font-family: inherit;
`;

const Container = styled(ContentContainer)`
  flex-direction: column;
  margin: 0;
  padding: 30px 20px;
  @media screen and (max-width: 767px) {
    width: 700px;
  }
`;

const SideButtonGroup = styled.button`
  display: inline-table;
  position: relative;
  top: -110px;
  width: 7%;
  margin: 0px -30px 20px 30px;
  padding: 15px 10px 15px 10px;
  color: #3b4045;
  background-color: white;
  border: 1px solid #838c95;
  border-radius: 0px;
  font-size: 12px;
  line-height: 2px;

  cursor: pointer;
  &:active {
    background-color: #e3e6e8;
  }
  &:hover {
    background-color: #f8f9f9;
  }
`;

const TabsInterval = styled.button`
  position: relative;
  top: -110px;
  width: 100px;
  margin: 10px -90px -20px 70px;
  padding: 1em;
  color: #3b4045;
  border-bottom: none;
  font-size: 13px;
  line-height: 2px;

  cursor: pointer;
  &:active {
    background-color: #e3e6e8;
  }
  &:hover::after {
    content: "";
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 4px;
    position: absolute;
    border-bottom: 2px solid orange;
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

  //사이드 버튼 그룹
  const data = ["Reputation", "New users", "Voters", "Editors", "Moderators"];
  const [buttonActive, setButtonActive] = useState("");

  const toggleActive = (e) => {
    setButtonActive((prev) => {
      return e.target.value;
    });
  };

  //탭 전환 버튼
  const tabData = ["week", "month", "quarter", "year", "all"];
  const [tabButtonActive, setTabButtonActive] = useState("");

  const tabToggleActive = (e) => {
    setTabButtonActive((prev) => {
      return e.target.value;
    });
  };

  return (
    <PageContainer>
      <ContentContainer>
        <LeftSidebar />
        <Container>
          <HeaderContainer>
            <h1>Users</h1>
            <div>
              <UserInput
                input
                type="text"
                placeholder="Filter by user"
                onChange={handleInputValue("users")}
              />
            </div>
          </HeaderContainer>
          <button>
            {data.map((item, idx) => {
              return (
                <>
                  <SideButtonGroup
                    key={item}
                    value={idx}
                    className={
                      //reputation은 그레이이고, 버튼 눌렀을 때 색깔 바껴야하는 것
                      "button" + (idx === buttonActive ? " active" : "")
                    }
                    onClick={toggleActive}
                  >
                    {item}
                  </SideButtonGroup>
                </>
              );
            })}
          </button>
          <button>
            {tabData.map((item, idx) => {
              return (
                <>
                  <TabsInterval
                    key={item}
                    value={idx}
                    className={
                      "button" + (idx === tabButtonActive ? " active" : "")
                    }
                    onClick={tabToggleActive}
                  >
                    {item}
                  </TabsInterval>
                </>
              );
            })}
          </button>

          <GridSort users={users} isLoading={isLoading}></GridSort>
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
