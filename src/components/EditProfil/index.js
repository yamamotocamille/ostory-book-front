/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { userEdit } from '../../actions/user';
import FieldProfil from './FieldProfil';

// == Component
function EditProfil({ changeField }) {
  // we use the hook useSelector to get the parameters from the state
  const nickname = useSelector((state) => state.user.Newnickname);
  const email = useSelector((state) => state.user.Newemail);
  const newpassword = useSelector((state) => state.user.Newpassword);

  const oldNickname = useSelector((state) => state.user.nickname);
  const oldEmail = useSelector((state) => state.user.email);
  const passwordcheck = useSelector((state) => state.user.passwordcheck);
  const errors = useSelector((state) => state.user.errors);
  const [isAlertVisible, setIsAlertVisible] = React.useState(false);
  const [isAlertMessageVisible, setIsAlertMessageVisible] = React.useState(false);
  const message = <div className="login-form-right-title-error">Les deux mots de passent doivent être identiques</div>;

  let showErrors = '';
  if (errors) {
    console.log(errors);
    switch (errors.status) {
      case 422:
        showErrors = Object.keys(errors.data).map((key) => <div className="login-form-right-title">{`${errors.data[key]}`}</div>);
        break;
      case 204:
        showErrors = <div className="login-form-right-title-congrat">Bravo ! Vos modifications sont bien prises en compte !</div>;
        break;
      default:
        showErrors = <div>''</div>;
        break;
    }
  }

  const handleVisibility = () => {
    setTimeout(() => {
      setIsAlertVisible(false);
      setIsAlertMessageVisible(false);
    }, 2000);
  };
  // this function is here for checking password there is a condition when the user enter password
  // it has to be the same to enter into the condition
  const checkPassword = () => {
    if (newpassword || passwordcheck) {
      if (newpassword === passwordcheck) {
        return true;
      }
      setIsAlertMessageVisible(true);
      return false;
    }
    setIsAlertMessageVisible(false);
    return true;
  };

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchUser());
  // }, []);

  // we use preventDefault to avoid refresh page
  // Also the handlesubmit function is here for the form submit, then the useredit action is called
  // to edit form
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (checkPassword()) {
      setIsAlertMessageVisible(false);
      dispatch(userEdit());
      setIsAlertVisible(true);
    }
  };

  return (
    <div className="container-scrolly-mobile-only">
      <div className="profil-form">
        <div className="profil-form-container">
          {isAlertMessageVisible && message}
          {isAlertVisible && showErrors}
          <h1 className="profil-form-title">MODIFIER MON PROFIL</h1>
          <div className="profil-form-element">
            <form
              className="profil-form--form"
              onSubmit={handleSubmit}
              onBlur={handleVisibility}
            >
              <div className="field-container">
                <div className="field">
                  <label
                    className="field-left"
                  >
                    Pseudo :
                  </label>
                  {/* this composant is use for a better controlled of the fields we need to check if
                   the name is exacly the same as in the reducer associated */}
                  <FieldProfil
                    type="text"
                    name="newnickname"
                    value={nickname}
                    onChange={changeField}
                    className="field-input-text"
                    placeholder={oldNickname}
                  />
                </div>
                <div className="field">
                  <label
                    className="field-left"
                  >
                    Adresse mail :
                  </label>
                  <FieldProfil
                    type="email"
                    name="newemail"
                    className="field-input-email"
                    value={email}
                    onChange={changeField}
                    placeholder={oldEmail}
                  />
                </div>
                <div className="field">
                  <label
                    className="field-left"
                  >
                    Mot de passe :
                  </label>
                  <FieldProfil
                    type="password"
                    name="passwordcheck"
                    className="field-input-password"
                    placeholder="Mot de passe"
                    onChange={changeField}
                    value={passwordcheck}
                  />
                </div>
                <div className="field">
                  <label
                    className="field-left"
                  >
                    Confirmer votre mot de passe :
                  </label>
                  <FieldProfil
                    type="password"
                    className="field-input-password"
                    name="newPassword"
                    placeholder="Nouveau mot de passe"
                    onChange={changeField}
                    value={newpassword}
                  />
                </div>
              </div>
              <div className="profil-form-button">
                <button
                  className="profil-form-button--left"
                  type="submit"
                >
                  VALIDER LES MODIFICATIONS
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <NavLink
        to="/mon-compte"
        className="container-button--return"
      >
        Retour à mon profil
      </NavLink>
    </div>
  );
}

EditProfil.propTypes = {
  changeField: PropTypes.func.isRequired,
  /**
   * this function is trigger when we add a new caracters into one of the fields
   * two parameters :
   * - new value taking into account the character entered
   * - id of the fields :  'email' or 'password'
   */
};

// == Export
export default EditProfil;
