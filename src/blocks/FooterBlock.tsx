const socials = [
  {name: "github", url: "https://github.com/oskarbarcz"},
  {name: "linkedin", url: "https://www.linkedin.com/in/oskarbarcz/"},
  {name: "instagram", url: "https://instagram.com/oskar.barcz"},
  {name: "blog ↗", url: "https://blog.barcz.me/"},
];

export default function FooterBlock() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-8 font-mono sm:px-6 md:flex-row lg:px-8">
        <span className="text-sm text-gray-600">© 1999–{currentYear} Oskar Barcz</span>
        <ul className="grid grid-cols-2 justify-items-center gap-x-6 gap-y-3 text-xs sm:flex sm:flex-wrap sm:gap-x-4">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                className="inline-flex items-center gap-1 text-gray-500 transition-colors hover:text-brand-600"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-400" aria-hidden>[</span>
                {social.name}
                <span className="text-gray-400" aria-hidden>]</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
