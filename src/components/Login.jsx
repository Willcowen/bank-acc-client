import React from "react";

function Login() {
  return (
    <form className="login">
      <label for="email">Email</label>
      <input type="text" id="formfname" name="fname" value="John" />
      <label for="lname">Password</label>
      <input type="text" id="lname" name="lname" value="Doe" />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Login;
