import bottomSvg from "../assets/vectors/footer.svg";
import {Github, Instagram, Linkedin, Messenger} from "react-bootstrap-icons";
import FooterSocialIcon from "../components/FooterSocialIcon.jsx";
import {useEffect} from "react";

export default function FooterBlock() {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      name: "GitHub",
      title: "Zobacz mój profil na GitHub",
      url: "https://github.com/oskarbarcz",
      icon: <Github/>
    },
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
      title: "Obserwuj mnie na Instagramie",
      url: "https://instagram.com/oskar.barcz",
      icon: <Instagram/>
    }
  ];

  useEffect(() => {
    const updateSvgWidth = () => {
      const svg = document.querySelector("#footer-svg");
      svg.setAttribute("width", String(window.innerWidth));
    };

    window.addEventListener('resize', updateSvgWidth)
  });

  return (
    <>
      <img src={bottomSvg} className="mt-12" alt="" id="footer-svg" />
      <div className="bg-dark py-4 text-light">
        <div className="container mx-auto flex flex-col items-center justify-between px-3 sm:flex-row">
          <span className="block py-4">© 2017-{currentYear} Oskar Barcz</span>
          <div className="flex text-2xl">
            { socials.map((social, key) => (
              <FooterSocialIcon key={key} {...social} />
            )) }
          </div>
        </div>
      </div>
    </>
  )
}
