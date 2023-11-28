import GlowingBoxes from "../components/GlowingBoxes.jsx";
import programmingSvg from "../assets/undraw_illustrations/undraw_programming.svg"
import Anchor from "../consts/Anchor.jsx";

export default function TechnologyBlock() {

  const backendStack = {
    title: 'Back-end stack',
    technologies: [
    'PHP',
    'Symfony',
    'Doctrine',
    'PHPUnit',
    'Behat',
    'Golang',
    'MySQL',
    'MongoDB',
    'Redis',
    'RabbitMQ',
    'Microservices',
    'OpenAPI',
    'OAuth'
  ]
};

  const frontendStack = {
    title: 'Front-end stack',
    technologies: [
      'HTML / CSS / JS',
      'TypeScript',
      'React',
      'Redux',
      'Remix',
      'Next.js',
      'Jest',
      'Cypress',
      'Progressive web apps',
      'Web analytics'
    ]
  }

  const devopsStack = {
    title: 'DevOps stack',
    technologies: [
      'Kubernetes',
      'Helm',
      'Terraform',
      'AWS / GCP / Azure',
      'Docker',
      'Linux',
      'Git',
    ]
  };

  const sections = [backendStack, frontendStack, devopsStack];

  return (
    <div className="container py-5 mt-5 my-md-5" id={Anchor().root.technology}>
      <div className="row gx-5 align-items-center">
        <div className="col-12 col-md-6">
          <div className="mx-md-3 px-md-5">
            <img src={programmingSvg} className="w-100 d-block mx-auto mb-2 p-5" alt=""/>
          </div>
          <h2 className="fw-bold display-3 my-4">Technologia</h2>
          <p className="lead">
            Już od najmłodszych lat fascynowałem się tym jak działa internet. Eksperymentując z różnymi językami i
            narzędziami wybrałem backend jako swoje główne środowisko pracy. Dziś, z pełnym profesjonalizmem, zajmuję
            się tworzeniem <strong className="fw-bold">responsywnych, skalowalnych aplikacji serwerowych</strong> oraz
            ich interfejsów skrojonych pod potrzebę klientów.
          </p>
        </div>
        <div className="col-12 col-md-6">
          <div className="d-flex flex-wrap" id="glossy-cards">
            {sections.map((section, i) =>
              <>
                <h3 className="text-light bg-dark p-1 h6 mb-0 mt-4">{section.title}</h3>
                <GlowingBoxes texts={section.technologies} key={i} />
              </>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}
