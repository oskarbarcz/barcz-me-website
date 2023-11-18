import PropTypes from "prop-types";
import GlowingBox from "./GlowingBox.jsx";

import '../styles/GlowingBoxes.css'

export default function GlowingBoxes({texts}) {
  const onMouseMove = event => {
    for(const element of document.querySelectorAll('.glowing-box')) {
      const rect = element.getBoundingClientRect(),
        x = event.clientX - rect.left,
        y = event.clientY - rect.top;

      element.style.setProperty('--mouse-x', `${x}px`)
      element.style.setProperty('--mouse-y', `${y}px`)
    }
  }

  return (
    <div onMouseMove={e => onMouseMove(e)} className="my-2 d-flex flex-wrap glowing-boxes">
      {texts.map((content, i) => (
        <GlowingBox content={content} key={i} />
      ))}
  </div>
  )
}

GlowingBoxes.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired
}
