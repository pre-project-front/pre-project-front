import LeftSidebar from "components/LeftSidebar";
import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function AllUsersPage() {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <Container>
      <LeftSidebar />
      <div>
        <div>
          <h1>Users</h1>
        </div>
        <div id="alluserspage">
          <div>member</div>
          <div>member</div>
          <div>member</div>
        </div>
      </div>
    </Container>
  );
}

export default AllUsersPage;
