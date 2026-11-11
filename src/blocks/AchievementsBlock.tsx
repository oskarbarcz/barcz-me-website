import {Fragment, useEffect, useRef, useState, type CSSProperties} from "react";
import {ChevronLeft, ChevronRight} from "react-bootstrap-icons";
import Anchor from "../consts/Anchor.ts";
import useI18n from "../i18n/context.ts";
import Highlighted from "../components/Highlighted.tsx";
import ArrowIcon from "../components/ArrowIcon.tsx";
import PartnerMarquee from "../components/PartnerMarquee.tsx";
import mlodziWyborcyLogo from "../assets/logos/mlodzi-wyborcy.svg";
import generacjaInnowacjaLogo from "../assets/logos/generacja-innowacja.svg";
import myPoliticsLogo from "../assets/logos/mypolitics.svg";
import symfonyDayLogo from "../assets/logos/symfonyday-montreal.png";
import TalkGlobe from "../components/TalkGlobe.tsx";
import premieraPhoto from "../assets/photos/achievements/premiera-raportu.jpg";
import belwederPhoto from "../assets/photos/achievements/belweder.jpg";
import warsztatyPhoto from "../assets/photos/achievements/fundacja-warsztaty.jpg";
import zespolPhoto from "../assets/photos/achievements/fundacja-zespol.jpg";
import prezentacjaPhoto from "../assets/photos/achievements/fundacja-prezentacja.jpg";
import symfonyDayScenePhoto from "../assets/photos/achievements/symfonyday-montreal-scena.jpg";
import symfonyDayTalkPhoto from "../assets/photos/achievements/symfonyday-montreal-prelekcja.jpg";
import talentyAulaPhoto from "../assets/photos/achievements/talenty-szkola-aula.jpg";
import talentyPracowniaPhoto from "../assets/photos/achievements/talenty-szkola-pracownia.jpg";
import talentyPraktykiPhoto from "../assets/photos/achievements/talenty-praktyki.jpg";
import gameJamTeamPhoto from "../assets/photos/achievements/gamejam-zespol.jpg";
import gameJamKitchenPhoto from "../assets/photos/achievements/gamejam-kuchnia.jpg";
import gameJamPixelArtPhoto from "../assets/photos/achievements/gamejam-pixel-art.jpg";
import '../styles/Achievements.css';

// Młodzi Wyborcy is a myPolitics product, so it carries the parent brand on its left
const LOGOS: Record<string, {src: string, alt: string, className: string}[]> = {
  "mlodzi-wyborcy": [
    {src: myPoliticsLogo, alt: "myPolitics", className: "h-7"},
    {src: mlodziWyborcyLogo, alt: "Młodzi Wyborcy '25", className: "h-9"},
  ],
  "symfonyday-montreal": [{src: symfonyDayLogo, alt: "SymfonyDay Montreal 2026", className: "h-10"}],
  "generacja-innowacja": [{src: generacjaInnowacjaLogo, alt: "Fundacja Generacja Innowacja", className: "h-8"}],
};

const PHOTOS: Record<string, string> = {
  premiera: premieraPhoto,
  belweder: belwederPhoto,
  "fundacja-warsztaty": warsztatyPhoto,
  "fundacja-zespol": zespolPhoto,
  "fundacja-prezentacja": prezentacjaPhoto,
  "symfonyday-scena": symfonyDayScenePhoto,
  "symfonyday-prelekcja": symfonyDayTalkPhoto,
  "talenty-szkola-aula": talentyAulaPhoto,
  "talenty-szkola-pracownia": talentyPracowniaPhoto,
  "talenty-praktyki": talentyPraktykiPhoto,
  "gamejam-zespol": gameJamTeamPhoto,
  "gamejam-kuchnia": gameJamKitchenPhoto,
  "gamejam-pixel-art": gameJamPixelArtPhoto,
};

/**
 * Where the section pins and scrolling down slides the achievements sideways.
 * Must match the media query in Achievements.css; elsewhere the bentos simply stack.
 */
const PIN_MEDIA = "(min-width: 1280px) and (min-height: 1050px) and (prefers-reduced-motion: no-preference)";

export default function AchievementsBlock() {
  const {t} = useI18n();
  const items = t.achievements.items;
  const track = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const slides = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const media = window.matchMedia(PIN_MEDIA);
    const update = () => setPinned(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  /*
   * While pinned, the scroll through the track is cut into one equal stretch per achievement.
   * The bento on stage only changes when the scroll crosses into the next stretch, so each one
   * holds for a good while (also before the page moves on), and the row never rests half-way.
   */
  useEffect(() => {
    if (!pinned) {
      return;
    }

    const onScroll = () => {
      if (!track.current || !stage.current) {
        return;
      }
      const distance = track.current.offsetHeight - stage.current.offsetHeight;
      const travelled = stage.current.getBoundingClientRect().top - track.current.getBoundingClientRect().top;
      const stretch = distance / items.length;
      const index = stretch > 0 ? Math.floor(Math.max(0, travelled) / stretch) : 0;
      setActive(Math.min(items.length - 1, index));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pinned, items.length]);

  // Slides the row so the active bento sits flush with the left edge; CSS animates the move
  useEffect(() => {
    const row = slides.current;
    if (!pinned || !row) {
      return;
    }

    const place = () => {
      const first = row.firstElementChild as HTMLElement | null;
      const current = row.children[active] as HTMLElement | undefined;
      const shift = first && current ? current.offsetLeft - first.offsetLeft : 0;
      row.style.transform = `translate3d(${-shift}px, 0, 0)`;
    };

    place();
    window.addEventListener('resize', place);
    return () => {
      window.removeEventListener('resize', place);
      row.style.removeProperty('transform');
    };
  }, [pinned, active]);

  // Scrolls the page to the middle of the given achievement's stretch
  const goTo = (index: number) => {
    if (!track.current || !stage.current) {
      return;
    }
    const stretch = (track.current.offsetHeight - stage.current.offsetHeight) / items.length;
    const stageTop = parseFloat(getComputedStyle(stage.current).top) || 0;
    const trackTop = track.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({top: trackTop - stageTop + stretch * (index + 0.5), behavior: 'smooth'});
  };

  return (
    <section className="border-b border-gray-200 py-16 md:py-20 xl:py-28" id={Anchor().root.achievements}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={track}
          className="achievements-track"
          style={{'--count': items.length} as CSSProperties}
          role="region"
          aria-roledescription="karuzela"
          aria-label={t.achievements.carouselLabel}
        >
          <div ref={stage} className="achievements-stage">
            {/* Inside the stage, so the heading stays in view while the section is pinned */}
            <div className="achievements-header text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-[2rem]"><Highlighted text={t.achievements.heading}/></h2>
              <p className="mx-auto mt-3 max-w-2xl text-lg font-light text-gray-700">{t.achievements.lead}</p>
            </div>

            <div className="achievements-viewport mt-10 md:mt-12">
              <div ref={slides} className="achievements-slides">
                {items.map((item, index) => {
                  const logos = LOGOS[item.id] ?? [];
                  const isActive = !pinned || index === active;
                  const map = "map" in item ? item.map : null;
                  const points = "points" in item ? item.points : null;
                  return (
                    <article
                      key={item.id}
                      className={`achievements-slide bento${map ? " bento--map" : points ? " bento--points" : item.photos.length > 0 ? " bento--photos" : ""}`}
                      data-active={isActive}
                      inert={!isActive}
                      role="group"
                      aria-roledescription="slajd"
                      aria-label={`${index + 1} / ${items.length}: ${item.name}`}
                    >
                      <div className="bento-text">
                        {logos.length > 0 && (
                          <div className="mb-6 flex items-center gap-4">
                            {logos.map((logo, logoIndex) => (
                              <Fragment key={logo.src}>
                                {logoIndex > 0 && <span aria-hidden className="h-8 w-px bg-gray-200"/>}
                                <img src={logo.src} alt={logo.alt} className={`${logo.className} w-auto`}/>
                              </Fragment>
                            ))}
                          </div>
                        )}
                        {item.title && <h3 className="bento-title text-2xl font-bold text-balance text-gray-900 md:text-[1.75rem] md:leading-tight">{item.title}</h3>}
                        {item.body.map(paragraph => (
                          <p key={paragraph} className="mt-4 max-w-[65ch] font-light text-gray-700">{paragraph}</p>
                        ))}
                        {points && (
                          <div className={item.title ? "mt-6" : undefined}>
                            <h3 className="text-xl font-bold text-balance text-gray-900">{points[0].title}</h3>
                            <p className="mt-1 max-w-[65ch] font-light text-gray-700">{points[0].body}</p>
                          </div>
                        )}
                        {item.links.length > 0 && <div className="mt-6 flex flex-wrap gap-3">
                          {item.links.map(link => (
                            <a
                              key={link.href}
                              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 font-mono text-sm font-medium text-gray-700 transition-colors duration-150 hover:border-brand-300 hover:text-brand-600"
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link.label}
                              <ArrowIcon className="h-4 w-4 -rotate-45" aria-hidden/>
                            </a>
                          ))}
                        </div>}
                      </div>

                      {map && (
                        <div className="bento-map">
                          <TalkGlobe
                            coordinates={map.coordinates}
                            label={map.label}
                            photos={item.photos.map(photo => ({src: PHOTOS[photo.id], alt: photo.alt, caption: photo.caption}))}
                          />
                        </div>
                      )}

                      {points?.map((point, pointIndex) => (
                        <Fragment key={point.title}>
                          {/* The first point's text lives in the title cell (above), so only the others get their own */}
                          {pointIndex > 0 && (
                            <div className={`bento-point-text-${pointIndex + 1}`}>
                              <h3 className="text-xl font-bold text-balance text-gray-900">{point.title}</h3>
                              <p className="mt-1 max-w-[65ch] font-light text-gray-700">{point.body}</p>
                            </div>
                          )}
                          <div className={`bento-point-photos bento-point-photos-${pointIndex + 1} grid grid-cols-3 gap-3`}>
                            {point.gallery.map(photo => (
                              <img key={photo.id} src={PHOTOS[photo.id]} alt={photo.alt} loading="lazy" className="h-full min-h-0 w-full rounded-md bg-gray-100 object-cover"/>
                            ))}
                          </div>
                        </Fragment>
                      ))}

                      {!map && item.photos.map((photo, photoIndex) => (
                        <figure key={photo.id} className={`bento-photo-${photoIndex + 1} relative overflow-hidden rounded-md bg-gray-100`}>
                          <img src={PHOTOS[photo.id]} alt={photo.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover"/>
                          <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-4 pt-10 pb-3 font-mono text-xs font-medium text-white">
                            {photo.caption}
                          </figcaption>
                        </figure>
                      ))}

                      {item.gallery.length > 0 && (
                        <div className="bento-gallery grid grid-cols-3 gap-3">
                          {item.gallery.map(photo => (
                            <img key={photo.id} src={PHOTOS[photo.id]} alt={photo.alt} loading="lazy" className="h-full min-h-0 w-full rounded-md bg-gray-100 object-cover"/>
                          ))}
                        </div>
                      )}

                      {item.stats.length > 0 && <dl className="bento-stats grid gap-x-6 gap-y-5">
                        {item.stats.map(stat => (
                          <div key={stat.label} className={`flex flex-col-reverse justify-end border-t border-gray-200 pt-3${"full" in stat && stat.full ? " col-span-full" : ""}`}>
                            <dt className="mt-0.5 text-sm font-light text-gray-600">{stat.label}</dt>
                            <dd className="bento-stat-value text-2xl font-bold text-balance text-gray-900 tabular-nums">
                              {"prefix" in stat && <span className="mr-[0.3em] text-[0.6em] font-light text-gray-500">{stat.prefix}</span>}
                              {stat.value}
                            </dd>
                          </div>
                        ))}
                      </dl>}

                      {item.partners.length > 0 && (
                        <div className="bento-list border-t border-gray-200 pt-3">
                          <p className="font-mono text-[13px] font-medium text-gray-900">{item.listLabel}</p>
                          <PartnerMarquee partners={item.partners}/>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>

            </div>

            {/* Below the bentos: one dash per achievement and left/right controls, only while the section is pinned */}
            {pinned && (
              <div className="achievements-controls flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => goTo(active - 1)}
                  disabled={active === 0}
                  aria-label={t.achievements.previous}
                  className="achievements-control"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden/>
                </button>
                <div className="flex items-center gap-2 px-1">
                  {items.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => goTo(index)}
                      aria-label={t.achievements.goTo + item.name}
                      aria-current={index === active ? "true" : undefined}
                      title={item.name}
                      className="group flex h-6 items-center px-1"
                    >
                      <span className={`block h-1.5 rounded-full transition-all duration-300 ${index === active ? "w-6 bg-brand-600" : "w-1.5 bg-gray-300 group-hover:bg-gray-400"}`}/>
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => goTo(active + 1)}
                  disabled={active === items.length - 1}
                  aria-label={t.achievements.next}
                  className="achievements-control"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden/>
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
