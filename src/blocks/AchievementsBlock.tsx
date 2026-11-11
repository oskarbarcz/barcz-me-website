import {useEffect, useRef, useState} from "react";
import {ChevronDown, ChevronUp} from "react-bootstrap-icons";
import Anchor from "../consts/Anchor.ts";
import useI18n from "../i18n/context.ts";
import Highlighted from "../components/Highlighted.tsx";
import ArrowIcon from "../components/ArrowIcon.tsx";
import mlodziWyborcyLogo from "../assets/logos/mlodzi-wyborcy.svg";
import generacjaInnowacjaLogo from "../assets/logos/generacja-innowacja.svg";
import '../styles/Achievements.css';

const LOGOS: Record<string, {src: string, className: string}> = {
  "mlodzi-wyborcy": {src: mlodziWyborcyLogo, className: "h-10"},
  "generacja-innowacja": {src: generacjaInnowacjaLogo, className: "h-8"},
};

// From md up the slides sit in a fixed-height frame that snaps one slide at a time
const FRAME_MEDIA = "(min-width: 768px)";

export default function AchievementsBlock() {
  const {t} = useI18n();
  const items = t.achievements.items;
  const frame = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // The frame is as tall as the tallest slide, so no slide ever scrolls inside itself
  useEffect(() => {
    const element = frame.current;
    if (!element) {
      return;
    }

    const media = window.matchMedia(FRAME_MEDIA);
    const contents = [...element.querySelectorAll<HTMLElement>('.achievement-content')];
    const resize = () => {
      if (!media.matches) {
        element.style.removeProperty('--slide-h');
        return;
      }
      const tallest = Math.max(...contents.map(content => content.offsetHeight));
      element.style.setProperty('--slide-h', `${tallest}px`);
    };

    const observer = new ResizeObserver(resize);
    contents.forEach(content => observer.observe(content));
    media.addEventListener('change', resize);
    resize();
    return () => {
      observer.disconnect();
      media.removeEventListener('change', resize);
    };
  }, []);

  const onScroll = () => {
    const element = frame.current;
    if (element && element.clientHeight > 0) {
      setActive(Math.round(element.scrollTop / element.clientHeight));
    }
  };

  const goTo = (index: number) => {
    const element = frame.current;
    if (!element) {
      return;
    }
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    element.scrollTo({top: index * element.clientHeight, behavior: reduceMotion ? 'auto' : 'smooth'});
  };

  return (
    <section className="border-b border-gray-200 py-16 md:py-20" id={Anchor().root.achievements}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 md:text-[2rem]"><Highlighted text={t.achievements.heading}/></h2>
        <p className="mt-3 max-w-2xl text-lg font-light text-gray-700">{t.achievements.lead}</p>

        <div
          className="mt-10 md:mt-12 md:flex md:gap-8"
          role="region"
          aria-roledescription="karuzela"
          aria-label={t.achievements.carouselLabel}
        >
          <div
            ref={frame}
            onScroll={onScroll}
            tabIndex={0}
            className="achievements-frame min-w-0 flex-1 border-t border-gray-200 md:h-[calc(var(--slide-h)+2px)] md:snap-y md:snap-mandatory md:overflow-y-auto md:border-b"
          >
            {items.map((item, index) => {
              const logo = LOGOS[item.id];
              return (
                <article
                  key={item.id}
                  className="border-gray-200 not-first:border-t md:min-h-(--slide-h) md:snap-start md:snap-always md:not-first:border-t-0"
                  role="group"
                  aria-roledescription="slajd"
                  aria-label={`${index + 1} / ${items.length}: ${item.name}`}
                >
                  <div className="achievement-content grid gap-x-12 gap-y-8 py-8 md:grid-cols-12 md:py-10">
                    <div className="md:col-span-7">
                      {logo && <img src={logo.src} alt={item.logoAlt} className={`${logo.className} w-auto`}/>}
                      <h3 className="mt-6 text-2xl font-bold text-balance text-gray-900 md:text-[1.75rem] md:leading-tight">{item.title}</h3>
                      <p className="mt-2 font-mono text-[13px] font-medium text-brand-600">{item.role}</p>
                      {item.body.map(paragraph => (
                        <p key={paragraph} className="mt-4 max-w-[65ch] font-light text-gray-700">{paragraph}</p>
                      ))}
                      <div className="mt-6 flex flex-wrap gap-3">
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
                      </div>
                    </div>

                    <div className="md:col-span-5">
                      <dl className="grid grid-cols-2 gap-x-6 gap-y-5">
                        {item.stats.map(stat => (
                          <div key={stat.label} className="flex flex-col-reverse justify-end border-t border-gray-200 pt-3">
                            <dt className="mt-0.5 text-sm font-light text-gray-600">{stat.label}</dt>
                            <dd className="text-2xl font-bold text-gray-900 tabular-nums">{stat.value}</dd>
                          </div>
                        ))}
                      </dl>
                      <p className="mt-6 font-mono text-[13px] leading-relaxed text-gray-500">
                        <span className="font-medium text-gray-900">{item.listLabel}:</span> {item.list.join(", ")}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Up/down controls and one dot per slide; on phones the slides simply stack */}
          <div className="hidden flex-col items-center justify-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              aria-label={t.achievements.previous}
              className="achievements-control"
            >
              <ChevronUp className="h-4 w-4" aria-hidden/>
            </button>
            <div className="flex flex-col items-center gap-2 py-1">
              {items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={t.achievements.goTo + item.name}
                  aria-current={index === active ? "true" : undefined}
                  title={item.name}
                  className="group flex w-6 justify-center py-1"
                >
                  <span className={`block w-1.5 rounded-full transition-all duration-300 ${index === active ? "h-6 bg-brand-600" : "h-1.5 bg-gray-300 group-hover:bg-gray-400"}`}/>
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
              <ChevronDown className="h-4 w-4" aria-hidden/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
