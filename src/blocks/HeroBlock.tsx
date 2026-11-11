import HeroPortrait from "../components/HeroPortrait.tsx";
import LatestTalk from "../components/LatestTalk.tsx";
import ArrowIcon from "../components/ArrowIcon.tsx";
import Anchor from "../consts/Anchor.ts";
import useI18n from "../i18n/context.ts";
import Highlighted from "../components/Highlighted.tsx";

export default function HeroBlock() {
  const {t} = useI18n();

  return (
    <section className="relative overflow-hidden border-b border-gray-200 pt-12 md:pt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-x-12 gap-y-4 px-4 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-7 md:pb-16">
          <h1 className="text-4xl font-bold text-gray-900 lg:text-[2.5rem] lg:whitespace-nowrap xl:text-5xl">
            <Highlighted text={t.hero.heading}/>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-700 sm:text-xl">
            {t.hero.lead}
          </p>
          {/* Same buttons as the blog's hero */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-md bg-brand-600 px-4 py-2 font-mono text-sm font-medium text-white shadow transition-colors duration-150 hover:bg-brand-700 focus:ring-2 focus:ring-brand-500 focus:outline-none"
              href={Anchor().getAnchorUrl(Anchor().root.achievements)}
            >
              {t.hero.primaryButton}
              <ArrowIcon className="h-4 w-4" aria-hidden/>
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 font-mono text-sm font-medium text-gray-700 transition-colors duration-150 hover:border-brand-300 hover:text-brand-600"
              href="https://blog.barcz.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.blogButton}
              <ArrowIcon className="h-4 w-4 -rotate-45" aria-hidden/>
            </a>
          </div>
          <LatestTalk/>
        </div>
        {/* The figure stands on the section's bottom edge */}
        <div className="self-end md:col-span-5">
          <HeroPortrait/>
        </div>
      </div>
    </section>
  );
}
