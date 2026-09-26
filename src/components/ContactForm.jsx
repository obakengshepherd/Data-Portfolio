import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message:
            "Your message has been sent successfully. I will be in touch soon.",
        });
        setFormData(initialState);
      } else {
        setStatus({
          type: "error",
          message:
            result.message || "Something went wrong. Please try again later.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message:
          "Unable to send the message right now. Please email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="content-section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2>Let’s talk about data, decisions, and opportunities.</h2>
          <p>
            I’m open to analytics, research, and insights-focused opportunities,
            particularly where thoughtful data work can improve business
            decisions and customer experience.
          </p>

          <div className="contact-methods">
            <a href={`mailto:${"obaketsaagane@gmail.com"}`}>
              obaketsaagane@gmail.com
            </a>
            <a href="tel:+27676308354">067 630 8354</a>
            <a
              href="https://www.linkedin.com/in/obakeng-tsaagane-307544244/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/obakengshepherd"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <label>
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label>
            Subject
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          {status.type !== "idle" && (
            <p className={`form-status ${status.type}`}>{status.message}</p>
          )}

          <button className="button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
