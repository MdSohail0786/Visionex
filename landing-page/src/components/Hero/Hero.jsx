import "./Hero.css";

const teamMembers = [
  { id: 1, src: "https://i.pravatar.cc/120?img=1", alt: "Team member 1" },
  { id: 2, src: "https://i.pravatar.cc/120?img=2", alt: "Team member 2" },
  { id: 3, src: "https://i.pravatar.cc/120?img=3", alt: "Team member 3" },
  { id: 4, src: "https://i.pravatar.cc/120?img=4", alt: "Team member 4" },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg-shapes">
        <div className="hero__shape hero__shape--circle-lg" />
        <div className="hero__shape hero__shape--circle-sm" />
        <div className="hero__shape hero__shape--blob" />
        <div className="hero__shape hero__shape--ring" />
      </div>

      <div className="hero__inner">
        <div className="hero__tag">
          <span className="hero__tag-dot" />
          Rethinking what's possible
        </div>

        <h1 className="hero__headline">
          The thinkers and doers
          <br />
          <em>changing the status quo</em>
        </h1>

        <p className="hero__description">
          We partner with bold organisations to challenge convention, unlock potential,
          and build futures worth working toward. Strategy meets execution here.
        </p>

        <div className="hero__cta-row">
          <a href="#about-one" className="hero__btn hero__btn--primary">
            Discover our work
          </a>
          <a href="#services" className="hero__btn hero__btn--ghost">
            Our services
          </a>
        </div>

        <div className="hero__team">
          <div className="hero__avatars">
            {teamMembers.map((member) => (
              <img
                key={member.id}
                src={member.src}
                alt={member.alt}
                className="hero__avatar"
              />
            ))}
          </div>
          <p className="hero__team-text">
            <strong>40+ thinkers & doers</strong> shaping what comes next
          </p>
        </div>
      </div>
    </section>
  );
}
