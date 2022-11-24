// == Import
import ContactForm from './ContactForm';
import '../styles.scss';

// == Component
function Contact() {
  return (
    <div className="container" >
      <div className="contact-form">
        <ContactForm />
      </div>
    </div>
  );
}

// == Export
export default Contact;
