import axios from "axios";
import LeftSidebar from "components/LeftSidebar";
import RightSidebar from "components/RightSidebar";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  max-width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 100%;
  padding: 15px 15px 0 15px;
  height: 100vh;
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
    <Container>
      <LeftSidebar />
      {!isLoading && (
        <Content>
          <TitleANdButton>
            <div>{question.title}</div>
            <Link to="/questions/ask">
              <button>Ask Question</button>
            </Link>
          </TitleANdButton>
          <InnerContent>
            <QuestionContent>
              <div>{question.content}</div>
              <div>{question.author}</div>
              <button onClick={() => handleDeleteQeustion(id)}>Delete</button>
            </QuestionContent>
            <RightSidebar />
          </InnerContent>
        </Content>
      )}
    </Container>
  );
}

export default QuestionPage;
