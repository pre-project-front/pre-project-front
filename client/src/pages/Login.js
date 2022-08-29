import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: #f1f2f3;
`;

const CenterBox = styled.div`
  display: inline-block;
  margin: 0 auto;
  width: 19rem;
  height: 27rem;
  align-content: center;
  text-align: center;
`;
const GoogleButton = styled.div`
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

const LoginContainer = styled.div`
  height: 15rem;
  width: 15rem;
  text-align: left;
  padding: 5px;
  border-radius: 8px;
  box-shadow: rgba(0.3, 0.5, 0.3, 0.5) 0.1px 0.1px 30px 0.5px;
  background-color: white;
`;

const LoginButton = styled.button`
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

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: auto;
  margin-top: 30px;
  width: 12rem;
  font-weight: bold;
`;

const ForgotPasswordButton = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  color: #0074cc;
  font-size: 1px;
  font-weight: lighter;
  letter-spacing: -1px;
  &:hover {
    color: #0a95ff;
  }
`;

function Login({ setIsLogin, setUserInfo }) {
  const [loginInfo, setLoginInfo] = useState({
    userId: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handlerloginRequest = () => {
    if (!loginInfo.userId || !loginInfo.password) {
      setErrorMessage("Email cannot be empty.");
      return;
    } else {
      setErrorMessage("");
    }
    return axios
      .post("https://localhost:3001/login", { loginInfo })
      .then((res) => {
        // 로그인에 성공했다면 응답으로 받은 데이터가 Mypage에 렌더링되도록 State를 변경하세요.
        console.log(res.data);
        setUserInfo(res.data);
        setIsLogin(true);
      })
      .catch((err) => {
        console.log(err.response.data);
        setErrorMessage("Login failed");
      });
  };

  return (
    <Main>
      <CenterBox>
        <GoogleButton>Log in with Google</GoogleButton>
        <GithubButton>Log in with Github</GithubButton>
        <FacebookButton>Log in with Facebook</FacebookButton>
        <LoginContainer>
          <form onSubmit={(e) => e.preventDefault()}>
            <InputField>
              <span>Email</span>
              <input
                type="text"
                data-testid="id-input"
                onChange={handleInputValue("userId")}
              />
              <span>Password</span>
              <ForgotPasswordButton>Forgot password?</ForgotPasswordButton>
              <input
                type="password"
                data-testid="password-input"
                onChange={handleInputValue("password")}
              />

              <LoginButton onClick={handlerloginRequest}>Log in</LoginButton>
            </InputField>
            {errorMessage ? (
              <div id="alert-message" data-testid="alert-message">
                {errorMessage}
              </div>
            ) : (
              ""
            )}
          </form>
        </LoginContainer>
      </CenterBox>
    </Main>
  );
}
export default Login;
