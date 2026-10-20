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

import LivestreamingProtection from "./components/mainsolutions/solutions/LiveStreamingProtection";
import OTTVODProtection from "./components/mainsolutions/solutions/OTTVODProtection";
import WebAppMonitoring from "./components/mainsolutions/solutions/WebAppMonitoring";
import CopyrightEnforcement from "./components/mainsolutions/solutions/CopyrightsEnforcement";
import BrandProtection from "./components/mainsolutions/solutions/BrandProtection";
import PiracyIntelligence from "./components/mainsolutions/solutions/PiracyIntelligence";
import MarketplaceCounterfeitMonitoring from "./components/mainsolutions/solutions/MarketplaceCounterfeitMonitoring";
import DomainImpersonationMonitoring from "./components/mainsolutions/solutions/DomainImpersonationMonitoring";
import SocialMediaVideoProtection from "./components/mainsolutions/solutions/SocialMediaVideoProtection";

import FilmEntertainment from "./components/mainindustries/industries/FilmEntertainment";
import OTTStreaming from "./components/mainindustries/industries/OTTStreaming";
import LiveSports from "./components/mainindustries/industries/LiveSports";
import TelevisionBroadcasting from "./components/mainindustries/industries/TelevisionBroadcasting";
import Music from "./components/mainindustries/industries/Music";
import BrandIPOwners from "./components/mainindustries/industries/BrandIPOwners";
import SportsWear from "./components/mainindustries/industries/SportsWear";
import Publishers from "./components/mainindustries/industries/Publishers";


function App() {
  // Show the loader on each full page load or browser refresh.
  // Internal React Router navigation does not reload this component.
  const [loading, setLoading] = useState(() => {
    try {
      return sessionStorage.getItem("trackowls-loader-shown") !== "true";
    } catch {
      return true;
    }
  });

  const handleLoaderComplete = useCallback(() => {
    try {
      sessionStorage.setItem("trackowls-loader-shown", "true");
    } catch {
      // Continue normally if sessionStorage is unavailable.
    }

    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#152019] dark:bg-[#070A07] dark:text-white">
      {/* TrackOwls loader: shown once per full page load */}
      {loading && (
        <TrackOwlsLoader
          duration={8000}
          autoEnter={true}
          onEnter={handleLoaderComplete}
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


            <Route path="/solutions/live-streaming-protection" element={<LivestreamingProtection />} />
            <Route path="/solutions/ott-vod-protection" element={<OTTVODProtection />} />
            <Route path="/solutions/web-app-monitoring" element={<WebAppMonitoring />} />
            <Route path="/solutions/copyright-enforcement" element={<CopyrightEnforcement />} />
            <Route path="/solutions/brand-protection" element={<BrandProtection />} />
            <Route path="/solutions/piracy-intelligence" element={<PiracyIntelligence />} />
            <Route path="/solutions/marketplace-counterfeit-monitoring" element={<MarketplaceCounterfeitMonitoring />} />
            <Route path="/solutions/domain-impersonation-monitoring" element={<DomainImpersonationMonitoring />} />
            <Route path="/solutions/social-media-video-protection" element={<SocialMediaVideoProtection />} />


            <Route path="/industries/film-entertainment" element={<FilmEntertainment />} />
            <Route path="/industries/ott-streaming" element={<OTTStreaming />} />
            <Route path="/industries/live-sports" element={<LiveSports />} />
            <Route path="/industries/television-broadcasting" element={<TelevisionBroadcasting />} />
            <Route path="/industries/music" element={<Music />} />
            <Route path="/industries/brand-ip-owners" element={<BrandIPOwners />} />
            <Route path="/industries/sportswear" element={<SportsWear />} />
            <Route path="/industries/publishers" element={<Publishers />} />
            
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
