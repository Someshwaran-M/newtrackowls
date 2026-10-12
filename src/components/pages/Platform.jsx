
import PlatformMain from "../mainplatform/PlatformMain";
import PlatformModules from "../mainplatform/PlatformModules";
import PlatformDesign from "../mainplatform/PlatformDesign";
import PlatformClient from "../mainplatform/PlatformClient";
import HomeCTA from "../mainhome/HomeCTA";
import PlatformPreview from "../mainplatform/PlatformPreview";

function Platform() {
  return (
    <>
      <PlatformMain />
      <PlatformPreview />
      <PlatformModules />
      <PlatformDesign />
      <PlatformClient />
      <HomeCTA />
    </>
  );
}

export default Platform;
