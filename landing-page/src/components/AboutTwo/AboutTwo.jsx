import "./AboutTwo.css";

export default function AboutTwo() {
  return (
    <section className="about-two" id="about-two">
      <div className="about-two__inner">
        <div className="about-two__image-wrap">
          <div className="about-two__image-card">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=640&auto=format&fit=crop"
              alt="Progress and growth"
              className="about-two__image"
            />
          </div>
          <div className="about-two__floating-card">
            <div className="about-two__stat">
              <span className="about-two__stat-num">96%</span>
              <span className="about-two__stat-label">Client retention rate</span>
            </div>
            <div className="about-two__stat-divider" />
            <div className="about-two__stat">
              <span className="about-two__stat-num">200+</span>
              <span className="about-two__stat-label">Engagements delivered</span>
            </div>
          </div>
          <div className="about-two__shape" />
        </div>

        <div className="about-two__text">
          <span className="about__eyebrow">What we do</span>
          <h2 className="about-two__heading">
            See how we can help you progress
          </h2>
          <p className="about-two__body">
            Progress isn't accidental. It requires the right thinking, the right people,
            and the right conditions. We help create all three — working across strategy,
            design, technology, and culture to build organisations that genuinely evolve.
          </p>
          <p className="about-two__body">
            From diagnosing what's holding you back to building the systems that will
            carry you forward, we're with you at every stage of the journey.
          </p>
          <a href="#services" className="about__read-more">
            Explore our services
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
