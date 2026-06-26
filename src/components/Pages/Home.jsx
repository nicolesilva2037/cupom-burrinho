import React from "react";

import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import HowItWorks from "../HowItWorks/HowItWorks";
import Partners from "../Partners/Partners";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground box-border">
      <Hero />
      <HowItWorks />
      <Partners />
      <Newsletter />
    </div>
  );
}
