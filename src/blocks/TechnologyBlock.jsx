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
    <div className="container mx-auto mt-12 px-3 py-12 md:my-12" id={Anchor().root.technology}>
      <div className="grid grid-cols-1 items-center gap-x-12 md:grid-cols-2">
        <div>
          <div className="md:mx-4 md:px-12">
            <img src={programmingSvg} className="mx-auto mb-2 block w-full p-12" alt=""/>
          </div>
          <h2 className="my-6 text-4xl font-bold md:text-5xl">Technologia</h2>
          <p className="text-xl font-light">
            Już od najmłodszych lat fascynowałem się tym jak działa internet. Eksperymentując z różnymi językami i
            narzędziami wybrałem backend jako swoje główne środowisko pracy. Dziś, z pełnym profesjonalizmem, zajmuję
            się tworzeniem <strong className="font-bold">responsywnych, skalowalnych aplikacji serwerowych</strong> oraz
            ich interfejsów skrojonych pod potrzebę klientów.
          </p>
        </div>
        <div>
          <div className="flex flex-wrap" id="glossy-cards">
            {sections.map((section, i) =>
              <div className="mt-6" key={i}>
                <h3 className="inline bg-dark p-1 text-base font-medium text-light">{section.title}</h3>
                <GlowingBoxes texts={section.technologies} key={i} />
              </div>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}
