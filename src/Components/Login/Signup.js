
import React from "react";
import './Signup.css';
const Signup=()=>{
    return (
      <div className="wrapper">
        <form action="">
          <h1>Sign Up</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
          </div>
          <br/>
          <div className="input-box">
            <input type="text" placeholder="Email" required />
          </div>
          <br/>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
          </div>
        <br/>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
}
export default Signup;
