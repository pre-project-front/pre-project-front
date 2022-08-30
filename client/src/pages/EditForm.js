import axios from "axios";
import Footer from "components/Footer";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, ContentContainer, PageContainer } from "styles/common";

function EditForm() {
  const navigate = useNavigate();
  const questionToEdit = useSelector((state) => state.questionToEdit.value);
  const [editQuestion, setEditQuestion] = useState(questionToEdit);
  const { id, title, content, author } = editQuestion;
  const { qid } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  // 수정 중 사용자가 새로고침 할 때 기존 작성글 날아가는 것 방지 (수정하던 내용은 X)
  useEffect(() => {
    if (id === null) {
      axios.get(`${process.env.REACT_APP_URL}/questions/${qid}`).then((res) => {
        setEditQuestion(res.data);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [id, qid]);

  const HandleSubmitQuestionToEdit = (e) => {
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

  const HandleChangeQuestionToEdit = (e) => {
    const { name, value } = e.target;
    setEditQuestion({ ...editQuestion, [name]: value });
  };

  return (
    <PageContainer>
      <ContentContainer>
        <div>Ask a public question</div>
        <div>
          {!isLoading && (
            <form onSubmit={HandleSubmitQuestionToEdit}>
              <div>
                <div>Title</div>
                <p>
                  Be specific and imagine you’re asking a question to another
                  person
                </p>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={HandleChangeQuestionToEdit}
                  placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                  autoFocus
                  required
                />
              </div>
              <div>
                <div>Body</div>
                <p>
                  Include all the information someone would need to answer your
                  question
                </p>
                <textarea
                  type="text"
                  name="content"
                  value={content}
                  onChange={HandleChangeQuestionToEdit}
                  required
                />
              </div>
              <Button>Review your question</Button>
            </form>
          )}
        </div>
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}

export default EditForm;
