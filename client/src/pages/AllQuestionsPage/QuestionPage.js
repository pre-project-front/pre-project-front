import axios from "axios";
import LeftSidebar from "components/LeftSidebar";
import RightSidebar from "components/RightSidebar";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
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
      <div>
        <div>QuestionPage</div>
        {!isLoading && (
          <div>
            <div>{question.title}</div>
            <div>{question.author}</div>
            <div>{question.content}</div>
          </div>
        )}
        <button onClick={() => handleDeleteQeustion(id)}>Delete</button>
      </div>
      <RightSidebar />
    </Container>
  );
}

export default QuestionPage;
