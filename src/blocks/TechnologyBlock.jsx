import GlowingBox from "../components/GlowingBox.jsx";
import GlowingBoxes from "../components/GlowingBoxes.jsx";

export default function TechnologyBlock() {

  const backendTechnologies = [
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
  ];

  const frontendTechnologies = [
    'HTML / CSS / JS',
    'TypeScript',
    'React',
    'Redux',
    'Remix',
    'Next.js',
    'Jest',
    'Cypress',
    'Progressive web apps',
    'Analytics'
  ];

  const devopsTechnologies = [
    'Kubernetes',
    'Helm',
    'Terraform',
    'AWS / GCP / Azure',
    'Docker',
    'Linux',
    'Git',
  ];

  const stack = [backendTechnologies, frontendTechnologies, devopsTechnologies];

  return (
    <div className="container py-5 my-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <h2 className="fw-bold display-3">Technologia</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur cupiditate, earum et perferendis
            praesentium quam similique sint tempore? Adipisci alias blanditiis earum eveniet nam optio perferendis quae
            tenetur! Tempore?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur cupiditate, earum et perferendis
            praesentium quam similique sint tempore? Adipisci alias blanditiis earum eveniet nam optio perferendis quae
            tenetur! Tempore?
          </p>
        </div>
        <div className="col-12 col-md-6">
          <div className="d-flex flex-wrap" id="glossy-cards">
            {stack.map((technologies, i) =>
              <GlowingBoxes texts={technologies} key={i} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
