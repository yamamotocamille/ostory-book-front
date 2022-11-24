// == Import
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteUser } from '../../actions/auth';
import '../Profil/styles.scss';

function linkToBackOffice() {
  // 👇️ redirect to external URL
  window.location.href = 'http://localhost:8000/login';

  return null;
}

// == Component
function MyProfil({
  email, nickname, roles,
}) {
  const dispatch = useDispatch();

  return (
    <div className="profil-form">
      <div className="profil-form-container">
        <div className="profil-form-element">
          <form className="profil-form--form">
            <div className="user">
              <h1 className="user-info-title">
                Mon Profil
              </h1>
              <h2 className="user-info-username">
                Bienvenue  {nickname}
              </h2>
              <p className="user-info-email">
                {email}
              </p>
              <div className="profil-form-button">
                <div className="profil-form-button--left">
                  <NavLink
                    to="/mon-compte/edit"
                    type="submit"
                    style={{ fontFamily: 'arial' }}
                  >
                    MODIFIER MON PROFIL
                  </NavLink>
                </div>
                {/* this is a condition for the Back office display
                button it appear only if admin is connected */}
                {roles == 'ROLE_ADMIN' && (
                <div className="profil-form-button--left">
                  <NavLink
                    to="/"
                    onClick={linkToBackOffice}
                    style={{ fontFamily: 'arial' }}
                  >
                    ACCEDER AU BACK-OFFICE
                  </NavLink>
                </div>
                )}
                <NavLink
                  className="profil-form-button--right"
                  type="submit"
                  onClick={(event) => {
                    // eslint-disable-next-line no-alert
                    if (window.confirm('Êtes-vous sûr de vouloir supprimer votre profil utilisateur ?')) {
                      dispatch(deleteUser());
                    }
                  }}
                  to="/"
                >
                  SUPPRIMER MON COMPTE
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
MyProfil.propTypes = {
  email: PropTypes.string,
  nickname: PropTypes.string,
  roles: PropTypes.string,
};

MyProfil.defaultProps = {
  email: '',
  nickname: '',
  roles: '',

};
// == Export
export default MyProfil;
