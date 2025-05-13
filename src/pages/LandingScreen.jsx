import React from "react";
import Header from "../components/Header";
import TrendingSection from "../components/TrendingSection";
import LatestInternship from "../components/LatestIntership";
import {
  TestimonialsCarousel,
  CustomerCount,
} from "../components/Testimonials";
import { Footer } from "../components/Footer";

const LandingScreen = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 bg-white">
        <Header />
      </div>
      <TrendingSection />
      <LatestInternship />
      <LatestInternship />
      <CustomerCount />
      <div className="mt-12 mb-10">
        <TestimonialsCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default LandingScreen;
