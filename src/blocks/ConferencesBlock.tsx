import photo from '../assets/photos/photo_oskar_phpers.jpg'
import Anchor from "../consts/Anchor.ts";
import ConferenceBox from "../components/ConferenceBox.tsx";
import useEvents from "../hooks/useEvents.ts";
import useI18n from "../i18n/context.ts";

const MAX_EVENTS = 6;

export default function ConferencesBlock() {
  const {t} = useI18n();
  const {events, status} = useEvents(MAX_EVENTS);

  return (
    <>
      <div className="max-w-7xl mx-auto px-3 lg:my-12 lg:py-12" id={Anchor().root.conferences}>
        <div className="grid grid-cols-1 items-center gap-x-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 lg:pr-4">
            <section className="lg:mr-12 lg:pr-12">
              <h2 className="mt-6 inline-block bg-dark p-1 text-base font-medium text-light lg:mt-0">{t.conferences.listHeading}</h2>
              { status === "loading" && (
                <p className="mt-4 text-gray-500">{t.conferences.loading}</p>
              ) }
              { status === "error" && (
                <p className="mt-4 text-gray-500">{t.conferences.error}</p>
              ) }
              { status === "ready" && events.map((event, key) => (
                <ConferenceBox key={event.slug} name={event.title} place={event.city} isRight={key % 2 === 1} />
              )) }
              { status === "ready" && (
                <a className="mt-4 inline-block font-medium text-brand hover:underline" href="https://blog.barcz.me/events/" target="_blank" rel="noopener noreferrer">
                  {t.conferences.moreOnBlog}
                </a>
              ) }
            </section>
          </div>
          <div className="order-1 lg:order-2">
            <section>
              <h2 className="my-6 text-4xl font-bold md:text-5xl">{t.conferences.heading}</h2>
              <article className="text-xl font-light">
                {t.conferences.description}
              </article>
              <article className="relative">
                <img src={photo} className="-mr-12 mt-12 w-full rounded-full pt-12 lg:pr-12" alt=""/>
                <div className="py-12 lg:py-2"></div>
                <div className="absolute text-right" style={{right: '0', bottom: '7.5%'}}>
                <span className="inline-block bg-dark p-1 text-light">
                  {t.conferences.featuredTalk}
                </span>
                  <span className="inline-block bg-dark p-1 text-xl text-light">{t.conferences.featuredEvent}</span>
                </div>
              </article>
            </section>
            </div>
        </div>
      </div>
    </>
  )
}
