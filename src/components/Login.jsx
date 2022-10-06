import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom';

function Login() {

  let navigate = useNavigate();

  const initialFormData = {
    email: "",
    password: ""
  }

  const [user, setUser] = useState(initialFormData);

  const handleChange = (e) => {
    e.preventDefault()
    const {name, value} = e.target
    setUser(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

  }


  return (
    <form className="login">
      <h1>Transaction App</h1>
      <div className="login--email">
        <label for="email">Email</label>
        <input type="text" id="login--email--input" name="email" value={user.email} onChange={handleChange} />
      </div>
      <div className="login--password">
        <label for="lname">Password</label>
        <input type="password" id="login--password--input" name="password" value={user.password} onChange={handleChange} />
      </div>
      <button type="submit" id="login--button">
        Login
      </button>
      <p>Need an account? Sign up <span onClick={() => navigate('/register')}>here</span></p>
    </form>
  );
}

export default Login;
