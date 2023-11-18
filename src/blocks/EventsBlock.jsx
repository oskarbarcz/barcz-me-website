import {ArrowUpRight, Youtube} from "react-bootstrap-icons";

export default function EventsBlock() {
  return (
    <div className="container my-5 py-5">
      <h2>Poprzednie wystąpienia</h2>

      <form className="mb-4 d-flex align-items-center">
        <label className="pe-3">Filtruj po kategorii:</label>
        <select className="form-select form-select-sm w-25" aria-label="">
          <option selected>Wszystkie</option>
          <option value="1">Technologia</option>
          <option value="2">Programowanie</option>
          <option value="3">Światopogląd</option>
        </select>
      </form>

      <div className="row d-flex align-items-stretch">

        <div className="col">
          <div className="card bg-glassy">
            <div className="p-2 border-bottom">
              <span>Debata</span>
            </div>
            <div className="card-body">
              <h3 className="card-title h5">Sposoby walki z cyberprzestępczością</h3>
              <p className="card-text">Warsaw Enterprise Institute</p>
            </div>
            <div className="p-2 border-top">
              <a href="#" title="Zobacz debatę na platformie Youtube">
                <Youtube className="text-dark fs-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card bg-glassy">
            <div className="p-2 border-bottom">
              Debata
            </div>
            <div className="card-body">
              <h5 className="card-title">Skutki kradzieży tożsamości</h5>
              <p className="card-text">Pożegnanie lata w Świetlicy Wolności <br />Warsaw Enterprise Institute</p>
            </div>
            <div className="p-2 border-top">
              <a href="#">
                <Youtube className="text-dark fs-3" title="Zobacz debatę na platformie Youtube" />
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card bg-glassy">
            <div className="p-2 border-bottom">
              Warsztat
            </div>
            <div className="card-body">
              <h5 className="card-title">Programowanie z użyciem CQRS</h5>
              <p className="card-text">PHPers Summit 2022</p>
            </div>
            <div className="p-2 border-top">
              <a href="#">
                <Youtube className="text-dark fs-3" title="Zobacz debatę na platformie Youtube" />
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card bg-glassy">
            <div className="card-body">
              <a className="text-dark" href="">
                zobacz poprzednie wystąpienia
              </a>
              <ArrowUpRight/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
