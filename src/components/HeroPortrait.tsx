import cutoutAvif from "../assets/photos/oskar_cutout.avif";
import cutoutPng from "../assets/photos/oskar_cutout.png";

const BLOB = "blob-grain absolute transform-gpu animate-[blobMorph_20s_ease-in-out_infinite] opacity-[0.4] blur-sm " +
  "will-change-[border-radius,transform]";

/**
 * Cut-out portrait standing in the blog's grainy green glow.
 * The glow is the blog hero's own three-blob composition, re-centred behind the head.
 */
export default function HeroPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
      <div aria-hidden className="pointer-events-none absolute -inset-x-16 -top-10 bottom-1/4">
        <div className={`${BLOB} top-0 right-0 h-96 w-md bg-[radial-gradient(circle_at_30%_30%,var(--color-brand-300),var(--color-brand-500)_60%,transparent_70%)]`}/>
        <div className={`${BLOB} -top-6 right-16 h-72 w-72 bg-[radial-gradient(circle_at_70%_40%,var(--color-brand-200),var(--color-brand-400)_55%,transparent_75%)] [animation-delay:6s]`}/>
        <div className={`${BLOB} top-20 right-4 h-64 w-64 bg-[radial-gradient(circle_at_50%_50%,var(--color-brand-400),var(--color-brand-600)_50%,transparent_80%)] [animation-delay:12s]`}/>
      </div>
      <picture>
        <source srcSet={cutoutAvif} type="image/avif"/>
        <img
          className="relative block w-full [mask-image:linear-gradient(to_bottom,#000_86%,transparent)]"
          src={cutoutPng}
          alt="Oskar Barcz podczas wystąpienia, z mikrofonem w dłoni"
          width={900}
          height={920}
        />
      </picture>
    </div>
  );
}
