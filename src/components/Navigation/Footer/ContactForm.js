// == Import
import './styles.scss';

// == Component
function ContactForm() {
  return (
    <div className="footer-container">
      <div className="contact__form">
        <form className="contact__form__item" action="">
          <h1 className="contact__form__title">Dites-nous des choses !</h1>
          <input type="text" className="contact__form__message" placeholder="Une question, une suggestion, un bug sur le site, une quête à nous confier ?" />
          <button type="submit" className="contact__form__button">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

// == Export
export default ContactForm;
