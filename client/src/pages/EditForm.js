import axios from "axios";
import Footer from "components/Footer";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, ContentContainer, PageContainer } from "styles/common";

// 1. id로 기존 글 정보 가져와서(get 요청) state에 저장
// 2. setState 함수로 수정
// 3. 수정하기 버튼 누르고 나면 put OR patch 메서드로 요청 보내기
// 4. 수정된 글 페이지로 돌아가기

function EditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [questionToEdit, setQuestionToEdit] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { title, content, author } = questionToEdit;

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/questions/${id}`).then((res) => {
      setQuestionToEdit(res.data);
      setIsLoading(false);
    });
  }, []);

  const HandleSubmitquestionToEdit = (e) => {
    e.preventDefault();

    if (title.length === 0 || content.length === 0) return;

    axios
      .put(`${process.env.REACT_APP_URL}/questions/${id}`, {
        title,
        content,
        author,
      })
      .then((res) => {
        navigate(`/questions/${res.data.id}`);
      });
  };

  const handleChangeTitle = (e) => {
    setQuestionToEdit({ ...questionToEdit, title: e.target.value });
  };

  const handleChangeContent = (e) => {
    setQuestionToEdit({ ...questionToEdit, content: e.target.value });
  };

  return (
    <PageContainer>
      <ContentContainer>
        {!isLoading && (
          <>
            <div>Ask a public question</div>
            <div>
              <form onSubmit={HandleSubmitquestionToEdit}>
                <div>
                  <div>Title</div>
                  <p>
                    Be specific and imagine you’re asking a question to another
                    person
                  </p>
                  <input
                    type="text"
                    value={title}
                    onChange={handleChangeTitle}
                    placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                    autoFocus
                    required
                  />
                </div>
                <div>
                  <div>Body</div>
                  <p>
                    Include all the information someone would need to answer
                    your question
                  </p>
                  <textarea
                    type="text"
                    value={content}
                    onChange={handleChangeContent}
                    required
                  />
                </div>
                <Button>Review your question</Button>
              </form>
            </div>
          </>
        )}
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}

export default EditForm;
