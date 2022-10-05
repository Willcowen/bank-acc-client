import React from "react";
import "./Login.css";

function Login() {
  return (
    <form className="login">
      <h1>Transaction App</h1>
      <div className="login--email">
        <label for="email">Email</label>
        <input type="text" id="login--email--input" name="email" />
      </div>
      <div className="login--password">
        <label for="lname">Password</label>
        <input type="password" id="login--password--input" name="password" />
      </div>
      <button type="submit" id="login--button">
        Login
      </button>
      <p>Need an account? Sign up here</p>
    </form>
  );
}

export default Login;
