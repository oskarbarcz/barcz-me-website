import {useRef, type PointerEvent} from "react";
import Anchor from "../consts/Anchor.ts";
import useI18n from "../i18n/context.ts";
import Highlighted from "../components/Highlighted.tsx";
import InfraDrawing from "../components/InfraDrawing.tsx";
import TechTool from "../components/TechTool.tsx";
import {toolName} from "../types/tool.ts";
import '../styles/TechStack.css';

export default function TechnologyBlock() {
  const {t} = useI18n();
  const grid = useRef<HTMLDivElement>(null);

  // Moves the green glow along each column's top line, following the pointer
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    for (const column of grid.current?.querySelectorAll<HTMLElement>('.tech-column') ?? []) {
      column.style.setProperty('--glow-x', `${event.clientX - column.getBoundingClientRect().left}px`);
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-gray-200 py-16 md:py-20" id={Anchor().root.technology}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Same 4-column grid as the areas below: text over columns 1–2, drawing centred over columns 3–4 */}
        <div className="grid items-center gap-x-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 md:text-[2rem]"><Highlighted text={t.technology.heading}/></h2>
            <p className="mt-3 max-w-2xl text-lg font-light text-gray-700">{t.technology.lead}</p>
          </div>
          {/* Only where there is room beside the text; elsewhere it would just push the areas down */}
          <div className="relative hidden w-60 justify-self-center lg:col-span-2 lg:block xl:w-64">
            {/* The hero's grainy green glow, static here, centred on the drawing */}
            <div aria-hidden className="blob-grain pointer-events-none absolute -inset-x-14 -inset-y-10 bg-[radial-gradient(closest-side,var(--color-brand-300),var(--color-brand-500)_55%,transparent_100%)] opacity-35 blur-sm"/>
            <InfraDrawing className="relative block h-auto w-full"/>
          </div>
        </div>

        <div
          ref={grid}
          onPointerMove={onPointerMove}
          className="tech-grid mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {t.technology.areas.map(area => (
            <div key={area.title} className="tech-column relative border-t border-gray-200 pt-5 pb-6">
              <h3 className="text-lg font-bold text-gray-900">{area.title}</h3>
              <p className="mt-1.5 font-light text-gray-700">{area.summary}</p>
              <p className="mt-3 font-mono text-[13px] leading-relaxed text-gray-500">
                {area.main.map((tool, i) => (
                  <span key={toolName(tool)}>{i > 0 && ", "}<TechTool tool={tool} main/></span>
                ))}
                {area.more.map(tool => <span key={toolName(tool)}>, <TechTool tool={tool}/></span>)}
              </p>
              {area.badge && (
                <p className="mt-3 inline-flex items-start gap-1.5 font-mono text-xs font-medium text-brand-600">
                  <svg className="mt-px h-3.5 w-3.5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z" clipRule="evenodd"/>
                  </svg>
                  {area.badge}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
