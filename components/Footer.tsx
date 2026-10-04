import { wedding } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__names">Mercy &amp; Brian</p>
      <p className="footer__tag">
        “{wedding.tagline}” · {wedding.shortDate}
      </p>
      <p className="footer__credit">Two hearts, one garden, forever.</p>
    </footer>
  );
}
