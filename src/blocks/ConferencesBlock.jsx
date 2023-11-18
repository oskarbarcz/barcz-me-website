import photo from '../assets/photo_oskar_phpers.jpg'

export default function ConferencesBlock() {
  return (
    <div className="container my-5 py-5">
      <div className="row align-items-center">
        <div className="col-6">
          <img className="photo m-5 pe-5" src={photo} alt="" width="500"/>
        </div>
        <div className="col-6">
          <h2 className="fw-bold display-3">Section title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur cupiditate, earum et perferendis
            praesentium quam similique sint tempore? Adipisci alias blanditiis earum eveniet nam optio perferendis quae
            tenetur! Tempore?
          </p>
        </div>
      </div>
    </div>
  )
}
