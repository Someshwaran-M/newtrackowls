import HowItWorksScope from "../mainhowitworks/HowItWorksScope.jsx";
import HowItWorksClient from "../mainhowitworks/HowItWorksClient.jsx";
import HowItWorksReport from "../mainhowitworks/HowItWorksReport.jsx";
import HowItWorksMain from "../mainhowitworks/HowItWorksMain.jsx";
import HomeCTA from "../mainhome/HomeCTA.jsx";

function HowItWorks() {
  return (
    <>
      <HowItWorksMain />
      <HowItWorksScope />
      <HowItWorksClient />
      <HowItWorksReport />
      <HomeCTA />
    </>
  );
}

export default HowItWorks;
