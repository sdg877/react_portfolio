import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import Spinner from "../components/Spinner.jsx";
import "../Styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    toast.dismiss();

    const emailData = {
      ...formData,
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        emailData,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setLoading(false);
          setFormData({ name: "", email: "", message: "", subject: "" });
        },
        (error) => {
          toast.error("Error sending message, please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="home-container">
      <motion.div 
        className="projects-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <header className="projects-header">
          <h2 className="title-project">Contact</h2>
        </header>

        <div className="grid-card-wrapper contact-card">
          <div className="project-overlay">
            <span className="grid-card-label">Send a Message</span>
          </div>

          <div className="contact-content">
            {loading && <Spinner />}
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-field">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="form-input" disabled={loading} />
              </div>
              
              <div className="form-field">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="form-input" disabled={loading} />
              </div>

              <div className="form-field">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="form-input" disabled={loading} />
              </div>

              <div className="form-field">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea name="message" id="message" value={formData.message} onChange={handleChange} required rows="5" className="form-textarea" disabled={loading} />
              </div>

              <button type="submit" className="form-button" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        <footer className="contact-footer">
          <p>Sylvia Drake-Gill | <a href="mailto:sdrakegill@gmail.com" className="custom-link-packages">sdrakegill@gmail.com</a></p>
        </footer>
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default Contact;