"use client";

import { useEffect, useState } from "react";
import { gallery } from "@/lib/content";

const ROTATE_MS = 6500;

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % gallery.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const go = (next: number) => {
    setIndex((next + gallery.length) % gallery.length);
  };

  return (
    <section className="section gallery" id="gallery">
      <div className="section__head">
        <p className="section__eyebrow">Moments</p>
        <h2 className="section__title">Photo Gallery</h2>
        <p className="section__sub">A few of our favourite moments</p>
      </div>

      <div
        className="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(event) => {
          const startX = event.touches[0]?.clientX ?? 0;
          const target = event.currentTarget;
          target.dataset.startX = String(startX);
          setPaused(true);
        }}
        onTouchEnd={(event) => {
          const startX = Number(event.currentTarget.dataset.startX || 0);
          const endX = event.changedTouches[0]?.clientX ?? startX;
          const delta = endX - startX;
          if (delta > 40) go(index - 1);
          else if (delta < -40) go(index + 1);
          setPaused(false);
        }}
      >
        <div className="carousel__viewport">
          <div className="carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {gallery.map((src, photoIndex) => (
              <figure className="carousel__slide" key={src}>
                <img
                  src={src}
                  alt={`Mercy and Brian, photo ${photoIndex + 1}`}
                  draggable={false}
                />
              </figure>
            ))}
          </div>
        </div>
        <button
          className="carousel__btn carousel__btn--prev"
          type="button"
          aria-label="Previous photo"
          onClick={() => go(index - 1)}
        >
          ‹
        </button>
        <button
          className="carousel__btn carousel__btn--next"
          type="button"
          aria-label="Next photo"
          onClick={() => go(index + 1)}
        >
          ›
        </button>
        <div className="carousel__dots" role="tablist" aria-label="Choose photo">
          {gallery.map((src, photoIndex) => (
            <button
              key={src}
              type="button"
              className={`carousel__dot${photoIndex === index ? " active" : ""}`}
              role="tab"
              aria-label={`Go to photo ${photoIndex + 1}`}
              aria-selected={photoIndex === index}
              onClick={() => go(photoIndex)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
