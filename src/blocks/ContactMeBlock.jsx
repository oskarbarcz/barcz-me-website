import {Github, Instagram, Linkedin, Messenger} from "react-bootstrap-icons";
import contactSvg from "../assets/undraw_illustrations/undraw_contact.svg";

export default function ContactMeBlock() {
  return (
    <div className="container my-5 py-5">
      <div className="row align-items-center">
        <div className="col-6">
          <div>
            <h2 className="fw-bold display-3 my-4">Kontakt</h2>
            <p>Skontaktuj się ze mną za pomocą jednej z poniższych platform:</p>
            <div className="d-flex">
              <a className="border me-2 border-2 p-3 rounded rounded-3 text-secondary text-decoration-none contact-link" href="">
                <Linkedin className="d-block display-3 mx-auto text-center"></Linkedin>
                <span className="d-block mt-4">LinkedIn</span>
              </a>
              <a className="border me-2 border-2 p-3 rounded rounded-3 text-secondary text-decoration-none contact-link" href="">
                <Messenger className="d-block display-3 mx-auto"></Messenger>
                <span className="d-block mt-4">Messenger</span>
              </a>
              <a className="border me-2 border-2 p-3 rounded rounded-3 text-secondary text-decoration-none contact-link" href="">
                <Instagram className="d-block display-3 mx-auto"></Instagram>
                <span className="d-block mt-4">Instagram</span>
              </a>
              <a className="border me-2 border-2 p-3 rounded rounded-3 text-secondary text-decoration-none contact-link" href="">
                <Github className="d-block display-3 mx-auto"></Github>
                <span className="d-block mt-4">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div>
            <img className="d-block my-5 mx-auto w-50" src={contactSvg} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}
