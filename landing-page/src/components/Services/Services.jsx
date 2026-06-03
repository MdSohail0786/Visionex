import { useState } from "react";
import { services } from "../../data/services.js";
import "./Services.css";

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className={"accordion__item" + (isOpen ? " accordion__item--open" : "")}>
      <button
        className="accordion__trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="accordion__title">{item.title}</span>
        <span className="accordion__icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <line x1="10" y1="4" x2="10" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
              className="accordion__icon-v" />
            <line x1="4" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div className="accordion__body">
        <p className="accordion__content">{item.content}</p>
      </div>
    </div>
  );
}

export default function Services() {
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="services" id="services">
      <div className="services__inner">
        <div className="services__header">
          <span className="about__eyebrow">What we offer</span>
          <h2 className="services__heading">What we can offer you!</h2>
          <p className="services__subheading">
            Three pillars that define how we show up for every client, every time.
          </p>
        </div>

        <div className="services__accordion">
          {services.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
