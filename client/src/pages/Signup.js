import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    userName: "",
    userEmail: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputValue = (key) => (e) => {
    setSignupInfo({ ...signupInfo, [key]: e.target.value });
  };

  return <div>Signup</div>;
}

export default Signup;
