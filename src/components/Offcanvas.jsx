import {Facebook} from "react-bootstrap-icons";

export default function Offcanvas () {
  return (
    <>
      <div className="offcanvas offcanvas-bottom show border-0 h-auto shadow-lg" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between py-4">
            <h2 className="h3 fw-bold" id="offcanvasBottomLabel">Zapraszam na PHPers Wrocław!</h2>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="row pb-2">
            <div className="col-12 col-md-8">
              <div>
                <p>
                  Cześć, już w tą środę będę mieć okazję wystąpić na <strong>PHPers Wrocław</strong>!
                  <br/>
                  <br/>
                  Opowiem Wam o tym jak implementować zasady 12-factor w Waszych projektach oraz o tym jakie skutki
                  będzie powodować ich brak. Wdrażasz, tworzysz, zarządzasz serwisami, których utrzymanie jest
                  problematyczne?
                  <br/>
                  <br/>
                  <strong>Przyjdź i porozmawiajmy!</strong>
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div>
                <div className="p-3 rounded bg-body-tertiary">
                  <h3 className="fw-bold h5">PHPers Wrocław #19</h3>
                  <hr/>
                  <strong className="d-block">Środa, 21.02.2024</strong>
                  <span className="d-block">start o godz. <strong>18:00</strong></span>
                  <hr/>
                  <strong className="d-block">WędrówkiPub</strong>
                  <span className="d-block">ul. Podwale 37/38</span>
                  <span className="d-block">50-040 Wrocław</span>
                  <div>
                    <a className="btn btn-outline-secondary mt-3 text-baseline" href="https://www.facebook.com/events/270148902742091">Zobacz wydarzenie na <Facebook/></a>
                  </div>
                </div>
              </div>
            </div>
         </div>
        </div>
      </div>
    </>
  );
}
