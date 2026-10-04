import { wedding } from "@/lib/content";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <p className="hero__eyebrow">
          Together with their families, Mercy and Brian invite you to share in
          the joy of their wedding
        </p>
        <h1 className="hero__names">
          Mercy <span>&amp;</span>
          <br />
          Brian
        </h1>
        <p className="hero__tagline">“{wedding.tagline}”</p>
        <div className="hero__meta">
          <span>{wedding.dateLabel}</span>
          <span className="dot">•</span>
          <span>Laiser Hill SDA Church, Ongata Rongai</span>
        </div>
        <div className="hero__actions">
          <a href="#rsvp" className="btn btn--solid">
            Confirm Attendance
          </a>
          <a href="#schedule" className="btn btn--ghost">
            View Schedule
          </a>
        </div>
      </div>
      <a href="#countdown" className="hero__scroll" aria-label="Scroll down">
        ↓
      </a>
    </section>
  );
}
