import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import Spinner from "../components/Spinner.jsx"; 
import "../Styles/Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
        (response) => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          setLoading(false);
          setFormData({ name: "", email: "", message: "", subject: "" });
        },
        (error) => {
          console.error("Error sending message", error);
          toast.error("Error sending message, please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
          });
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact-form-container">
      <p className="contact-title">Please get in touch</p>

      {loading && <Spinner />}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-field">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
            disabled={loading}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
            disabled={loading}
          />
        </div>
        <div className="form-field">
          <label htmlFor="subject" className="form-label">
            Subject:
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="form-input"
            disabled={loading}
          />
        </div>
        <div className="form-field">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="form-textarea"
            disabled={loading}
          />
        </div>
        <div className="form-field">
          <button type="submit" className="form-button" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
      <p className="contact-email">
        Sylvia Drake-Gill |{" "}
        <a href="mailto:sdrakegill@gmail.com">sdrakegill@gmail.com</a>
      </p>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </div>
  );
};

export default Contact;
