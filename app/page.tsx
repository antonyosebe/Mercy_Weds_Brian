import Ceremony from "@/components/Ceremony";
import Countdown from "@/components/Countdown";
import DressCode from "@/components/DressCode";
import Footer from "@/components/Footer";
import Gifts from "@/components/Gifts";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Rsvp from "@/components/Rsvp";
import Schedule from "@/components/Schedule";
import Venue from "@/components/Venue";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Countdown />
        <Ceremony />
        <Schedule />
        <Venue />
        <Gifts />
        <DressCode />
        <Rsvp />
      </main>
      <Footer />
    </>
  );
}
