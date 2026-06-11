import {useState} from "react";
import {Facebook, XLg} from "react-bootstrap-icons";

export default function Offcanvas () {
  const [show, setShow] = useState(true);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 h-auto bg-white shadow-2xl" tabIndex={-1} id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
      <div className="max-w-7xl mx-auto px-3">
        <div className="flex items-center justify-between py-6">
          <h2 className="text-3xl font-bold" id="offcanvasBottomLabel">Zapraszam na PHPers Wrocław!</h2>
          <button type="button" className="text-2xl text-gray-600 hover:text-gray-900" aria-label="Close" onClick={() => setShow(false)}>
            <XLg/>
          </button>
        </div>
        <div className="grid grid-cols-1 pb-2 md:grid-cols-12">
          <div className="md:col-span-8">
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
          <div className="md:col-span-4">
            <div>
              <div className="rounded bg-gray-100 p-4">
                <h3 className="text-xl font-bold">PHPers Wrocław #19</h3>
                <hr className="my-2 border-gray-300"/>
                <strong className="block">Środa, 21.02.2024</strong>
                <span className="block">start o godz. <strong>18:00</strong></span>
                <hr className="my-2 border-gray-300"/>
                <strong className="block">WędrówkiPub</strong>
                <span className="block">ul. Podwale 37/38</span>
                <span className="block">50-040 Wrocław</span>
                <div>
                  <a className="mt-3 inline-flex items-center gap-1 rounded border border-gray-500 px-3 py-2 text-gray-600 hover:bg-gray-100" href="https://www.facebook.com/events/270148902742091">Zobacz wydarzenie na <Facebook/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
