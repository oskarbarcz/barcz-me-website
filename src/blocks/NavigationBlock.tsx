import {useEffect, useState} from "react";
import {List, X} from "react-bootstrap-icons";
import Anchor from "../consts/Anchor.ts";

const BLOG_URL = "https://blog.barcz.me/";

export default function NavigationBlock() {
  const [open, setOpen] = useState(false);

  const links = [
    {label: "O mnie", href: Anchor().getAnchorUrl(Anchor().root.top)},
    {label: "Technologia", href: Anchor().getAnchorUrl(Anchor().root.technology)},
    {label: "Wystąpienia", href: Anchor().getAnchorUrl(Anchor().root.conferences)},
  ];

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
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const linkClass = "block border-b border-gray-100 px-3 py-3 font-mono text-sm transition-colors duration-100 " +
    "hover:text-brand-700 md:border-0 md:p-0";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/40 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8" aria-label="Główna nawigacja">
        <div className="flex flex-wrap items-center justify-between">
          <a className="font-mono text-lg font-bold text-brand-700" href="#">barcz.me</a>
          <button
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-200 md:hidden"
            aria-controls="site-menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">{open ? "Zamknij menu" : "Otwórz menu"}</span>
            {open ? <X size={24} aria-hidden/> : <List size={24} aria-hidden/>}
          </button>
          <div className={`${open ? "block" : "hidden"} w-full md:block md:w-auto`} id="site-menu">
            <ul className="mt-2 flex flex-col md:mt-0 md:flex-row md:items-center md:gap-8">
              {links.map((link) => (
                <li key={link.label}>
                  <a className={`${linkClass} text-gray-700`} href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a className={`${linkClass} font-bold text-brand-700`} href={BLOG_URL} target="_blank" rel="noopener noreferrer">
                  Blog <span aria-hidden>↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
