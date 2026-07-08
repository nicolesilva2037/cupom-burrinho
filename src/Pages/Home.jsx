import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Partners from "../components/Partners/Partners";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-linear-to-b from-[#eaf5ff] via-[#fefeff] to-[#eaf5ff] text-foreground box-border">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Partners />
      <Newsletter />
      <Footer />
    </div>
  );
}
