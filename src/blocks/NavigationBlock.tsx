import {useEffect, useState} from "react";
import type {ComponentType, SVGProps} from "react";
import {CpuFill, JournalText, MicFill, PersonFill, TrophyFill} from "react-bootstrap-icons";
import Anchor from "../consts/Anchor.ts";
import useI18n from "../i18n/context.ts";

const BLOG_URL = "https://blog.barcz.me/";

const SECTIONS = [Anchor().root.achievements, Anchor().root.technology, Anchor().root.conferences];

/**
 * Mirrors the navigation of blog.barcz.me class for class, so both sites share
 * the same height, widths and spacing. Keep the two in sync.
 */
export default function NavigationBlock() {
  const {t} = useI18n();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(Anchor().root.top);

  const links: {id: string, label: string, href: string, icon: ComponentType<SVGProps<SVGSVGElement>>, external?: boolean}[] = [
    {id: Anchor().root.top, label: t.navigation.links.top, href: Anchor().getAnchorUrl(Anchor().root.top), icon: PersonFill},
    {id: Anchor().root.achievements, label: t.navigation.links.achievements, href: Anchor().getAnchorUrl(Anchor().root.achievements), icon: TrophyFill},
    {id: Anchor().root.technology, label: t.navigation.links.technology, href: Anchor().getAnchorUrl(Anchor().root.technology), icon: CpuFill},
    {id: Anchor().root.conferences, label: t.navigation.links.conferences, href: Anchor().getAnchorUrl(Anchor().root.conferences), icon: MicFill},
    {id: "blog", label: t.navigation.links.blog, href: BLOG_URL, icon: JournalText, external: true},
  ];

  const linkProps = (link: typeof links[number]) => ({
    href: link.href,
    "aria-current": link.id === active ? "location" as const : undefined,
    ...(link.external
      ? {target: "_blank", rel: "noopener noreferrer"}
      : {onClick: () => setOpen(false)}),
  });

  useEffect(() => {
    if (!open) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Highlight the section currently in view, the way the blog highlights the current page.
  useEffect(() => {
    const updateActive = () => {
      const threshold = window.innerHeight / 3;
      const current = SECTIONS.filter((id) => {
        const element = document.getElementById(id);
        return element !== null && element.getBoundingClientRect().top <= threshold;
      }).pop();
      setActive(current ?? Anchor().root.top);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, {passive: true});
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  return (
    <>
      <div id="site-navigation" className="sticky top-0 z-50 border-b border-gray-200 bg-white/40 backdrop-blur-md">
        <nav className="mx-auto max-w-7xl bg-transparent px-4 py-2.5 sm:px-6 lg:px-8" aria-label={t.navigation.ariaLabel}>
          <div className="mx-auto flex flex-wrap items-center justify-between">
            <a className="flex items-center font-mono text-lg font-bold text-brand-600" href="#">barcz.me</a>
            <div className="flex items-center gap-3 md:order-3 md:ml-4 lg:ml-6">
              {/* Reserved for the dark mode toggle (makeover step 7); keeps the blog's 40px button slot. */}
              <span className="block h-10 w-10" aria-hidden/>
              <button
                type="button"
                className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden"
                aria-controls="site-menu"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">{open ? t.navigation.closeMenu : t.navigation.openMenu}</span>
                <svg className="h-6 w-6" aria-hidden fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
                </svg>
              </button>
            </div>
            <div className="hidden w-full md:order-2 md:ml-auto md:flex md:w-auto md:items-center md:gap-6">
              <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                {links.map((link) => (
                  <li key={link.id}>
                    <a
                      className={
                        "block border-b border-gray-100 py-2 pr-4 pl-3 font-mono text-sm text-gray-700 duration-100 " +
                        "hover:bg-gray-50 md:border-0 md:p-0 md:hover:bg-transparent " +
                        (link.id === active ? "font-bold text-brand-600!" : "hover:text-brand-500!")
                      }
                      {...linkProps(link)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile drawer, same markup as the blog's. Kept outside the blurred bar: backdrop-filter would clip a fixed child. */}
      <div className={`fixed inset-0 z-[60] md:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open} inert={!open}>
        <div
          className={`absolute inset-0 bg-gray-900/20 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t.navigation.drawerAriaLabel}
          className={`absolute top-0 right-0 h-full w-[80vw] max-w-xs overflow-y-auto bg-white shadow-xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <nav className="px-2 py-2" aria-label={t.navigation.mobileAriaLabel}>
            <ul className="divide-y divide-gray-200">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.id}>
                    <a
                      className={
                        "flex items-center gap-3 rounded-lg px-4 py-4 font-mono text-base " +
                        (link.id === active
                          ? "bg-brand-50 font-bold text-brand-600"
                          : "font-medium text-gray-900 transition-colors hover:bg-gray-50")
                      }
                      {...linkProps(link)}
                    >
                      <Icon className="h-5 w-5 text-brand-600" aria-hidden/>
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
