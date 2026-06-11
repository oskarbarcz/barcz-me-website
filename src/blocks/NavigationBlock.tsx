import {useState} from "react";
import {List} from "react-bootstrap-icons";
import Anchor from "../consts/Anchor.ts";

export default function NavigationBlock() {
  const [open, setOpen] = useState(false);

  const links = [
    {label: "O mnie", href: Anchor().getAnchorUrl(Anchor().root.top)},
    {label: "Technologia", href: Anchor().getAnchorUrl(Anchor().root.technology)},
    {label: "Wystąpienia", href: Anchor().getAnchorUrl(Anchor().root.conferences)},
  ];

  return (
    <nav className="sticky top-0 z-50 bg-light">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-3 py-2">
        <a className="text-xl font-bold text-brand" href="#">Oskar Barcz</a>
        <button
          type="button"
          className="rounded border border-gray-300 p-2 text-gray-700 lg:hidden"
          aria-controls="navbarNav"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <List size={24}/>
        </button>
        <div className={`${open ? "block" : "hidden"} w-full lg:block lg:w-auto`} id="navbarNav">
          <ul className="mt-3 flex flex-col lg:mt-0 lg:flex-row">
            {links.map((link, key) => (
              <li key={key}>
                <a className="block px-3 py-2 text-gray-700 hover:text-brand" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
