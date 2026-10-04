import { wedding } from "@/lib/content";

export default function Ceremony() {
  return (
    <section className="section ceremony" id="ceremony">
      <div className="section__head">
        <p className="section__eyebrow">Join us</p>
        <h2 className="section__title">Ceremony Information</h2>
      </div>
      <div className="cards">
        <article className="card card--photo" style={{ backgroundImage: "url(/assets/card-ring.jpg)" }}>
          <h3>The Wedding</h3>
          <p>{wedding.dateLabel}</p>
          <p>{wedding.arrival}</p>
        </article>
        <article className="card card--photo" style={{ backgroundImage: "url(/assets/card-ceremony-seats.png)" }}>
          <h3>The Ceremony</h3>
          <p>{wedding.venue}</p>
          <p>{wedding.city}</p>
        </article>
        <article className="card card--photo" style={{ backgroundImage: "url(/assets/card-reception.jpg)" }}>
          <h3>The Reception</h3>
          <p>{wedding.reception}</p>
          <p>{wedding.receptionCity}</p>
        </article>
      </div>

      <div className="parents">
        <p className="parents__intro">
          Together with our families, we joyfully invite you as we exchange vows, then celebrate at{" "}
          {wedding.reception}.
        </p>
      </div>
    </section>
  );
}
