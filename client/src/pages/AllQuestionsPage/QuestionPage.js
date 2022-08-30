import axios from "axios";
import Footer from "components/Footer";
import LeftSidebar from "components/LeftSidebar";
import RightSidebar from "components/RightSidebar";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Button, ContentContainer, PageContainer } from "styles/common";
import { edit } from "slice/questionSlice";
import Comments from "./Comments";

function QuestionPage() {
  const [question, setQuestion] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { qid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteQeustion = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      return axios
        .delete(`${process.env.REACT_APP_URL}/questions/${qid}`)
        .then(() => navigate("/"));
    }
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/questions/${qid}`).then((res) => {
      setQuestion(res.data);
      setIsLoading(false);
    });
  }, [qid]);

  return (
    <PageContainer>
      <ContentContainer>
        <LeftSidebar />
        {!isLoading && (
          <MainContainer>
            <TitleANdButton>
              <h1>{question.title}</h1>
              <div>
                <Link to="/questions/ask">
                  <Button height="40px">Ask Question</Button>
                </Link>
              </div>
            </TitleANdButton>
            <InnerContent>
              <QuestionContent>
                <div>
                  <div>{question.content}</div>
                  <div>{question.author}</div>
                  <Link to={`/posts/${question.id}/edit`}>
                    <button onClick={() => dispatch(edit(question))}>
                      Edit
                    </button>
                  </Link>
                  <button onClick={() => handleDeleteQeustion(qid)}>
                    Delete
                  </button>
                </div>
                <Comments />
              </QuestionContent>
              <RightSidebar />
            </InnerContent>
          </MainContainer>
        )}
      </ContentContainer>
      {!isLoading && <Footer />}
    </PageContainer>
  );
}

export default QuestionPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  border-left: 1px solid hsl(210, 8%, 85%);
  padding: 24px;
`;

const TitleANdButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  > h1 {
    word-wrap: break-word;
  }

  > div {
    margin-left: 12px;
  }
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
