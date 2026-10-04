"use client";

import { MouseEvent, useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

type Heart = {
  id: number;
  left: number;
  delay: number;
  size: number;
  duration: number;
  drift: number;
};

let heartId = 0;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  const releaseHearts = (event: MouseEvent<HTMLAnchorElement>) => {
    close();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const batch: Heart[] = Array.from({ length: 18 }, () => ({
      id: ++heartId,
      left: 6 + Math.random() * 88,
      delay: Math.random() * 0.4,
      size: 16 + Math.random() * 20,
      duration: 1.7 + Math.random() * 1.3,
      drift: -48 + Math.random() * 96,
    }));
    setHearts((current) => [...current, ...batch]);
    window.setTimeout(() => {
      const ids = new Set(batch.map((heart) => heart.id));
      setHearts((current) => current.filter((heart) => !ids.has(heart.id)));
    }, 3400);
    event.currentTarget.blur();
  };

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}${open ? " menu-open" : ""}`}>
      <a href="#home" className="nav__brand" onClick={close}>
        Mercy
        <svg className="nav__heart" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 20.5s-6.7-4.2-9.3-8.2C.8 9.6 1.4 6.2 4.2 4.8 6.2 3.8 8.4 4.4 9.6 6.1 10.4 7.2 11.2 7.8 12 7.8s1.6-.6 2.4-1.7c1.2-1.7 3.4-2.3 5.4-1.3 2.8 1.4 3.4 4.8 1.5 7.5-2.6 4-9.3 8.2-9.3 8.2z" />
        </svg>
        Brian
      </a>
      <button
        className="nav__toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`nav__links${open ? " open" : ""}`} aria-label="Page">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={releaseHearts}>
            {link.label}
          </a>
        ))}
        <a href="#rsvp" className="nav__cta" onClick={releaseHearts}>
          RSVP
        </a>
      </nav>
      <div className="love-burst" aria-hidden="true">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="love-burst__heart"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
              animationDelay: `${heart.delay}s`,
              animationDuration: `${heart.duration}s`,
              ["--drift" as string]: `${heart.drift}px`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>
    </header>
  );
}
