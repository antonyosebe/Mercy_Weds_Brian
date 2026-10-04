import { dressColors } from "@/lib/content";

export default function DressCode() {
  return (
    <section className="section dress" id="dress">
      <div className="section__head">
        <p className="section__eyebrow">What to wear</p>
        <h2 className="section__title">Dress Code</h2>
      </div>
      <div className="dress__content">
        <p className="dress__headline">Garden Formal in Green &amp; Gray</p>
        <p>
          We’d love to see you in the colours of the day: soft greens, sage, eucalyptus and gentle
          grays, from slate to warm stone.
        </p>
        <div className="dress__swatches" aria-label="Suggested colours">
          {dressColors.map((color) => (
            <span key={color.hex} style={{ ["--c" as string]: color.hex }} title={color.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
