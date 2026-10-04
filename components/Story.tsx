export default function Story() {
  return (
    <section className="section story" id="story">
      <div className="section__head">
        <p className="section__eyebrow">How it began</p>
        <h2 className="section__title">Our Story</h2>
      </div>
      <div className="story__grid">
        <div className="story__image" role="img" aria-label="Mercy and Brian" />
        <div className="story__text">
          <p>Our story began in the most unexpected way yet grew into the most beautiful journey.</p>
          <p>
            We see God’s hand in every chapter of our story, a gentle reminder that He orchestrated
            our union and led us to our forever. Learning to love each other is the best thing we will
            ever do, and we thank God for the privilege of walking this path together.
          </p>
          <p>
            Through every season, He has proven faithful, reminding us that love, when placed in His
            hands, unfolds exactly as it should.
          </p>
          <p className="story__verse">
            “He has made everything beautiful in its time.”
            <span>Ecclesiastes 3:11</span>
          </p>
          <p className="story__sign">Mercy &amp; Brian</p>
        </div>
      </div>
    </section>
  );
}
