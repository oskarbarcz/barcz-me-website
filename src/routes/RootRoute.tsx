import HeroBlock from "../blocks/HeroBlock.tsx";
import FooterBlock from "../blocks/FooterBlock.tsx";
import TechnologyBlock from "../blocks/TechnologyBlock.tsx";
import ConferencesBlock from "../blocks/ConferencesBlock.tsx";
import NavigationBlock from "../blocks/NavigationBlock.tsx";
import Offcanvas from "../components/Offcanvas.tsx";

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
