import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

type Rsvp = {
  id: string;
  name: string;
  party: number;
  message: string;
  createdAt: string;
};

const filePath = path.join(process.cwd(), "data", "rsvps.json");

function clean(value: unknown, max: number) {
  return String(value ?? "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, max);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  if (clean(body.bot, 80)) {
    return NextResponse.json({ ok: true, party: 1 });
  }

  const name = clean(body.name, 120);
  const message = clean(body.message, 1000);
  const party = Math.max(1, Math.min(20, Number.parseInt(String(body.party ?? "1"), 10) || 1));

  if (name.length < 2) {
    return NextResponse.json(
      { error: "Please add your name so we know who’s coming." },
      { status: 400 },
    );
  }

  const entry: Rsvp = {
    id: crypto.randomUUID(),
    name,
    party,
    message,
    createdAt: new Date().toISOString(),
  };

  try {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    let existing: Rsvp[] = [];
    try {
      existing = JSON.parse(await fs.readFile(filePath, "utf8")) as Rsvp[];
      if (!Array.isArray(existing)) existing = [];
    } catch {
      existing = [];
    }
    existing.push(entry);
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2));
  } catch {
    return NextResponse.json(
      { error: "We couldn’t save your RSVP just now. Please try again in a moment." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, party });
}
