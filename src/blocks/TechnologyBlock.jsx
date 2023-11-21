import GlowingBoxes from "../components/GlowingBoxes.jsx";
import programmingSvg from "../assets/undraw_programming.svg"

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
    <div className="container py-5 my-5">
      <div className="row gx-5 align-items-center">
        <div className="col-12 col-md-6">
          <img src={programmingSvg} className="w-100 d-block mx-auto mb-5 p-5" alt=""/>
          <h2 className="fw-bold display-3 my-4">Technologia</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur cupiditate, earum et perferendis
            praesentium quam similique sint tempore? Adipisci alias blanditiis earum eveniet nam optio perferendis quae
            tenetur! Tempore?
          </p>
        </div>
        <div className="col-12 col-md-6">
          <div className="d-flex flex-wrap" id="glossy-cards">
            {sections.map((section, i) =>
              <>
                <h3 className="text-light bg-dark p-1 h6 mb-0 mt-3">{section.title}</h3>
                <GlowingBoxes texts={section.technologies} key={i} />
              </>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}
