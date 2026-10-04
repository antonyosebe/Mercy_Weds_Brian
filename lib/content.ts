export const wedding = {
  bride: "Mercy",
  groom: "Brian",
  couple: "Mercy & Brian",
  tagline: "Together forever",
  dateLabel: "Sunday, 8 November 2026",
  shortDate: "08.11.2026",
  venue: "Laiser Hill SDA Church",
  city: "Ongata Rongai, Kenya",
  reception: "Jakin Gardens",
  receptionCity: "Ongata Rongai",
  arrival: "Arrival from 10:00 AM",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Laiser+Hill+SDA+Church+Ongata+Rongai",
  mapsEmbed:
    "https://www.google.com/maps?q=Laiser%20Hill%20SDA%20Church%20Ongata%20Rongai&output=embed",
  receptionMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Jakin+Gardens+Ongata+Rongai",
  receptionMapsEmbed:
    "https://www.google.com/maps?q=Jakin%20Gardens%20Ongata%20Rongai&output=embed",
  /** Ceremony start in East Africa Time. */
  startsAt: "2026-11-08T10:00:00+03:00",
};

export const navLinks = [
  { href: "#ceremony", label: "Ceremony" },
  { href: "#schedule", label: "Schedule" },
  { href: "#venue", label: "Venue" },
  { href: "#dress", label: "Dress Code" },
  { href: "#gifts", label: "Gifts" },
] as const;

export const schedule = [
  {
    time: "10:00 AM",
    title: "Guest Arrival",
    detail: "Please be seated before the ceremony begins at Laiser Hill SDA Church.",
  },
  {
    time: "10:30 AM",
    title: "Welcome & Introduction",
    detail: "A warm welcome as we gather to celebrate this day.",
  },
  {
    time: "10:45 AM",
    title: "Bridal Team Processional",
    detail: "The bridal party makes their grand entrance.",
  },
  {
    time: "11:00 AM",
    title: "Sermonette",
    detail: "A short message and blessing over the couple.",
  },
  {
    time: "11:45 AM",
    title: "Vows",
    detail: "The moment we’ve all been waiting for, “I do.”",
  },
  {
    time: "12:30 PM",
    title: "Exit of the Bridal Party",
    detail: "Celebrate as the newlyweds make their way out.",
  },
] as const;

export const gallery = [
  "/assets/mercy-brian-day.jpg",
  "/assets/mercy-brian-sunset.jpg",
] as const;

export const dressColors = [
  { name: "Sage", hex: "#8fa08a" },
  { name: "Forest", hex: "#3e5c4a" },
  { name: "Eucalyptus", hex: "#a8b5a2" },
  { name: "Slate", hex: "#8d9390" },
  { name: "Soft gray", hex: "#d5d8d6" },
] as const;
