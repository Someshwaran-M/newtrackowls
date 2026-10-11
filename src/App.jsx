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
          
          
        </Routes>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
}

export default App;