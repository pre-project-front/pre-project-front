import LeftSidebar from "components/LeftSidebar";
import RightSidebar from "components/RightSidebar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, ContentContainer, PageContainer } from "styles/common";
import Footer from "components/Footer";
import styled from "styled-components";
import Sorts from "components/Sorts";
import Pagination from "react-js-pagination";

function AllQuestionsPage() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 전체 데이터 수는 서버에서 받아야 됨 (json-server에서는 주지 않아서 하드코딩된 상태)
  const [activePage, setActivePage] = useState(1);
  const handleChangePage = (activePage) => {
    setActivePage(activePage);
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL}/questions?_sort=id&_order=desc&_page=${activePage}&_limit=5`
      )
      .then((res) => {
        setQuestions(res.data);
        setIsLoading(false);
      });
  }, [activePage]);

  return (
    <PageContainer>
      <ContentContainer>
        <LeftSidebar />
        {!isLoading && (
          <MainContainer>
            <QuestionsContainer>
              <div id="all_questions">
                <div className="d_flex">
                  <h1>All Questions</h1>
                  <Link to="/questions/ask">
                    <Button height="40px">Ask Question</Button>
                  </Link>
                </div>
                <div className="nums_and_sorts">
                  <div className="nums">{questions.length} questions</div>
                  <Sorts />
                </div>
                <ul id="questions">
                  {!isLoading &&
                    questions.map((question) => (
                      <Question key={question.id}>
                        <div className="question_stat">
                          <div>vote</div>
                          <div>answer</div>
                          <div>views</div>
                        </div>
                        <div className="question_content">
                          <Link to={`/questions/${question.id}`}>
                            <div>{question.title}</div>
                          </Link>
                          <div>{question.content}</div>
                          <div>{question.author}</div>
                        </div>
                      </Question>
                    ))}
                </ul>
              </div>
              <Pagination
                acticePage={activePage}
                itemsCountPerPage={5}
                totalItemsCount={8}
                pageRangeDisplayed={5}
                prevPageText={"<"}
                nextPageText={">"}
                onChange={handleChangePage}
              />
            </QuestionsContainer>
            <RightSidebar />
          </MainContainer>
        )}
      </ContentContainer>
      {!isLoading && <Footer />}
    </PageContainer>
  );
}

export default AllQuestionsPage;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  border-left: 1px solid hsl(210, 8%, 85%);
  padding: 24px;
`;

const QuestionsContainer = styled.div`
  flex-grow: 1;

  > #all_questions {
    display: flex;
    flex-direction: column;
  }

  .d_flex {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  .nums_and_sorts {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;

    > .nums {
      margin-right: 12px;
      flex-grow: 1;
      white-space: nowrap;
    }
  }
`;

const Question = styled.li`
  display: flex;
  border-top: 1px solid hsl(210, 8%, 85%);
  margin-left: -24px;
  padding: 24px;

  > .question_stat {
    margin: 0 16px 4px 0;
    font-size: 0.8rem;
    text-align: right;
  }

  > .question_content {
    display: flex;
    flex-direction: column;
  }
`;
