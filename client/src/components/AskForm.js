import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ContentContainer, PageContainer } from "styles/common";
import Footer from "./Footer";

function AskForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const author = "jeong";

  const navigate = useNavigate();

  const HandleSubmitQuestion = (e) => {
    e.preventDefault();
    if (title.length === 0 || content.length === 0) return;

    axios
      .post(`${process.env.REACT_APP_URL}/questions`, {
        title,
        content,
        author,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      });
  };

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
          <form onSubmit={HandleSubmitQuestion}>
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
