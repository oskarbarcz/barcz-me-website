import ProfilePictureBlob from "../components/ProfilePictureBlob.jsx";

export default function HeroBlock() {

  return (
      <section className="py-3 py-lg-5">
        <div className="container my-lg-5 py-lg-5 d-flex align-items-center">
          <div className="row align-items-center">
            <div className="col-12 col-md-8 order-2 order-md-1">
              <div>
                <h1 className="display-1 fw-bold my-5">
                  Cześć, jestem <span className="text-primary text-glow">Oskar</span>
                </h1>
                <article className="lead fs-3">
                  <span className="bg-dark text-light py-1 px-1">
                    zawodowo tworzę oprogramowanie, występuję na konferencjach i działam w społeczności
                  </span>
                </article>
              </div>
            </div>
            <div className="col-12 col-md-4 order-1 order-lg-2 text-center">
              <ProfilePictureBlob/>
            </div>
          </div>
        </div>
      </section>
  )
}
