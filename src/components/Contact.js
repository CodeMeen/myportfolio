import "../styles/ContactModal.scss";
import { Linkedin, Twitter, GithubIcon } from "lucide-react";
import { Mail, MessageCircle } from "lucide-react"; // Lucide icons
import { handles } from "../handles";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";

const ContactModal = ({ toggle, setToggle }) => {

    const modalRef = useRef(null);

  const handleDragEnd = (_, info) => {
    if (info.offset.y > 200) {
      setToggle(false); // Close modal if dragged down past 100px
    }
  };

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
       setToggle(false) // Close the modal
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [toggle]);

  return (
    <AnimatePresence>
        {toggle && (
             <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact_popup"
    >
      <motion.div
        drag="y"
        ref={modalRef}
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={handleDragEnd}
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        className="contact-modal"
      >
        <div className="tab_bar" onClick={()=>setToggle(false)}></div>

        <div className="contact-modal__tabs">
          <button className="active">Let's Connect</button>
        </div>

        <div className="handles_box">
          <a href={handles.linkedin} target="_blank" rel="noreferrer">
            {" "}
            <Linkedin size={18} className="link_icon"></Linkedin>{" "}
          </a>
          <a href={handles.github} target="_blank" rel="noreferrer">
            {" "}
            <GithubIcon size={18} className="link_icon"></GithubIcon>{" "}
          </a>
          <a href={handles.twitter} target="_blank" rel="noreferrer">
            {" "}
            <Twitter size={18} className="link_icon"></Twitter>{" "}
          </a>
        </div>

        <div className="optionsGrid">
          <a href={`mailto:${handles.email}`} target="_blank" rel="noreferrer">
            <div className="contact-modal__card email">
              <div className="c_flex">
                <Mail className="icon" />
                <h3>Email</h3>
              </div>

              <div>
                <p>{handles.email}</p>
                <span>Send me an email directly</span>
              </div>
            </div>
          </a>

          <a href={handles.whatsapp} target="_blank" rel="noreferrer">
            <div className="contact-modal__card whatsapp">
              <div className="c_flex">
                <MessageCircle className="icon" />
                <h3>Whatsapp</h3>
              </div>

              <div>
                <p>Message on WhatsApp</p>
                <span>Start a chat instantly</span>
              </div>
            </div>
          </a>
        </div>

        <div className="contact-modal__status">
          <span className="status-dot" />
          Currently available for new opportunities
        </div>
      </motion.div>
    </motion.div>
        )}

    </AnimatePresence>
   
  );
};

export default ContactModal;
