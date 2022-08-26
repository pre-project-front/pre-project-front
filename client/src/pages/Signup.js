import React, { useState } from "react";
import axios from "axios";

function Signup({ setIsLogin, setUserInfo }) {
  const [loginInfo, setLoginInfo] = useState({
    userId: "",
    password: "",
  });
  const [checkedKeepLogin, setCheckedKeepLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const loginRequestHandler = () => {
    if (!loginInfo.userId || !loginInfo.password) {
      setErrorMessage("Text box cannot be empty. ");
      return;
    } else {
      setErrorMessage("");
    }
    return axios
      .post("https://localhost:4000/login", { loginInfo, checkedKeepLogin })
      .then((res) => {
        console.log(res.data);
        setUserInfo(res.data);
        setIsLogin(true);
      })
      .catch((err) => {
        console.log(err.response.data);
        setErrorMessage("로그인에 실패했습니다.");
      });
  };

  return (
    <div className="container">
      <div className="left-box">
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
      </div>
      <div className="right-box">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-field">
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
            <label className="checkbox-container">
              <input
                type="checkbox"
                onChange={() => setCheckedKeepLogin(!checkedKeepLogin)}
              />
              {
                " Opt-in to receive occasional product updates, user research invitations, company announcements, and digests."
              }
            </label>
          </div>
          <button type="submit" onClick={loginRequestHandler}>
            Sign up
          </button>
          {errorMessage ? (
            <div id="alert-message" data-testid="alert-message">
              {errorMessage}
            </div>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
}
export default Signup;
