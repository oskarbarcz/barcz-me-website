import PropTypes from "prop-types";

export default function ConferenceBox({name, place, isRight}) {
  let classList = "my-2 border border-2 p-2 w-75 rounded rounded-3";
  if (isRight) {
    classList += " ms-auto";
  }

  return (
    <article className={classList}>
      <h3 className="fs-5 fw-bold text-secondary">{name}</h3>
      <span className="text-muted">{place}</span>
    </article>
  )
}

ConferenceBox.propTypes = {
  name: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  isRight: PropTypes.bool.isRequired
}
