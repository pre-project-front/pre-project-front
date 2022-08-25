import LeftSidebar from "components/LeftSidebar";
import RightSidebar from "components/RightSidebar";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
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
    <Container>
      <LeftSidebar />
      <div>
        <div>
          <h1>All Questions</h1>
          <Link to="/questions/ask">
            <button>Ask Question</button>
          </Link>
        </div>
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
      </div>
      <RightSidebar />
    </Container>
  );
}

export default AllQuestionsPage;
