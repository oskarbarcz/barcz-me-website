import HeroBlock from "../blocks/HeroBlock.jsx";
import FooterBlock from "../blocks/FooterBlock.jsx";
import EventsBlock from "../blocks/EventsBlock.jsx";
import ConferencesBlock from "../blocks/ConferencesBlock.jsx";

export default function ConferencesRoute() {
  return (
    <>
      <ConferencesBlock/>
      <EventsBlock/>
      <FooterBlock/>
    </>
  )
}
