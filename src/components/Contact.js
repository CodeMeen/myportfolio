import '../styles/ContactModal.scss';
import { Mail, MessageCircle } from 'lucide-react'; // Lucide icons

const ContactModal = () => {
  return (
    <div className="contact-modal">
      <div className="contact-modal__tabs">
        <button className="active">Quick connect</button>
        <button>Fill a form</button>
      </div>

      <div className="contact-modal__options">
        <div className="contact-modal__card email">
          <Mail className="icon" />
          <div>
            <h3>Email</h3>
            <p>hello@aayushbharti.in</p>
            <span>Send me an email directly</span>
          </div>
        </div>

        <div className="contact-modal__card whatsapp">
          <MessageCircle className="icon" />
          <div>
            <h3>Message on WhatsApp</h3>
            <p>+91 12345 67890</p>
            <span>Start a chat instantly</span>
          </div>
        </div>
      </div>

      <div className="contact-modal__status">
        <span className="status-dot" />
        Currently available for new opportunities
      </div>
    </div>
  );
};

export default ContactModal;
