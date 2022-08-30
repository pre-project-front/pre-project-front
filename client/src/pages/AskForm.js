import axios from "axios";
import Footer from "components/Footer";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ContentContainer, PageContainer } from "styles/common";

function AskForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const author = "jeong";

  const navigate = useNavigate();

  const HandleSubmitAskQuestion = (e) => {
    e.preventDefault();
    if (title.length === 0 || content.length === 0) return;

    axios
      .post(`${process.env.REACT_APP_URL}/questions`, {
        title,
        content,
        author,
      })
      .then((res) => {
        navigate(`/questions/${res.data.id}`);
      });
  };

  // 서버 통신 테스트 // git test
  useEffect(() => {
    axios.get("/helloworld").then((res) => console.log(res));
  }, []);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <PageContainer>
      <ContentContainer>
        <div>Ask a public question</div>
        <div>
          <form onSubmit={HandleSubmitAskQuestion}>
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
                Include all the information someone would need to answer your
                question
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
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}

export default AskForm;
