
import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

// Loader
import TrackOwlsLoader from "./components/common/TrackOwlsLoader";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Main Pages
import Home from "./components/pages/Home";
import HowItWorks from "./components/pages/HowItWorks";
import About from "./components/pages/About";
import Solutions from "./components/pages/Solutions";
import Industries from "./components/pages/Industries";
import Platform from "./components/pages/Platform";
import Insights from "./components/pages/Insights";
import Piracy from "./components/pages/Piracy";
import Contact from "./components/pages/Contact";

// Information
import InformationPrivacy from "./components/information/InformationPrivacy";
import InformationTerms from "./components/information/InformationTerms";
import CopyRight from "./components/information/CopyRights";
import InformationCookies from "./components/information/InformationCookies";
import ContentEditor from "./components/information/ContentEditor";
import Career from "./components/information/Career";

// Insights Articles
import LiveEventProtectionChecklist from "./components/maininsights/LiveEventProtectionChecklist";
import UnderstandingEnforcementReports from "./components/maininsights/UnderstandingEnforcementReports";
import ReleaseWindowMonitoring from "./components/maininsights/ReleaseWindowMonitoring";
import BrandReferenceChecklist from "./components/maininsights/BrandReferenceChecklist";
import RepeatSourceInvestigation from "./components/maininsights/RepeatSourceInvestigation";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#152019] dark:bg-[#070A07] dark:text-white">
      {/* TrackOwls intro loader */}
      {loading && (
        <TrackOwlsLoader
          duration={8000}
          onComplete={handleLoaderComplete}
        />
      )}

      {/* Existing website */}
      <div
        className={loading ? "invisible" : "visible"}
        aria-hidden={loading}
      >
        <Navbar />

        <main>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/piracy" element={<Piracy />} />
            <Route path="/contact" element={<Contact />} />

            {/* Information */}
            <Route path="/privacy" element={<InformationPrivacy />} />
            <Route path="/terms" element={<InformationTerms />} />
            <Route path="/cookies" element={<InformationCookies />} />
            <Route path="/copyrights" element={<CopyRight />} />
            <Route path="/content-editor" element={<ContentEditor />} />
            <Route path="/careers" element={<Career />} />

            {/* Insights Articles */}
            <Route
              path="/live-event-protection"
              element={<LiveEventProtectionChecklist />}
            />
            <Route
              path="/enforcement-reports"
              element={<UnderstandingEnforcementReports />}
            />
            <Route
              path="/release-window"
              element={<ReleaseWindowMonitoring />}
            />
            <Route
              path="/brand-investigation"
              element={<BrandReferenceChecklist />}
            />
            <Route
              path="/repeat-sources"
              element={<RepeatSourceInvestigation />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
