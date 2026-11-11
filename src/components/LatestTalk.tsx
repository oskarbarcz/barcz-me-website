import {useMemo} from "react";
import useEvents from "../hooks/useEvents.ts";
import ArrowIcon from "./ArrowIcon.tsx";
import useI18n from "../i18n/context.ts";

const STAGE_ROLES = new Set(["speaker", "panelist"]);
const EVENTS_URL = "https://blog.barcz.me/events";

/** Most recent event where Oskar was on stage, from the blog's events feed. Renders nothing until it loads. */
export default function LatestTalk() {
  const {t} = useI18n();
  const {events, status} = useEvents();

  const latest = useMemo(() => events.find((event) => STAGE_ROLES.has(event.role)), [events]);

  if (status !== "ready" || !latest) {
    return null;
  }

  const when = new Date(latest.date).toLocaleDateString(t.meta.locale, {month: "long", year: "numeric"});

  return (
    <a className="group mt-10 block max-w-xl font-mono" href={EVENTS_URL} target="_blank" rel="noopener noreferrer">
      <span className="block text-xs text-gray-500">
        <span className="text-brand-600" aria-hidden>&gt;&nbsp;</span>
        {t.hero.latestTalkLabel} · {latest.city.split(",")[0]}, {when}
      </span>
      <span className="mt-1 block text-sm font-medium text-gray-900 transition-colors group-hover:text-brand-600">
        {latest.title.trim()}
        <ArrowIcon className="ml-2 inline-block h-3 w-3 -rotate-45 align-baseline text-brand-600" aria-hidden/>
      </span>
    </a>
  );
}
