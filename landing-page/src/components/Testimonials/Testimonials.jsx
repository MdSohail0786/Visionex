import { useState } from "react";
import { testimonials } from "../../data/testimonials.js";
import "./Testimonials.css";

export default function Testimonials() {
  const [activeId, setActiveId] = useState(1);

  const activeTestimonial = testimonials.find((t) => t.id === activeId);

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <span className="about__eyebrow">Testimonials</span>
          <h2 className="testimonials__heading">
            What our customers say About Us
          </h2>
        </div>

        <div className="testimonials__stage">
          <div className="testimonials__avatars testimonials__avatars--left">
            {testimonials.slice(0, 2).map((t) => (
              <button
                key={t.id}
                className={"testimonials__avatar-btn" + (activeId === t.id ? " active" : "")}
                onClick={() => setActiveId(t.id)}
                aria-label={"View testimonial from " + t.name}
              >
                <img src={t.avatar} alt={t.name} />
              </button>
            ))}
          </div>

          <div className="testimonials__card">
            <div className="testimonials__quote-mark">&ldquo;</div>
            <p className="testimonials__text">{activeTestimonial.text}</p>
            <div className="testimonials__author">
              <img
                src={activeTestimonial.avatar}
                alt={activeTestimonial.name}
                className="testimonials__author-img"
              />
              <div>
                <p className="testimonials__author-name">{activeTestimonial.name}</p>
                <p className="testimonials__author-role">{activeTestimonial.role}</p>
              </div>
            </div>
          </div>

          <div className="testimonials__avatars testimonials__avatars--right">
            {testimonials.slice(2).map((t) => (
              <button
                key={t.id}
                className={"testimonials__avatar-btn" + (activeId === t.id ? " active" : "")}
                onClick={() => setActiveId(t.id)}
                aria-label={"View testimonial from " + t.name}
              >
                <img src={t.avatar} alt={t.name} />
              </button>
            ))}
          </div>
        </div>

        <div className="testimonials__dots">
          {testimonials.map((t) => (
            <button
              key={t.id}
              className={"testimonials__dot" + (activeId === t.id ? " active" : "")}
              onClick={() => setActiveId(t.id)}
              aria-label={"Go to testimonial " + t.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
