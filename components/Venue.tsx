import { wedding } from "@/lib/content";

export default function Venue() {
  return (
    <section className="section venue" id="venue">
      <div className="section__head">
        <p className="section__eyebrow">Getting there</p>
        <h2 className="section__title">Venue &amp; Directions</h2>
      </div>

      <div className="venue__place">
        <div className="venue__grid">
          <div className="venue__info">
            <p className="section__eyebrow">Ceremony</p>
            <h3>{wedding.venue}</h3>
            <p>{wedding.city}</p>
            <p className="venue__desc">
              Parking is available on site. Kindly arrive early to be seated before the ceremony begins.
            </p>
            <a className="btn btn--solid" href={wedding.mapsUrl} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
            </a>
          </div>
          <div className="venue__map">
            <iframe
              title="Laiser Hill SDA Church map"
              src={wedding.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="venue__place">
        <div className="venue__grid">
          <div className="venue__info">
            <p className="section__eyebrow">Reception</p>
            <h3>{wedding.reception}</h3>
            <p>{wedding.receptionCity}</p>
            <p className="venue__desc">
              After the ceremony, join us at Jakin Gardens to celebrate with the couple.
            </p>
            <a
              className="btn btn--solid"
              href={wedding.receptionMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="venue__map">
            <iframe
              title="Jakin Gardens map"
              src={wedding.receptionMapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
