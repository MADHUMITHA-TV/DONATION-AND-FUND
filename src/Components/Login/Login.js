import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />Remember me</label><br/>
          <a href="#">Forgot Password?</a><br/>
        </div>
        <button type="submit">Login</button><br/>
        <div className="register-link">
          <p> Or <br/>
            <a href="#">Signup</a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;
