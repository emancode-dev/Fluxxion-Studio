import React, { useState } from "react";
import "./ContactForm.css";

const initial = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  function validate(values) {
    const err = {};
    if (!values.name.trim()) err.name = "Please enter your name.";
    if (!values.email.trim()) err.email = "Please enter your email.";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) err.email = "Enter a valid email.";
    if (!values.message.trim()) err.message = "Please enter a message.";
    return err;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;

    try {
      setStatus("sending");
      // Simulate network request
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
      setForm(initial);
      setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2500);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="field">
        <span className="label">Name</span>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={errors.name ? "input error" : "input"}
          type="text"
          placeholder="Your name"
          aria-invalid={!!errors.name}
        />
        {errors.name && <span className="error-text">{errors.name}</span>}
      </label>

      <label className="field">
        <span className="label">Email</span>
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={errors.email ? "input error" : "input"}
          type="email"
          placeholder="you@domain.com"
          aria-invalid={!!errors.email}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </label>

      <label className="field">
        <span className="label">Message</span>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={errors.message ? "input error" : "input"}
          rows={6}
          placeholder="Tell us about your project or question"
          aria-invalid={!!errors.message}
        />
        {errors.message && <span className="error-text">{errors.message}</span>}
      </label>

      <div className="form-actions">
        <button className={`submit ${status === 'success' ? 'success' : ''}`} type="submit">
          {status === "sending" ? "Sending..." : status === "success" ? "Sent ✓" : status === "error" ? "Try again" : "Send Message"}
        </button>

        <div className="status" aria-live="polite">
          {status === "sending" && <span className="muted">Working on it...</span>}
          {status === "success" && <span className="success">Thanks — we'll reply soon.</span>}
          {status === "error" && <span className="error">Something went wrong. Try again.</span>}
        </div>
      </div>
    </form>
  );
}
