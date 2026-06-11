import PropTypes from "prop-types";
import '../styles/GlowingBox.css'

export default function GlowingBox({content}) {

  return (
    <div className="glowing-box m-1 text-xl font-bold text-gray-600">
      <div className="glowing-box__border"></div>
      <div className="glowing-box__content px-2 py-1">
        {content}
      </div>
    </div>
  )
}

GlowingBox.propTypes = {
  content: PropTypes.string.isRequired
}
