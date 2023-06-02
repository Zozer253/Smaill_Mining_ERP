import React from "react";
import { Signinform } from "../../components";
import "./login.css";
import logo from "../../assets/SmallERP.svg";

const Login = () => {
  return (
    <div className="page">
      <div className="page-left">
        <div className="loginhead">
          <img src={logo} alt="logo" />
          <h3>
            Vous n’avez pas encore un compte? <span> Créer un compte</span>
          </h3>
        </div>
        <Signinform />
      </div>
      <div className="page-rigth"></div>
    </div>
  );
};

export default Login;
