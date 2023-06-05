import React from "react";
import { Signinform } from "../../components";
import "./login.css";
import logo from "../../assets/SmallERP.svg";
import illustration from "../../assets/login_illustration.gif";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="page">
      <div className="page-left">
        <div className="loginhead">
          <img src={logo} alt="logo" />
          <h3>
            Vous n’avez pas encore un compte?{" "}
            <span>
              <Link to="/signup">Créer un compte</Link>
            </span>
          </h3>
        </div>
        <Signinform />
      </div>
      <div className="page-right">
        <img src={illustration} alt="illustration" className="rotate" />
      </div>
    </div>
  );
};

export default Login;
