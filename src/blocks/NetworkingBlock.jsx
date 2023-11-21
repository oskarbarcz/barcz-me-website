import {Github, Globe, Linkedin, Messenger} from "react-bootstrap-icons";
import ventureCafePhoto from '../assets/venture_cafe.jpg';
import piwpafPhoto from '../assets/piwpaf.jpg';

export default function NetworkingBlock() {
  return (
    <div className="container my-5 py-5">
      <h2 className="display-3 fw-bold mb-5">Zostańmy w kontakcie</h2>
      <div className="row align-items-center text-center py-5">
        <div className="col-12 col-md-5 d-flex">
          <a className="card m-2 w-100 border-2 text-decoration-none contact-link" href="#">
            <Linkedin className="display-4 m-auto mt-4 mb-3"/>
            <span className="pb-2">LinkedIn</span>
          </a>
          <a className="card m-2 w-100 border-2 text-decoration-none contact-link" href="#">
            <Messenger className="display-4 m-auto mt-4 mb-3"/>
            <span className="pb-2">Messenger</span>
          </a>
          <a className="card m-2 w-100 border-2 text-decoration-none contact-link" href="#">
            <Github className="display-4 m-auto mt-4 mb-3"/>
            <span className="pb-2">GitHub</span>
          </a>
        </div>
        <div className="col-12 col-md-2">
          or let&apos;s meet <br />
          in real life
        </div>
        <div className="col-12 col-md-5">
          <div className="card mb-3 w-100">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={ventureCafePhoto} className="img-fluid rounded-start h-100 object-fit-cover" alt="..." />
              </div>
              <div className="col-md-8 text-start">
                <div className="card-body">
                  <h5 className="card-title">Venture Cafe Warsaw</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <small className="card-text">
                    <a href="https://venturecafewarsaw.org/" className="icon-link icon-link-hover text-muted link-underline-dark">
                      <Globe/>
                      <span>Venture Cafe website</span>
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 w-100">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={piwpafPhoto} className="img-fluid rounded-start h-100 object-fit-cover" alt="..." />
              </div>
              <div className="col-md-8 text-start">
                <div className="card-body">
                  <h5 className="card-title">Networking and drinks</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <small className="card-text">
                    <a href="https://www.meetup.com/pl-PL/warsawinternational/" className="icon-link icon-link-hover text-muted link-underline-dark">
                      <Globe/>
                      <span>Meetup event details</span>
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
