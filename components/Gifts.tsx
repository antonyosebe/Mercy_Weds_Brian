export default function Gifts() {
  return (
    <section className="section gifts" id="gifts">
      <div className="section__head">
        <p className="section__eyebrow">Your presence is a present</p>
        <h2 className="section__title">Gifts &amp; Contributions</h2>
      </div>
      <p className="gifts__intro">
        If you would like to support Mercy and Brian, a gift or contribution is warmly welcome.
      </p>
      <div className="cards">
        <article className="card">
          <div className="card__icon" aria-hidden="true">
            💰
          </div>
          <h3>Contribution</h3>
          <p>
            Monetary gifts are welcome.
          </p>
        </article>
        <article className="card">
          <div className="card__icon" aria-hidden="true">
            🎁
          </div>
          <h3>Gifts</h3>
          <p>
            A voucher, a keepsake, or a surprise from the heart.
          </p>
        </article>
      </div>
      <p className="gifts__thanks">
        Your love and support mean the world to us. Thank you for celebrating this season with us.
      </p>
    </section>
  );
}
