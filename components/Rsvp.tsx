"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "done" | "error";

export default function Rsvp() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [thanks, setThanks] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const party = Number(data.get("party") || 1);
    const message = String(data.get("message") || "").trim();
    const bot = String(data.get("bot-field") || "");

    if (!name) {
      setStatus("error");
      setError("Please add your name so we know who’s coming.");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, party, message, bot }),
      });
      const payload = (await response.json()) as { error?: string; party?: number };
      if (!response.ok) {
        throw new Error(payload.error || "That didn’t send. Please try again.");
      }
      const guests = payload.party ?? party;
      setThanks(
        `Thank you, ${name}! We’ve got you down for ${guests} ${
          guests > 1 ? "guests" : "guest"
        }. We can’t wait to celebrate with you!`,
      );
      setStatus("done");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "That didn’t send. Please try again.");
    }
  }

  return (
    <section className="section rsvp" id="rsvp">
      <div className="section__head">
        <p className="section__eyebrow">Will we see you there?</p>
        <h2 className="section__title">Confirm Your Attendance</h2>
        <p className="section__sub">We’d love to know if you’ll be joining us</p>
      </div>

      <div className="rsvp__card">
        {status === "done" ? (
          <p className="rsvp__thanks" role="status">
            {thanks}
          </p>
        ) : (
          <form className="rsvp__form" onSubmit={onSubmit}>
            <p className="rsvp__hp">
              <label>
                Leave this field empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="rsvp__field">
              <label htmlFor="rsvpName">Your name</label>
              <input
                id="rsvpName"
                name="name"
                required
                autoComplete="name"
              />
            </div>

            <div className="rsvp__field">
              <label htmlFor="rsvpParty">How many in your party?</label>
              <input
                id="rsvpParty"
                name="party"
                type="number"
                min={1}
                max={20}
                defaultValue={1}
                inputMode="numeric"
                required
              />
              <span className="rsvp__hint">Include yourself and any plus-one or family joining you.</span>
            </div>

            <div className="rsvp__field">
              <label htmlFor="rsvpMessage">A note for the couple (optional)</label>
              <textarea
                id="rsvpMessage"
                name="message"
                rows={3}
              />
            </div>

            <button className="btn btn--solid" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send RSVP"}
            </button>
            {status === "error" ? (
              <p className="rsvp__status" role="status">
                {error}
              </p>
            ) : null}
          </form>
        )}
      </div>
    </section>
  );
}
