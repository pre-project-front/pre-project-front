import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import ToastUi from "styles/ToastUi";

function Comments() {
  const handlesubmit = useRef();
  const [comment, setComment] = useState(""); // 입력한 댓글 내용
  const [commentList, setCommentList] = useState([]); // 댓글 리스트

  // 1. comment -> input value / setComment -> onChange에 들어갈 state변경함수
  // 2. handleSubmit 함수 안에 e.preventDefault() 쓰고 comment를 배열안에 저장

  const handleSubmitButton = (e) => {
    e.preventDefault();
    let newComment = handlesubmit.current.getInstance().getMarkdown();
    setCommentList((prev) => [...prev, newComment]);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const onReset = (e) => {
    setComment("");
  };

  // 코멘트 가져오기
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/comments/`)
      .then((res) => {
        console.log(res);
      })
      .catch(() => {
        console.log("실패");
      });
  }, [commentList]);

  return (
    <EditorBox>
      <div className="EditorBoxText">Answer</div>
      <div className="CommentBox">
        {commentList.map((comment, index) => {
          return <div key={index}>{comment}</div>;
        })}
      </div>

      <hr />
      <div>
        <div className="EditorBoxText"> Your Answer </div>
      </div>

      <form onSubmit={handleSubmitButton}>
        <ToastUi ref={handlesubmit} required />

        <br />
        <CommentSubmitButton type="submit" onClick={onReset}>
          Post Your Answer
        </CommentSubmitButton>
      </form>
    </EditorBox>
  );
}

// const EditorBoxText = styled.div`
//   font-size: 19px;
//   color: #232629;
// `;

const EditorBox = styled.div`
  /* display: flex;
  flex-direction: column;
  height: 30rem;

  background-color: red;
  border: 1px solid #babfc4;
  border-radius: 3px;
  color: #232629;
  font-family: inherit;
  font-size: 10px;

  margin: 0;
  padding: 0.6em 0.7em;
  width: 80%; */

  .EditorBoxText {
    font-size: 19px;
    font-weight: 400;
    color: #232629;
    margin: 0px 0px 16px;
    padding: 20px 0px 0px;
  }

  .CommentBox {
    font-size: 15px;
    margin: 0px 0px 16px;
  }
`;

const CommentBox = styled.div`
  display: flex;
  border: 1px solid red;
  width: 800px;
  height: 300px;
`;

const CommentForm = styled.div`
  display: flex;

  //id
  > #textArea {
    display: flex;
    width: 50rem;

    flex-direction: column;
    text-align: left;
    margin: auto;
    margin-top: 10px;
    width: 12rem;
    font-weight: bold;
  }
`;

const CommentSubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 2px;
  font-size: 13px;
  border: 1px solid transparent;
  color: white;
  width: 7rem;
  height: 2rem;
  border-radius: 3px;
  cursor: pointer;

  margin-top: 2rem;
  margin-bottom: 0.2rem;
  font-size: 0.5rem;
  background-color: #0a95ff;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);

  &:hover {
    background-color: #0074cc;
  }
`;

export default Comments;
