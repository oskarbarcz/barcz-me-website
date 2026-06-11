import PropTypes from "prop-types";

export default function FooterSocialIcon({name, title, url, icon }) {
  return (
    <a className="mx-2 inline-flex items-center text-light contact-link" title={title} href={url}>
      {icon}
      <span className="sr-only">{name}</span>
    </a>
  )
}

FooterSocialIcon.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired
}
