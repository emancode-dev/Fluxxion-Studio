import React from "react";
import ContactForm from "../components/ContactForm";
import FloatingContact from "../components/FloatingContact"; // Add this import
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-inner">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Have a question or want to work together? Send us a message and we'll
            get back within 1-2 business days.
          </p>
        </div>
        <ContactForm />
      </div>
      <FloatingContact /> {/* Add this component */}
    </section>
  );
}