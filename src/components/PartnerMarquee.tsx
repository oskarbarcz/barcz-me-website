import useI18n from "../i18n/context.ts";

// Every partner logo in the folder, keyed by file name: "ibris" → URL
const LOGOS = Object.fromEntries(
  Object.entries(import.meta.glob<string>('../assets/logos/partners/*.png', {eager: true, import: 'default'}))
    .map(([path, url]) => [path.split('/').pop()!.replace('.png', ''), url]),
);

// Square or very small-print marks need more height to read as the same size as the wordmarks
const TALL = new Set(["fundacja-venator", "mlode-kresy", "kadeci-rp"]);

interface Partner {
  id: string;
  name: string;
  href: string;
}

/**
 * Partner logos drifting slowly to the left in an endless loop. It pauses under the pointer or
 * keyboard focus, and with reduced motion the logos simply wrap. Each logo opens the partner's
 * site in a new tab. Logos always show in their own colours.
 */
export default function PartnerMarquee({partners}: {partners: Partner[]}) {
  const {t} = useI18n();

  // The second copy only makes the loop seamless, so assistive tech and the keyboard skip it
  const logos = (copy: boolean) => (
    <ul className="partner-marquee-set" aria-hidden={copy || undefined}>
      {partners.map(partner => (
        <li key={partner.id} className="shrink-0">
          <a
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={copy ? -1 : undefined}
            title={partner.name}
            aria-label={partner.name + t.achievements.partnerLink}
            className="flex h-8 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          >
            <img
              src={LOGOS[partner.id]}
              alt=""
              className={`${TALL.has(partner.id) ? "h-7" : "h-5"} w-auto`}
            />
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="partner-marquee mt-3">
      <div className="partner-marquee-track">
        {logos(false)}
        {logos(true)}
      </div>
    </div>
  );
}
