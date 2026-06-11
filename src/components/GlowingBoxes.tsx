import type {MouseEvent} from "react";
import GlowingBox from "./GlowingBox.tsx";

import '../styles/GlowingBoxes.css'

interface GlowingBoxesProps {
  texts: string[];
}

export default function GlowingBoxes({texts}: GlowingBoxesProps) {
  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    for (const element of document.querySelectorAll<HTMLElement>('.glowing-box')) {
      const rect = element.getBoundingClientRect(),
        x = event.clientX - rect.left,
        y = event.clientY - rect.top;

      element.style.setProperty('--mouse-x', `${x}px`)
      element.style.setProperty('--mouse-y', `${y}px`)
    }
  }

  return (
    <div onMouseMove={e => onMouseMove(e)} className="my-2 flex flex-wrap glowing-boxes">
      {texts.map((content, i) => (
        <GlowingBox content={content} key={i} />
      ))}
  </div>
  )
}
