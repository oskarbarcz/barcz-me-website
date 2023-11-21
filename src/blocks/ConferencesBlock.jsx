import photo from '../assets/photo_oskar_phpers.jpg'

export default function ConferencesBlock() {
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row gx-5 align-items-center">
          <div className="col-12 col-md-6">
            <h2 className="text-light bg-dark p-1 h6 d-inline-block">Ostatnie wystąpienia</h2>
            <div className="my-2 border border-2 p-2 w-75 rounded rounded-3">
              <h3 className="fs-5 fw-bold text-secondary">Debata: Sposoby walki z cyberprzestępczością</h3>
              <span className="text-muted">Warsaw Enterprise Institute, zdalnie</span>
            </div>
            <div className="my-2 mx-auto border border-2 p-2 w-75 rounded rounded-3">
              <h3 className="fs-5 fw-bold text-secondary">Debata: Wolność w internecie</h3>
              <span className="text-muted">Warsaw Enterprise Institute, Warszawa</span>
            </div>
            <div className="my-2 border border-2 p-2 w-75 rounded rounded-3">
              <h3 className="fs-5 fw-bold text-secondary">Podróż od CRUDów do działania opartego o akcje</h3>
              <span className="text-muted">NoExceptions by Boldare, zdalnie</span>
            </div>
            <div className="my-2 mx-auto border border-2 p-2 w-75 rounded rounded-3">
              <h3 className="fs-5 fw-bold text-secondary">Catching the mutants: Wprowadzenie do testów mutacyjnych</h3>
              <span className="text-muted">PHPers Summit 2022, Poznań</span>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="position-relative">
              <img src={photo} className="me-n5 mb-5 pe-5 w-100 rounded-circle" alt=""/>
              <div className="position-absolute text-end" style={{right: '0', bottom: '15%'}}>
                <span className="text-light p-1 bg-dark d-inline-block">
                  Catching the mutants: introduction to mutation testing
                </span>
                <span className="text-light p-1 bg-dark d-inline-block fs-5">PHPers Summit 2022, Poznań</span>
              </div>
            </div>
            <h2 className="fw-bold display-3 my-4">Wystąpienia</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur cupiditate, earum et perferendis
              praesentium quam similique sint tempore? Adipisci alias blanditiis earum eveniet nam optio perferendis quae
              tenetur! Tempore?
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
