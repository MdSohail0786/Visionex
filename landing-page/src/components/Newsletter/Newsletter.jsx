import { useState } from "react";
import "./Newsletter.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (val) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email address is required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <section className="newsletter" id="contact">
      <div className="newsletter__inner">
        <div className="newsletter__content">
          <span className="about__eyebrow">Stay informed</span>
          <h2 className="newsletter__heading">Subscribe to our newsletter</h2>
          <p className="newsletter__subtitle">
            Thinking pieces, case studies, and honest perspectives on what's shaping
            the world of strategy and growth. No noise. Just signal.
          </p>
        </div>

        <div className="newsletter__form-wrap">
          {submitted ? (
            <div className="newsletter__success">
              <div className="newsletter__success-icon">✓</div>
              <p className="newsletter__success-msg">
                You&apos;re in. We&apos;ll be in touch with only the good stuff.
              </p>
            </div>
          ) : (
            <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
              <div className={"newsletter__field" + (error ? " newsletter__field--error" : "")}>
                <input
                  type="email"
                  className="newsletter__input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  aria-label="Email address"
                />
                <button type="submit" className="newsletter__btn">
                  Subscribe
                </button>
              </div>
              {error && <p className="newsletter__error" role="alert">{error}</p>}
              <p className="newsletter__note">
                No spam. Unsubscribe at any time. We respect your inbox.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
