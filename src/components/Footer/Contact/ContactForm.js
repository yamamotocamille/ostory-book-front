import { NavLink } from 'react-router-dom';
import '../styles.scss';

/**
 * Display a form to log in, with inputs email and password.
 * It has two modes: "connected" and "not connected"
 *   - "connected": displays a message and a button to disconnect
 *   - "not connected": displays the form and a button to connect
 */
function ContactForm() {
  return (
    <div className="contact-form">

      <div className="contact-form-container">

        <h1 className="contact-form-title">NOUS CONTACTER</h1>
        <div className="contact-form-element">
          <form className="contact-form--form">
            <div className="contact-field">
              <input
                type="email"
                className="contact-field-email"
                name="email"
                placeholder="Email"
              />
              <textarea
                className="contact-field-textarea"
                name="message"
                placeholder="Votre message"
              />
              <button
                className="contact-form-button"
                type="submit"
              >
                ENVOYER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// == Export
export default ContactForm;
