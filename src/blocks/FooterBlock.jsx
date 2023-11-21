import footerLayerSvg from '../assets/footer.svg';

export default function FooterBlock() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <img src={footerLayerSvg} alt=""/>
      <div className="bg-dark text-light">
        <div className="container">
          <span className="py-3 d-block">© 2017-{currentYear} Oskar Barcz</span>
        </div>
      </div>
    </>
  )
}
