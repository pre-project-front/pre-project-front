import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem;
  height: 100vh;
  background-image: #f1f2f3;
`;

const CenterBox = styled.div`
  display: inline-block;
  margin: 0 auto;
  width: 19rem;
  height: 27rem;
  align-content: center;
  text-align: left;
`;

const GoogleButton = styled.div`
  text-align: center;
  color: black;
  border: 1px solid silver;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1rem;
  background-color: #ffffff;
  margin: 10px 0px;
  height: 2rem;
  width: 15rem;
  &:hover {
    background-color: #f1f2f3;
  }
`;

const GithubButton = styled.div`
  text-align: center;
  color: white;
  border: 1px solid silver;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1rem;
  background-color: #2f3337;
  margin: 10px 0px;
  height: 2rem;
  width: 15rem;

  &:hover {
    background-color: #232629;
  }
`;

const FacebookButton = styled.div`
  text-align: center;
  color: white;
  border: 1px solid silver;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1rem;
  background-color: #385499;
  margin: 10px 0px;
  height: 2rem;
  width: 15rem;
  &:hover {
    background-color: #004585;
  }
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  //margin: auto;
  margin-top: 30px;
  width: 15rem;
  font-weight: bold;
`;

const SignupButton = styled.button`
  border: 1px solid transparent;
  color: white;
  width: 12rem;
  height: 30px;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  margin-top: 1rem;
  margin-bottom: 0.2rem;
  font-size: 0.5rem;
  background-color: #0a95ff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  &:hover {
    background-color: #0074cc;
  }
`;

const RecaptchaContainer = styled.button`
  font-size: 2rem;
  margin: 6px;
  border: 2px;
  border-color: black;
`;

function Signup({ setIsSignup, setUserInfo }) {
  const [signupInfo, setSignupInfo] = useState({
    userName: "",
    userEmail: "",
    password: "",
  });
  const [checkedOpt, setCheckedOpt] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputValue = (key) => (e) => {
    setSignupInfo({ ...setSignupInfo, [key]: e.target.value });
  };
  const loginRequestHandler = () => {
    // 로그인에 필요한 유저정보가 충분히 제공되지 않았을 때 에러메시지 나오기
    if (!signupInfo.userName || !signupInfo.userEmail || !signupInfo.password) {
      setErrorMessage("빈칸을 입력하세요");
      return;
    } else {
      setErrorMessage("");
    }
    return axios
      .post("https://localhost:4000/login", { signupInfo, setCheckedOpt })
      .then((res) => {
        // 로그인에 성공했다면 응답으로 받은 데이터가 uesrpage에 렌더링되도록 State 변경됨.
        console.log(res.data);
        setUserInfo(res.data);
        setIsSignup(true);
      })
      .catch((err) => {
        console.log(err.response.data);
        setErrorMessage("회원가입에 실패했습니다.");
      });
  };

  return (
    <Main>
      <CenterBox>
        <span>
          <h1>Join the Stack Overflow community</h1>
          <p>Get unstuck — ask a question</p>
          <p>Unlock new privileges like voting and commenting</p>
          <p>Save your favorite tags, filters, and jobs</p>
          <p>Earn reputation and badges</p>
          <p>
            Collaborate and share knowledge with a private group for FREE. Get
            Stack Overflow for Teams free for up to 50 users.
          </p>
        </span>
      </CenterBox>
      <CenterBox>
        <GoogleButton>Sign up with Google</GoogleButton>
        <GithubButton>Sign up with Github</GithubButton>
        <FacebookButton>Sign up with Facebook</FacebookButton>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputField>
            <span>Display name</span>
            <input
              type="text"
              data-testid="id-input"
              onChange={handleInputValue("userId")}
            />
            <span>Email</span>
            <input
              type="text"
              data-testid="id-input"
              onChange={handleInputValue("userId")}
            />
            <span>Password</span>
            <input
              type="password"
              data-testid="password-input"
              onChange={handleInputValue("password")}
            />

            <p>
              Passwords must contain at least eight characters, including at
              least 1 letter and 1 number.
            </p>
            <RecaptchaContainer>reCAPTCHA Box</RecaptchaContainer>
            <input
              type="checkbox"
              onChange={() => setCheckedOpt(!checkedOpt)}
            />
            {
              " Opt-in to receive occasional product updates, user research invitations, company announcements, and digests."
            }

            <SignupButton type="submit" onClick={loginRequestHandler}>
              Sign up
            </SignupButton>
            {errorMessage ? (
              <div id="alert-message" data-testid="alert-message">
                {errorMessage}
              </div>
            ) : (
              ""
            )}
            <p>
              By clicking “Sign up”, you agree to our terms of service, privacy
              policy and cookie policy
            </p>
          </InputField>
          <p>Already have an account? Log in</p>
          <p>Are you an employer? Sign up on Talent </p>
        </form>
      </CenterBox>
    </Main>
  );
}

export default Signup;
