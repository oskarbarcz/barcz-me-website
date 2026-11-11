interface HighlightedProps {
  text: {before: string; highlight: string; after: string};
}

/** Renders a translated phrase with one word in brand green, e.g. "Cześć, jestem *Oskar*". */
export default function Highlighted({text}: HighlightedProps) {
  return (
    <>
      {text.before}
      <span className="text-brand-600">{text.highlight}</span>
      {text.after}
    </>
  );
}
