import React, { useState, useEffect } from "react";
import "./signinform.css";


const Signinform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.getElementById("email").focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter all required fields");
      return;
    }

    // TODO: Submit form
  };

  return (
    <div className="form">
      <h2>Se connecter</h2>
      <h3>
        Cree votre compte en tant que entreprise miniere ou un offre des service
        ou entreprise miniere
      </h3>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email d’accès"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Renseigner un mot de passe"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
      <p className="forgotpwd">Mot de passe oublié ?</p>
    </div>
  );
};

export default Signinform;
