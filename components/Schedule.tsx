import { schedule } from "@/lib/content";

export default function Schedule() {
  return (
    <section className="section schedule" id="schedule">
      <div className="section__head">
        <p className="section__eyebrow">The timeline</p>
        <h2 className="section__title">Wedding Day Schedule</h2>
      </div>
      <div className="timeline timeline--alt">
        {schedule.map((item) => (
          <div className="timeline__item" key={item.time}>
            <div className="timeline__dot" />
            <div className="timeline__body">
              <span className="timeline__time">{item.time}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="schedule__reception">Reception to follow at Jakin Gardens, Ongata Rongai 🥂</p>
      <p className="schedule__note">Times are approximate.</p>
    </section>
  );
}
