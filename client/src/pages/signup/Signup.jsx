import React from "react";
import { Signupform } from "../../components";
import "./signup.css";
import logo from "../../assets/SmallERP.svg";
import illustration from "../../assets/login_illustration.gif";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="page">
      <div className="page-left">
        <div className="loginhead">
          <img src={logo} alt="logo" />
          <h3>
            Avez-vous déjà un compte ?{" "}
            <span>
              <Link to="/signin">Se connecter</Link>{" "}
            </span>
          </h3>
        </div>
        <Signupform />
      </div>
      <div className="page-right">
        <img src={illustration} alt="illustration" className="rotate" />
      </div>
    </div>
  );
};

export default Signup;
