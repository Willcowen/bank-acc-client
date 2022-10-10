import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import client from '../utils/client'
import storage from '../utils/storage'

function Register() {

  let navigate = useNavigate();

  const initialFormData = {
    username: "",
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
    client.post('/user', user)
    .then(res => console.log(res))
  }


  return (
    <form className="register" onSubmit={handleSubmit}>
      <h1>Transaction App - Registration</h1>
      <div className="register--username">
        <label for="username">Username</label>
        <input type="text" id="register--username--input" name="username" value={user.username} onChange={handleChange} />
      </div>
      <div className="register--email">
        <label for="email">Email</label>
        <input type="email" id="register--email--input" name="email" value={user.email} onChange={handleChange} />
      </div>
      <div className="register--password">
        <label for="lname">Password</label>
        <input type="password" id="register--password--input" name="password" value={user.password} onChange={handleChange} />
      </div>
      <button type="submit" id="register--button">
        Login
      </button>
      <p>Need an account? Sign up <span onClick={() => navigate('/')}>here</span></p>
    </form>
  );
}

export default Register;