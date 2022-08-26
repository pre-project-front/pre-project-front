import LeftSidebar from "components/LeftSidebar";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function AllMembersPage() {
  return (
    <Container>
      <LeftSidebar />
      <div>
        <div>
          <h1>Users</h1>
        </div>
        <div id="members">
          <div>member</div>
          <div>member</div>
          <div>member</div>
          <div>member</div>
        </div>
      </div>
    </Container>
  );
}

export default AllMembersPage;
