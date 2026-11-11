import {Fragment, useState} from "react";
import useI18n from "../i18n/context.ts";
import {toolName, type Tool} from "../types/tool.ts";

// Up to this many details are always shown inline; longer lists hide behind a "+N" toggle
const INLINE_LIMIT = 4;

interface TechToolProps {
  tool: Tool;
  main?: boolean;
}

export default function TechTool({tool, main = false}: TechToolProps) {
  const {t} = useI18n();
  const [open, setOpen] = useState(false);

  const name = toolName(tool);
  const details = typeof tool === "string" ? [] : tool.details;
  // Each name stays on one line, so "Terraform / OpenTofu" never breaks
  const label = <span className={main ? "font-medium whitespace-nowrap text-gray-900" : "whitespace-nowrap"}>{name}</span>;

  if (details.length === 0) {
    return label;
  }

  // The space before "|" can't break, so a wrapped line never starts with a separator
  const list = details.map((detail, i) => (
    <Fragment key={detail}>
      {i > 0 && <>{" "}<span className="text-gray-300" aria-hidden>|</span>{" "}</>}
      <span className="whitespace-nowrap">{detail}</span>
    </Fragment>
  ));

  if (details.length <= INLINE_LIMIT) {
    return <>{label}<span className="ml-1.5 text-[11.5px] text-gray-500">{list}</span></>;
  }

  return (
    <>
      <span className="whitespace-nowrap">
        {label}
        <button
          type="button"
          className="ml-1.5 cursor-pointer rounded border border-gray-200 px-1 align-[1px] text-[11px] text-brand-600 transition-colors hover:border-brand-500 aria-expanded:border-brand-500"
          aria-expanded={open}
          aria-label={`${open ? t.technology.hideDetails : t.technology.showDetails}: ${name}`}
          onClick={() => setOpen(!open)}
        >
          +{details.length}
        </button>
      </span>
      {open && <span className="text-gray-700"> <span className="text-gray-400">(</span>{list}<span className="text-gray-400">)</span></span>}
    </>
  );
}
