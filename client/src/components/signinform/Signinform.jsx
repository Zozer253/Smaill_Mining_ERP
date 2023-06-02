import React from 'react'
import "./signinform.css"
const Signinform = () => {
  return (
    <div className='form'>
        <h2>Se connecter</h2>
        <h3>
            Creer votre compte en tant que entreprise miniere ou un offre 
            des service ou entreprise miniere
        </h3>
        <form action="">
            <div className="form-group">
                <label for="email">Email </label>
                <input type="email" id="email" name="email" placeholder="Email d’accès " required />
            </div>
            <div className="form-group">
                <label for="password">Password </label>
                <input type="password" id="password" name="password" placeholder='Renseigner un mot de passe ' required />
            </div>
            <button type="submit"> Se connecter </button>
        </form>
        <p className='forgotpwd'>Mot de passe oublié ?</p>
    </div>
  )
}

export default Signinform