import photo from '../assets/photos/photo_oskar_phpers.jpg'
import Anchor from "../consts/Anchor.jsx";
import ConferenceBox from "../components/ConferenceBox.jsx";

export default function ConferencesBlock() {

  const lastConferences = [
    {
      name: "Debata: Sposoby walki z cyberprzestępczością",
      place: "Warsaw Enterprise Institute, zdalnie"
    },
    {
      name: "Debata: Wolność w internecie",
      place: "Warsaw Enterprise Institute, Warszawa"
    },
    {
      name: "Podróż od CRUDów do działania opartego o akcje",
      place: "NoExceptions by Boldare, zdalnie"
    },
    {
      name: "Catching the mutants: Wprowadzenie do testów mutacyjnych",
      place: "PHPers Summit 2022, Poznań"
    },
    {
      name: "Era post-quantum w kontekście bezpieczeństwa aplikacji webowych",
      place: "PHPers Silesia Meetup 2022, Katowice"
    },
    {
      name: "Projektowanie modularnych systemów: CQS, CQRS, Event Sourcing",
      place: "PHPers Summit 2021, Poznań"
    },
  ];

  return (
    <>
      <div className="container mx-auto px-3 lg:my-12 lg:py-12" id={Anchor().root.conferences}>
        <div className="grid grid-cols-1 items-center gap-x-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 lg:pr-4">
            <section className="lg:mr-12 lg:pr-12">
              <h2 className="mt-6 inline-block bg-dark p-1 text-base font-medium text-light lg:mt-0">Ostatnie wystąpienia i publikacje</h2>
              { lastConferences.map((conference, key) => (
                <ConferenceBox key={key} {...conference} isRight={key % 2 === 1} />
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
