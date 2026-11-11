import HeroBlock from "../blocks/HeroBlock.tsx";
import FooterBlock from "../blocks/FooterBlock.tsx";
import AchievementsBlock from "../blocks/AchievementsBlock.tsx";
import TechnologyBlock from "../blocks/TechnologyBlock.tsx";
import ConferencesBlock from "../blocks/ConferencesBlock.tsx";
import NavigationBlock from "../blocks/NavigationBlock.tsx";

export default function RootRoute() {
  return (
    <>
      <NavigationBlock/>
      <HeroBlock/>
      <AchievementsBlock/>
      <TechnologyBlock/>
      <ConferencesBlock/>
      <FooterBlock/>
    </>
  )
}
