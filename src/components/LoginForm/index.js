import PropTypes from 'prop-types';

import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Field from '../Field';

import '../Login/styles.scss';

/**
 * Display a form to log in, with inputs email and password.
 * It has two modes: "connected" and "not connected"
 *   - "connected": displays a message and a button to disconnect
 *   - "not connected": displays the form and a button to connect
 */
function LoginForm({
  changeField,
  handleLogin,
}) {
  const emailValue = useSelector((state) => state.auth.emailAuth);
  const passwordValue = useSelector((state) => state.auth.passwordAuth);

  const errors = useSelector((state) => state.user.errors);
  const [isAlertVisible, setIsAlertVisible] = React.useState(false);
  const message = <div className="login-form-right-title-error">Mot de passe ou email incorrect</div>;

  const handleVisibility = () => {
    setIsAlertVisible(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!handleLogin()) {
      setIsAlertVisible(true);
    }
  };

  return (
    <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit} onBlur={handleVisibility}>
      <div className="login-form-right">
        <h2 className="login-form-right-title">CONNEXION</h2>
        {isAlertVisible && message}
        <p className="login-form-right-message">Veuillez vous connecter pour jouer.</p>
        <div className="login-form-right-container">
          <Field
            name="email"
            placeholder="Email"
            onChange={changeField}
            value={emailValue}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            value={passwordValue}
            onChange={changeField}
          />

          <div className="login-form-button">
            <button
              type="submit"
              className="login-form-button--button"
              to="/histoires"
            >
              SE CONNECTER
            </button>
            <Link>
              Mot de passe oublié ?
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
};

// == Export
export default LoginForm;
