import photo from '../assets/photo_oskar.jpg'

export default function HeroBlock() {

  return (
      <section className="py-5 bg-noise">
        <div className="container my-5 py-5 d-flex align-items-center">
          <div>
            <h1 className="display-1 fw-bold my-5">
            Cześć, jestem <span className="text-primary text-glow">Oskar</span>
          </h1>
            <article className="fs-3">
            <span className="bg-dark text-light py-1 px-2">
              zawodowo tworzę oprogramowanie, występuję na konferencjach <br /> i działam w społeczności
            </span>
            </article>
          </div>
          <div>
            <img className="photo m-5 ps-5" src={photo} alt="" width="300"/>
          </div>
        </div>
      </section>
  )
}
