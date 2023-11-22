import footerLayerSvg from '../assets/vectors/footer.svg';

export default function FooterBlock() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <img src={footerLayerSvg} className="w-100" alt=""/>
      <div className="bg-dark text-light">
        <div className="container">
          <span className="py-3 d-block">© 2017-{currentYear} Oskar Barcz</span>
        </div>
      </div>
    </>
  )
}
