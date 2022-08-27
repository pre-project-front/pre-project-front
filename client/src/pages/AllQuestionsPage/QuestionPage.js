import axios from "axios";
import Footer from "components/Footer";
import LeftSidebar from "components/LeftSidebar";
import RightSidebar from "components/RightSidebar";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Button, ContentContainer, PageContainer } from "styles/common";

const MainContainer = styled.div`
  border-left: 1px solid hsl(210, 8%, 85%);
  padding: 24px 16px;
`;

const TitleANdButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const InnerContent = styled.div`
  display: flex;
  padding-top: 15px;
  height: 100vh;
`;

const QuestionContent = styled.div`
  flex-grow: 1;
  padding: 0 15px 15px 0;
`;

function QuestionPage() {
  const [question, setQuestion] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  let { id } = useParams();
  const navigate = useNavigate();

  const handleDeleteQeustion = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      return axios
        .delete(`${process.env.REACT_APP_URL}/questions/${id}`)
        .then(() => navigate("/"));
    }
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/questions/${id}`).then((res) => {
      setQuestion(res.data);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <PageContainer>
      <ContentContainer>
        <LeftSidebar />
        {!isLoading && (
          <MainContainer>
            <TitleANdButton>
              <div>{question.title}</div>
              <Link to="/questions/ask">
                <Button>Ask Question</Button>
              </Link>
            </TitleANdButton>
            <InnerContent>
              <QuestionContent>
                <div>{question.content}</div>
                <div>{question.author}</div>
                <Button onClick={() => handleDeleteQeustion(id)}>Delete</Button>
              </QuestionContent>
              <RightSidebar />
            </InnerContent>
          </MainContainer>
        )}
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}

export default QuestionPage;
