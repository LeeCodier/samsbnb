import React from "react";
import "../styles/Login.css";

export const Login = () => {
  return (
          <div className="containerlogin">

            <div className="loginbox">

            <div className="login">
              Login
             </div>
             
             <form action="post">
   
              <div className="form">
              <label for="lemail">Email</label>
              <input type="email" placeholder="examplegmail.com" name="lemail"/>
              </div>

              <div className="form">
              <label for="lpass">Password</label>
              <input type="password" placeholder="Password" name="lpass"/>
              </div>

            <div className="lbtn">
           <button className="lgbtn" type="submit">Login</button>
           <label className="lsu">Not a member? Signup now</label>
           </div>

             </form>

            </div>

          </div>

  );
};
