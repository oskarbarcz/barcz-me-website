import HeroBlock from "../blocks/HeroBlock.jsx";
import FooterBlock from "../blocks/FooterBlock.jsx";
import TechnologyBlock from "../blocks/TechnologyBlock.jsx";
import ConferencesBlock from "../blocks/ConferencesBlock.jsx";
import ContactMeBlock from "../blocks/ContactMeBlock.jsx";
import NavigationBlock from "../blocks/NavigationBlock.jsx";

export default function RootRoute() {
  return (
    <>
      <NavigationBlock/>
      <HeroBlock/>
      <TechnologyBlock/>
      <ConferencesBlock/>
      <ContactMeBlock/>
      <FooterBlock/>
    </>
  )
}
