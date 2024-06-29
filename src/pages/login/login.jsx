import React from "react";
import Logo from "../../assets/Logo.png";
import Mail from "../../svg/mail";
import Password from "../../svg/passswsord";
import Trailing from "../../svg/trailing";
import Google from "../../svg/google";
import Facebook from "../../svg/facebook";
import Twitter from "../../svg/twitter";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="pageContain">
        <div className="firstRow">
          <div className="logoImage">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <div className="secondRow">
          <div className="columnform">
            <div className="signInText">
              <h1>Sign In</h1>
              <p>Welcome Back</p>
            </div>
            <div className="formContainer">
              <div className="containForm">
                <div className="inputContainer">
                  <label for="email">Email Address *</label>
                  <div className="inputContain">
                    <Mail />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>
                <div className="inputContainer">
                  <label for="email">Password *</label>
                  <div className="inputContain">
                    <Password />
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Create a new password"
                      required
                    />
                    <Trailing />
                  </div>
                </div>
              </div>
              <div className="forgetPassword">
                <p>Forgot Password?</p>
              </div>
              <div className="signupButton">
                <div className="button_one">
                  <p>Submit</p>
                </div>
                <div className="signText">
                  <p>
                    Don’t have an account?{" "}
                    <Link to="/signup">
                      <span> Sign Up</span>{" "}
                    </Link>
                  </p>
                </div>
              </div>
              <div className="otherContainer">
                <div className="otherText">
                  <p>Or Login With</p>
                </div>
                <div className="otherMedia">
                  <Google />
                  <Facebook />
                  <Twitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
