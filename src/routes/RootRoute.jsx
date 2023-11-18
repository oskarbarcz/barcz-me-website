import HeroBlock from "../blocks/HeroBlock.jsx";
import FooterBlock from "../blocks/FooterBlock.jsx";
import TechnologyBlock from "../blocks/TechnologyBlock.jsx";

export default function RootRoute() {
  return (
    <>
      <HeroBlock/>
      <TechnologyBlock/>
      <FooterBlock/>
    </>
  )
}
