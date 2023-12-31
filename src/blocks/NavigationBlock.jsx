import Anchor from "../consts/Anchor.jsx";

export default function NavigationBlock() {
  return (
    <nav className="container navbar sticky-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand fw-bold text-primary" href="#">Oskar Barcz</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href={Anchor().getAnchorUrl(Anchor().root.top)}>
                O mnie
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={Anchor().getAnchorUrl(Anchor().root.technology)}>
                Technologia
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={Anchor().getAnchorUrl(Anchor().root.conferences)}>
                Wystąpienia
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
