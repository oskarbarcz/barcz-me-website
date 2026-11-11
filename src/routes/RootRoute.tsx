import HeroBlock from "../blocks/HeroBlock.tsx";
import FooterBlock from "../blocks/FooterBlock.tsx";
import TechnologyBlock from "../blocks/TechnologyBlock.tsx";
import ConferencesBlock from "../blocks/ConferencesBlock.tsx";
import NavigationBlock from "../blocks/NavigationBlock.tsx";

export default function RootRoute() {
  return (
    <>
      <NavigationBlock/>
      <HeroBlock/>
      <TechnologyBlock/>
      <ConferencesBlock/>
      <FooterBlock/>
    </>
  )
}
