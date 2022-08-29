import LeftSidebar from "components/LeftSidebar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ContentContainer, PageContainer } from "styles/common";
import Footer from "components/Footer";

function AllUsersPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/members`).then((res) => {
      setUsers(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <PageContainer>
      <ContentContainer>
        <LeftSidebar />
        <div>
          <div>
            <h1>Users</h1>
          </div>
          <div id="alluserspage">
            {!isLoading &&
              users.map((user) => (
                <div key={user.id}>
                  <div>{user.nickname}</div>
                  <div>{user.reputation}</div>
                </div>
              ))}
          </div>
        </div>
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}

export default AllUsersPage;
