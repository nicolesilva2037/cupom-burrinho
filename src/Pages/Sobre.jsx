import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AboutHero from "../components/About/AboutHero";
import AboutStory from "../components/About/AboutStory";
import AboutValues from "../components/About/AboutValues";
import AboutCTA from "../components/About/AboutCTA";

export default function Sobre() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutCTA />
      <Footer />
    </>
  );
}
