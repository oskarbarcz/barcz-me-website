import HeroBlock from "../blocks/HeroBlock.jsx";
import FooterBlock from "../blocks/FooterBlock.jsx";
import TechnologyBlock from "../blocks/TechnologyBlock.jsx";
import ConferencesBlock from "../blocks/ConferencesBlock.jsx";
import NavigationBlock from "../blocks/NavigationBlock.jsx";
import Offcanvas from "../components/Offcanvas.jsx";

export default function RootRoute() {

  const targetDateTime = new Date(2024, 1, 21, 20, 0);
  const now = new Date();
  const showEventBanner = now < targetDateTime;

  return (
    <>
      <NavigationBlock/>
      <HeroBlock/>
      <TechnologyBlock/>
      <ConferencesBlock/>
      <FooterBlock/>
      {showEventBanner && <Offcanvas/>}
    </>
  )
}
