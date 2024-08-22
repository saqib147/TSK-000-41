// import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Internship } from "./components/Internship";
import { Blogs } from "./components/Blogs";
import JobPortalSection from "./components/JobPortal";
import { WhyInternee } from "./components/WhyInternee";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        <HeroSection />
        <Internship />
        <Blogs />
        <JobPortalSection />
        <WhyInternee />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
