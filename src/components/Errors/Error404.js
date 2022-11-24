// == Import
import { NavLink } from 'react-router-dom';
import gashadokuro from '../../assets/images/personnages-freebie-ac.jp/gashadokuro.png';

import './styles.scss';

// == Component
function Error404() {
  return (
    <div className="container-scrolly">
      <div className="error-404">
        <div className="error-container">
          <h1 className="error-container--title"> ERROR 404 </h1>
          <div className="error-container--content">
            <div className="error-container--content__container">
              <img className="error-container--content__image" src={gashadokuro} alt="img-404" />
              <div className="error-container--choice">
                <p className="error-container--choice__subtitle"> Oups, je crois que tu t'es perdu dans les méandres des enfers. Rassure-toi, nous te donnons une deuxième chance de te sortir de là. Tu as le choix entre :</p>
                <div className="error-container--choice__content"> Prendre la fuite avant que les Oni te rattrape (fais attention, tu n'auras pas beaucoup de temps devant toi, ils sont très rusés et ont pour seul but de faire le ménage dans cet endroits) </div>
                {/* this composant is here to redirect and replace
                the element a href , this is from react router Dom */}
                <NavLink
                  className="error-container--choice__button"
                  to="/"
                >
                  Fuir à toute jambes
                </NavLink>
                <div className="error-container--choice__content"> Demander de l'aide à d'autres esprits afin de sortir en vie de cet endroit (en revanche, il se pourrait bien que tu sois bloqué et voué à revivre son histoire indéfiniment) </div>
                <NavLink
                  className="error-container--choice__button"
                  to="/histoires"
                >
                  Oskour, aidez moi !
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// == Export
export default Error404;
