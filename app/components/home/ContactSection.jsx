import { faEnvelope, faHome, faMap, faPhone, faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="heading">
          <h1>Contact Us</h1>
        </div>
        <div className="box-container">
          <div className="col-left">
            <div className="contact-group">
              <FontAwesomeIcon icon={faHome} className="icons" />
              <h1 className="name">Kansha Hibachi Express</h1>
            </div>
            <div className="contact-group">
              <FontAwesomeIcon icon={faPhone} className="icons" />
              <Link href="tel:" rel="noreferrer"> <h1 className="phone">660-429-9074</h1></Link>
              <FontAwesomeIcon icon={faSquareArrowUpRight} className="icons-link" />
            </div>
            <div className="contact-group">
              <FontAwesomeIcon icon={faEnvelope} className="icons" />
              <Link href="mailto:" rel="noreferrer"> <h1 className="email">ss.kansha@gmail.com</h1></Link>
              <FontAwesomeIcon icon={faSquareArrowUpRight} className="icons-link" />
            </div>
            <div className="contact-group">
              <FontAwesomeIcon icon={faMap} className="icons" />
              <Link href="https://goo.gl/maps/V9qXQh6mKFZmb15Z7" target="_blank" rel="noreferrer"> <h1 className="location">208 E Young Ave, Warrensburg, MO 64093, United States</h1></Link>
              <FontAwesomeIcon icon={faSquareArrowUpRight} className="icons-link" />
            </div>
          </div>
          <div className="col-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12442.744552741196!2d-93.7368245!3d38.7709022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c3e304e1e59d4d%3A0xd91636cc2fb9e159!2sKansha%20Hibachi%20Express!5e0!3m2!1sen!2sus!4v1685732677839!5m2!1sen!2sus"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;