import bottomSvg from "../assets/vectors/footer.svg";
import {Github, Linkedin, Messenger} from "react-bootstrap-icons";
import FooterSocialIcon from "../components/FooterSocialIcon.jsx";

export default function FooterBlock() {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      name: "LinkedIn",
      title: "Skontaktuj się na LinkedIn",
      url: "https://www.linkedin.com/in/oskarbarcz/",
      icon: <Linkedin/>
    },
    {
      name: "Messenger",
      title: "Napisz do mnie na Messengerze",
      url: "https://m.me/oskar.barcz",
      icon: <Messenger/>
    },
    {
      name: "GitHub",
      title: "Zobacz mój profil na GitHub",
      url: "https://github.com/archi-tektur",
      icon: <Github/>
    }
  ];

  return (
    <>
      <img src={bottomSvg} className="w-100 mt-5" alt=""/>
      <div className="bg-dark text-light py-3">
        <div className="container d-flex flex-column flex-sm-row justify-content-between align-items-center">
          <span className="py-3 d-block">© 2017-{currentYear} Oskar Barcz</span>
          <div className="fs-4">
            { socials.map((social, key) => (
              <FooterSocialIcon key={key} {...social} />
            )) }
          </div>
        </div>
      </div>
    </>
  )
}
