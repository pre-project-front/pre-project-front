import LeftSidebar from "components/LeftSidebar";
// import RightSidebar from "components/RightSidebar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, ContentContainer, PageContainer } from "styles/common";
import Footer from "components/Footer";
import styled from "styled-components";

const MainContainer = styled.div`
  border-left: 1px solid hsl(210, 8%, 85%);
  padding: 24px 16px;
`;

function AllQuestionsPage() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/questions?_sort=id&_order=desc`)
      .then((res) => {
        setQuestions(res.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <PageContainer>
      <ContentContainer>
        <LeftSidebar />
        <MainContainer>
          <h1>All Questions</h1>
          <Link to="/questions/ask">
            <Button>Ask Question</Button>
          </Link>
          <div>
            <span>{questions.length} questions</span>
          </div>
          <div id="questions">
            {!isLoading &&
              questions.map((question) => (
                <div key={question.id}>
                  <Link to={`/questions/${question.id}`}>
                    <div>{question.title}</div>
                  </Link>
                  <div>{question.author}</div>
                </div>
              ))}
          </div>
          <div>right sidebar</div>
        </MainContainer>
        {/* <RightSidebar /> */}
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}

export default AllQuestionsPage;
