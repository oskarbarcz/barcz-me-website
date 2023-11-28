import photo from '../assets/photos/photo_oskar_phpers.jpg'
import Anchor from "../consts/Anchor.jsx";
import ConferenceBox from "../components/ConferenceBox.jsx";

export default function ConferencesBlock() {

  const lastConferences = [
    {
      name: "Debata: Sposoby walki z cyberprzestępczością",
      place: "Warsaw Enterprise Institute, zdalnie"
    },
    {
      name: "Debata: Wolność w internecie",
      place: "Warsaw Enterprise Institute, Warszawa"
    },
    {
      name: "Podróż od CRUDów do działania opartego o akcje",
      place: "NoExceptions by Boldare, zdalnie"
    },
    {
      name: "Catching the mutants: Wprowadzenie do testów mutacyjnych",
      place: "PHPers Summit 2022, Poznań"
    }
  ];

  return (
    <>
      <div className="container my-lg-5 py-lg-5" id={Anchor().root.conferences}>
        <div className="row gx-5 align-items-center">
          <div className="col-12 col-lg-6 order-2 order-lg-1 pe-lg-3">
            <section className="pe-lg-5 me-lg-5">
              <h2 className="text-light bg-dark mt-4 mt-lg-0 p-1 h6 d-inline-block">Ostatnie wystąpienia i publikacje</h2>
              { lastConferences.map((conference, key) => (
                <ConferenceBox key={key} {...conference} isRight={key % 2 === 1} />
              )) }
            </section>
          </div>
          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <section>
              <h2 className="fw-bold display-3 my-4">Wystąpienia</h2>
              <article className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur cupiditate, earum et perferendis
                praesentium quam similique sint tempore? Adipisci alias blanditiis earum eveniet nam optio perferendis quae
                tenetur! Tempore?
              </article>
              <article className="position-relative">
                <img src={photo} className="me-n5 mt-5 pt-5 pe-5 w-100 rounded-circle" alt=""/>
                <div className="position-absolute text-end" style={{right: '0', bottom: '7.5%'}}>
                <span className="text-light p-1 bg-dark d-inline-block">
                  Catching the mutants: introduction to mutation testing
                </span>
                  <span className="text-light p-1 bg-dark d-inline-block fs-5">PHPers Summit 2022, Poznań</span>
                </div>
              </article>
            </section>
            </div>
        </div>
      </div>
    </>
  )
}
