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
        <div className="col-6">
          <h2 className="fw-bold display-3">Technologia</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur cupiditate, earum et perferendis
            praesentium quam similique sint tempore? Adipisci alias blanditiis earum eveniet nam optio perferendis quae
            tenetur! Tempore?
          </p>
        </div>
        <div className="col-6">
          <div className="d-flex flex-wrap" id="glossy-cards">
            {stack.map((technologies, i) =>
              <div key={i} className="my-2 d-flex flex-wrap">
                {technologies.map((technology, j) => (
                  <div key={j} className="fs-4 fw-bold text-secondary rounded m-1 p-2 border border-2">{technology}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
