import ProfilePictureBlob from "../components/ProfilePictureBlob.tsx";

export default function HeroBlock() {

  return (
      <section className="py-4 lg:py-12">
        <div className="max-w-7xl mx-auto flex items-center px-3 lg:my-12 lg:py-12">
          <div className="grid grid-cols-1 items-center md:grid-cols-12">
            <div className="order-2 md:order-1 md:col-span-8">
              <div>
                <h1 className="my-12 text-6xl font-bold lg:text-7xl">
                  Cześć, jestem <span className="text-brand text-glow">Oskar</span>
                </h1>
                <article className="text-3xl font-light">
                  <span className="bg-dark px-1 py-1 text-light">
                    zawodowo tworzę oprogramowanie, występuję na konferencjach i działam w społeczności
                  </span>
                </article>
              </div>
            </div>
            <div className="order-1 text-center md:col-span-4 lg:order-2">
              <ProfilePictureBlob/>
            </div>
          </div>
        </div>
      </section>
  )
}
