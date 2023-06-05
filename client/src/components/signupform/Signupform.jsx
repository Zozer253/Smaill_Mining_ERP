import React, { useState, useEffect } from "react";
import './signupform.css'


const Signupform = () => {
  const [name, setName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");


  useEffect(() => {
    document.getElementById("email").focus();
  }, []);

  useEffect(() => {
    document.getElementById("name").focus();
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
          <label htmlFor="name">Name</label>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="Nom de votre entreprise"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
            <label htmlFor="companyname">Qui êtes-vous ?</label>
            <input 
              type="text"
              id="companyname"
              placeholder="Entreprise minière"
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)} 
            />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
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
          <label htmlFor="password">Password</label>
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
        <div className="form-group">
          <label htmlFor="password">Confrimer le mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Renseigner un mot de passe"
            required
            value={confirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
          />
        </div>
        <button type="submit">S'enregistrer</button>
      </form>
    </div>
  )
}

export default Signupform