import photo from '../assets/photos/photo_oskar_phpers.jpg'
import Anchor from "../consts/Anchor.jsx";
import ConferenceBox from "../components/ConferenceBox.jsx";
import useEvents from "../hooks/useEvents.js";

const MAX_EVENTS = 6;

export default function ConferencesBlock() {

  const {events, status} = useEvents(MAX_EVENTS);

  return (
    <>
      <div className="container mx-auto px-3 lg:my-12 lg:py-12" id={Anchor().root.conferences}>
        <div className="grid grid-cols-1 items-center gap-x-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 lg:pr-4">
            <section className="lg:mr-12 lg:pr-12">
              <h2 className="mt-6 inline-block bg-dark p-1 text-base font-medium text-light lg:mt-0">Ostatnie wystąpienia i publikacje</h2>
              { status === "loading" && (
                <p className="mt-4 text-gray-500">Ładowanie wydarzeń…</p>
              ) }
              { status === "error" && (
                <p className="mt-4 text-gray-500">Nie udało się załadować wydarzeń.</p>
              ) }
              { status === "ready" && events.map((event, key) => (
                <ConferenceBox key={event.slug} name={event.title} place={event.city} isRight={key % 2 === 1} />
              )) }
            </section>
          </div>
          <div className="order-1 lg:order-2">
            <section>
              <h2 className="my-6 text-4xl font-bold md:text-5xl">Wystąpienia</h2>
              <article className="text-xl font-light">
                Regularnie uczestniczę jako prelegent w konferencjach, gdzie moje wystąpienia skupiają się na tematyce
                technologii serwerowych i tematach powiązanych. Podczas debat kładę nacisk na projektowanie aplikacji
                bezpiecznych przy wsparciu nowych technologii, przedstawiam, analizuję i konsultuję rozwiązania z
                zakresu cyberbezpieczeństwa.
              </article>
              <article className="relative">
                <img src={photo} className="-mr-12 mt-12 w-full rounded-full pt-12 lg:pr-12" alt=""/>
                <div className="py-12 lg:py-2"></div>
                <div className="absolute text-right" style={{right: '0', bottom: '7.5%'}}>
                <span className="inline-block bg-dark p-1 text-light">
                  Catching the mutants: introduction to mutation testing
                </span>
                  <span className="inline-block bg-dark p-1 text-xl text-light">PHPers Summit 2022, Poznań</span>
                </div>
              </article>
            </section>
            </div>
        </div>
      </div>
    </>
  )
}
