import axios from "axios";
import Footer from "components/Footer";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ContentContainer, PageContainer } from "styles/common";

function AskForm() {
  const [askQuestion, setAskQuestion] = useState({
    author: "jeong",
    title: "",
    content: "",
  });
  const { author, title, content } = askQuestion;
  const navigate = useNavigate();

  // 서버 통신 테스트 // git test
  useEffect(() => {
    axios.get("/helloworld").then((res) => console.log(res));
  }, []);

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

  const handleChangeAskQuestion = (e) => {
    const { name, value } = e.target;
    setAskQuestion({ ...askQuestion, [name]: value });
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
                name="title"
                type="text"
                value={title}
                onChange={handleChangeAskQuestion}
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
                name="content"
                type="text"
                value={content}
                onChange={handleChangeAskQuestion}
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
