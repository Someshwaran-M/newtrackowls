import React from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "./components/common/Loader";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./components/pages/Home";
import HowItWorks from "./components/pages/HowItWorks";
import About from "./components/pages/About";
import Solutions from "./components/pages/Solutions";
import Industries from "./components/pages/Industries";
import Platform from "./components/pages/Platform";
import Insights from "./components/pages/Insights";
import Piracy from "./components/pages/Piracy";
import Contact from "./components/pages/Contact";
import InformationPrivacy from "./components/information/InformationPrivacy";
import LiveEventProtectionChecklist from "./components/maininsights/liveeventprotectionchecklist";
import UnderstandingEnforcementReports from "./components/maininsights/understandingenforcementreports";
import ReleaseWindowMonitoring from "./components/maininsights/ReleaseWindowMonitoring";
import BrandReferenceChecklist from "./components/maininsights/BrandReferenceChecklist";
import RepeatSourceInvestigation from "./components/maininsights/RepeatSourceInvestigation";



function App() {
  return (
    <div className="min-h-screen bg-white text-[#152019] dark:bg-[#070A07] dark:text-white">
      
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= MAIN CONTENT ================= */}
      <main>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/piracy" element={<Piracy />} />
          <Route path="/contact" element={<Contact />} />

 {/* ================= INFORMATION ================= */}

          <Route path="/privacy" element={<InformationPrivacy />} />

 {/* ================= INSIGHTS ================= */}

          <Route path="/live-event-protection" element={<LiveEventProtectionChecklist />} />
          <Route path="/enforcement-reports" element={<UnderstandingEnforcementReports />} />
          <Route path="/release-window" element={<ReleaseWindowMonitoring />} />
          <Route path="/brand-investigation" element={<BrandReferenceChecklist />} />
          <Route path="/repeat-sources" element={<RepeatSourceInvestigation />} />

        </Routes>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
}

export default App;