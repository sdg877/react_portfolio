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
        process.env.REACT_APP_EMAILJS_USER_ID,
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setLoading(false);
          setFormData({ name: "", email: "", message: "", subject: "" });
        },
        () => {
          toast.error("Error sending message.");
          setLoading(false);
        },
      );
  };

  return (
    <div className="contact-unique-main">
      <motion.div
        className="contact-unique-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="contact-unique-card">
          <div className="contact-unique-header">
            <h3 className="contact-unique-title">Get In Touch</h3>
            <p className="contact-unique-desc">
              Whether you have a question about my projects, want to discuss a
              potential collaboration, or just want to say hello, feel free to
              drop me a message below.
            </p>
          </div>

          <div className="contact-unique-content">
            {loading && <Spinner />}

            <form onSubmit={handleSubmit} className="contact-unique-form">
              <div className="contact-unique-row">
                <div className="contact-unique-field">
                  <label className="contact-unique-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-unique-input"
                    disabled={loading}
                  />
                </div>

                <div className="contact-unique-field">
                  <label className="contact-unique-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-unique-input"
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="contact-unique-field">
                <label className="contact-unique-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="contact-unique-input"
                  disabled={loading}
                />
              </div>

              <div className="contact-unique-field">
                <label className="contact-unique-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="contact-unique-textarea"
                  disabled={loading}
                />
              </div>

              <div className="contact-unique-btn-wrap">
                <button
                  type="submit"
                  className="contact-unique-button"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>

      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
};

export default Contact;
