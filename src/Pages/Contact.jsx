import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactHero from "../components/Contacts/ContactHero";
import ContactForm from "../components/Contacts/ContactForm";
import FAQ from "../components/Contacts/FAQ";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <FAQ />
    </>
  );
}