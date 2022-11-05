import React from "react";
import Footer from "../../components/footer/Footer";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-page">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask about anything you have in mind.</p>
        <div className="input-fields">
          <div className="names">
            <div>
              <label HtmlFor="first_name">First name</label>
              <input
                id="first_name"
                type="text"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label HtmlFor="last_name">Last name</label>
              <input
                id="last_name"
                type="text"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="yourname@email.com" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea placeholder="Send me a message and I'll reply you as soon as possible..." />
          </div>
        </div>
        <div className="agree">
          <input type="checkbox" className="checkbox" />
          <p>
            You agree to providing your data to Adeleye Opeyemi who may contact
            you.
          </p>
        </div>
        <button type="submit" id="btn__submit">
          Send message
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
