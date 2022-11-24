/* eslint-disable react/button-has-type */

import {
  useDispatch,
} from 'react-redux';
import {
  useEffect,
} from 'react';

import PropTypes from 'prop-types';
import './styles.scss';

import {
  fetchPages,
} from 'src/actions/pages';
import {
  Link,
  NavLink,
} from 'react-router-dom';

/* eslint-disable max-len */
function Page({

  id,
  title,
  image,
  content,
  choices,
  page_end,

}) {
  const dispatch = useDispatch();
  const winMessage = <p className="page page-container--content__win-message">Vous avez atteint la fin de l'histoire ! Félicitations !</p>;
  const lossMessage = <p className="page page-container--content__loss-message">Malheureusement vous n'avez pas réussi à aller au bout de l'histoire... Tentez à nouveau votre chance !</p>;
  

  return (
    <div> {(page_end == null || page_end == 0)
      ? (
        <div
          className="page page-container"
          key={id}
          style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundColor: 'rgba(52, 52, 52, 0.8)',}}
        >
          <div
            className="page page-container--container"
            style={{backgroundColor: 'rgba(52, 52, 52, 0.5)',}}
          >
            <h2 className="page page-container--title"> {title} </h2>
            <div className="page-container--content">
              <p className="page page-container--content__subtitle"> {content} </p>
            </div>
            <div className="page page-container--choice"> 
                 { choices ? choices.map((choice) => (
                  <div className="page-container--choice__content"> 
                    <div className="page-container--choice__description">{choice.description}</div> 
                    <Link to="/histoire">
                      <button
                        className="page-container--choice__button"
                        onClick={
                          (event) => {
                            localStorage.setItem('page', choice.page_to_redirect);
                            dispatch(fetchPages(localStorage.getItem('id'), localStorage.getItem('page')));
                          }
                        }
                      >
                        {choice.name}
                      </button>
                    </Link>
                  </div>
              )) : 'wrong way sorry ! '
            }
            </div>
            <NavLink
              to="/histoires"
              onClick={
                (event) => {
                  localStorage.removeItem('id');
                  localStorage.removeItem('page');
                }
              }
            >
              <div className="page-container--choice__button-return">
                Retour à la liste des histoires
              </div>
            </NavLink>
          </div>
        </div>
      ) : (
        <div
          className="page page-container"
          key={id}
        >
          <h2 className="page page-container--title"> {title} </h2>
          <div className="page-container--content">
            <div className="page page-container--content__subtitle">
              {page_end == 1 ? winMessage : lossMessage}
              <p className="page page-container--content__content"> {content} </p>
            </div>
            <img className="page page-container--content__img-end" src={image} alt="story-img-end" />
          </div>
          <div className="page-container--choice__button-return-container">
            <NavLink
              to="/histoires"
              className="page-container--choice__button-return"
              onClick={
                (event) => {
                  localStorage.removeItem('id');
                  localStorage.removeItem('page');
                }
              }
            >
              Retour à la liste des histoires
            </NavLink>
            <NavLink
              to="/"
              className="page-container--choice__button-return"
              onClick={
                (event) => {
                  localStorage.removeItem('id');
                  localStorage.removeItem('page');
                }
              }
            >
              Retour à la page d 'accueil
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

Page.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string,
  choices: PropTypes.array,
  page_end: PropTypes.number,
};

Page.defaultProps = {
  choices: null,
  id: null,
  title: null,
  content: null,
  image: null,
  page_end: null,
};

export default Page;
