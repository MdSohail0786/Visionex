import "./AboutOne.css";

export default function AboutOne() {
  return (
    <section className="about-one" id="about-one">
      <div className="about-one__inner">
        <div className="about-one__text">
          <span className="about__eyebrow">About us</span>
          <h2 className="about-one__heading">
            Tomorrow should be better <br />than today
          </h2>
          <p className="about-one__body">
            That belief sits at the heart of everything we do. We're a team of strategists,
            designers, and builders who refuse to accept the ceiling as the limit. We work
            alongside organisations navigating real complexity — helping them see clearly,
            move decisively, and build something worth being proud of.
          </p>
          <p className="about-one__body">
            Our work spans industries and geographies, but the through-line is always the
            same: honest thinking, genuine partnership, and outcomes that hold up over time.
          </p>
          <a href="#about-two" className="about__read-more">
            Read more
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="about-one__image-wrap">
          <div className="about-one__image-card">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=640&auto=format&fit=crop"
              alt="Team collaborating"
              className="about-one__image"
            />
            <div className="about-one__image-badge">
              <span className="about-one__badge-num">12+</span>
              <span className="about-one__badge-label">Years of impact</span>
            </div>
          </div>
          <div className="about-one__image-shape" />
        </div>
      </div>
    </section>
  );
}
