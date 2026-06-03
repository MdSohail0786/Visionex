import "./Footer.css";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about-one" },
      { label: "Services", href: "#services" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Terms & Policies",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms & Conditions", href: "#terms" },
      { label: "Licenses", href: "#licenses" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { label: "LinkedIn", href: "#linkedin" },
      { label: "Instagram", href: "#instagram" },
      { label: "Twitter", href: "#twitter" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span className="footer__logo-mark">V</span>
              <span className="footer__logo-text">isionex</span>
            </a>
            <p className="footer__tagline">
              Thinkers and doers changing the status quo, one bold idea at a time.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title} className="footer__col">
              <h4 className="footer__col-title">{col.title}</h4>
              <ul className="footer__col-links">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer__link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__col-links">
              <li>
                <a href="mailto:support@visionex.com" className="footer__link">
                  support@visionex.com
                </a>
              </li>
              <li>
                <a href="tel:+919999999999" className="footer__link">
                  +91 99999 99999
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Visionex. All rights reserved.
          </p>
          <p className="footer__made">
            Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
