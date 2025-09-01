import React, { useState, useRef } from "react";
import "./contact.css";
import emailjs from "emailjs-com"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9vgk9sm",   // from EmailJS dashboard
        "template_gkqhrld",  // from EmailJS dashboard
        formRef.current,
        "Ut6brapGiZsw6tqFF"    // from EmailJS account
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully ✅");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong ❌");
        }
      );
  };

  
  /* const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
    setFormData({ name: "", email: "", message: "" });
    console.log(formData)
  }; */

  return (
    <section className="contact-section" id="contact">
      <h4>CONTACT</h4>
      <h2>GET IN TOUCH</h2>

      <form className="contact-form" onSubmit={handleSubmit}  ref={formRef}>
        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label className={formData.name ? "filled" : ""}>Name</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label className={formData.email ? "filled" : ""}>Email</label>
          </div>
        </div>

        <div className="form-group textarea-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <label className={formData.message ? "filled" : ""}>
            How can we help you?
          </label>
        </div>

        <button type="submit" className="submit-btn">
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};


export default ContactForm;

