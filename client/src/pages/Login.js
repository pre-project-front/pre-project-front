import React, { useState } from "react";
import axios from "axios";

function Login({ setIsLogin, setUserInfo }) {
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
      setErrorMessage("Text box cannot be empty.");
      return;
    } else {
      setErrorMessage("");
    }
    return axios
      .post("https://localhost:3001/login", { loginInfo, checkedKeepLogin })
      .then((res) => {
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
    <div className="container">
      <div className="left-box"></div>
      <div className="right-box">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-field">
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
              {"Keep Login"}
            </label>
          </div>
          <button type="submit" onClick={loginRequestHandler}>
            Log in
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
export default Login;
