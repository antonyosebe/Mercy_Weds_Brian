"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/lib/content";

const target = new Date(wedding.startsAt).getTime();

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function remaining(now: number) {
  const diff = target - now;
  if (diff <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00", done: true };
  }
  return {
    days: pad(Math.floor(diff / 86400000)),
    hours: pad(Math.floor((diff % 86400000) / 3600000)),
    minutes: pad(Math.floor((diff % 3600000) / 60000)),
    seconds: pad(Math.floor((diff % 60000) / 1000)),
    done: false,
  };
}

const placeholder = { days: "--", hours: "--", minutes: "--", seconds: "--", done: false };

export default function Countdown() {
  const [time, setTime] = useState(placeholder);

  useEffect(() => {
    setTime(remaining(Date.now()));
    const id = window.setInterval(() => setTime(remaining(Date.now())), 1000);
    return () => window.clearInterval(id);
  }, []);

  const boxes = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Minutes" },
    { value: time.seconds, label: "Seconds" },
  ];

  return (
    <section className="countdown" id="countdown">
      <h2 className="section__title">Counting Down to Forever</h2>
      <p className="section__sub">The big day is almost here</p>
      <div className="countdown__grid">
        {boxes.map((box) => (
          <div className="countdown__box" key={box.label}>
            <span>{box.value}</span>
            <small>{box.label}</small>
          </div>
        ))}
      </div>
      {time.done ? <p className="countdown__msg">Today is the day! 💐</p> : null}
    </section>
  );
}
