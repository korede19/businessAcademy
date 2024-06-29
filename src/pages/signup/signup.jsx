import React from "react";
import "./signup.css";
import Logo from "../../assets/Logo.png";
import Mail from "../../svg/mail";
import Password from "../../svg/passswsord";
import Google from "../../svg/google";
import Facebook from "../../svg/facebook";
import Twitter from "../../svg/twitter";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="pageContain">
        <div className="column1">
          <div className="logoImage">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <div className="column2">
          <div className="columnform">
            <div className="textContain">
              <h1>Sign Up</h1>
              <p>Create your Avuna account quick and easy:</p>
            </div>
            <div className="form2Container">
              <div className="allForms">
                <div className="firstForm">
                  <div className="SignupContainer">
                    <label for="email"> First Name</label>
                    <div className="signupInput">
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                  </div>
                  <div className="SignupContainer">
                    <label for="email">Last Name</label>
                    <div className="signupInput">
                      <input
                        type="text"
                        id="Lastname"
                        name="lastname"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="nextform">
                  <div className="inputContainer">
                    <label for="email">Email Address</label>
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
                </div>
                <div className="nextform">
                  <div className="inputContainer">
                    <label for="email">Password</label>
                    <div className="inputContain">
                      <Password />
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="signupButton">
                <div className="button_one">
                  <p>Submit</p>
                </div>
                <div className="signText">
                  <p>
                    Already have an account? ?{" "}
                    <Link to="/login">
                      <span> Sign In</span>
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

export default Signup;
