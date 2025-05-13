import React from "react";
import Header from "../components/Header";
import TrendingSection from "../components/TrendingSection";
import LatestInternship from "../components/LatestIntership";

import { Footer } from "../components/Footer";

const Studentdashboard = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 bg-white">
        <Header />
      </div>
      <TrendingSection />
      <LatestInternship />
      <Footer />
    </div>
  );
};

export default Studentdashboard;
