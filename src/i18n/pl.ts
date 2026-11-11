/**
 * Polish texts of the site. This is the source dictionary: its shape defines the `Messages` type,
 * so every other language must provide exactly the same keys.
 *
 * Highlighted words (shown in brand green) are split into `before` / `highlight` / `after` parts,
 * so the markup stays in the components and translators only deal with text.
 */
const pl = {
  meta: {
    // BCP 47 tag, used for <html lang> and for date formatting
    locale: "pl-PL",
  },

  navigation: {
    ariaLabel: "Główna nawigacja",
    mobileAriaLabel: "Menu mobilne",
    drawerAriaLabel: "Menu",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    links: {
      top: "O mnie",
      technology: "Technologia",
      conferences: "Wystąpienia",
      blog: "Blog ↗",
    },
  },

  hero: {
    heading: {before: "Cześć, jestem ", highlight: "Oskar", after: ""},
    lead: "Lider zespołów IT i architekt oprogramowania. Łączę komercyjne innowacje z technologią w służbie społeczeństwu.",
    primaryButton: "Zobacz, co robię",
    blogButton: "Czytaj bloga",
    portraitAlt: "Oskar Barcz podczas wystąpienia, z mikrofonem w dłoni",
    latestTalkLabel: "ostatnio na scenie",
  },

  technology: {
    heading: {before: "Technologia i ", highlight: "narzędzia", after: ""},
    lead: "Zaczynałem od rozwiązań serwerowych i to nadal moja baza. Dziś odpowiadam również za wdrażanie rozwiązań chmurowych, bezpieczeństwo i skalowalność aplikacji internetowych.",
    showDetails: "Pokaż szczegóły",
    hideDetails: "Ukryj szczegóły",
    // A tool can carry details: up to 4 are shown inline (PHP versions), longer lists sit behind a "+N" toggle
    areas: [
      {
        title: "Backend",
        summary: "Na codzień zajmuję się projektowaniem wymagających systemów rozproszonych w PHP i Node.js. Pracuję w środowiskach wymagających skalowalności i odporności na awarie infrastruktury.",
        main: [{name: "PHP", details: ["5.6", "7.x", "8.x"]}, {name: "Symfony", details: ["4.x - 8.x"]}, {name: "Node.js", details: ["22.x", "24.x", "26.x"]}, "NestJS", "MySQL", "PostgreSQL", "Doctrine", "RabbitMQ"],
        more: ["Redis", "Kafka", "MongoDB", "TypeScript", "Serverless", "Prisma ORM", "Behat / Cucumber"],
        badge: "Certyfikowany developer Symfony i oficjalny speaker Symfony",
      },
      {
        title: "Cloud",
        summary: "Odpowiadam za tworzenie i utrzymanie skalowalnej infrastruktury w branżach takich jak retail oraz lotnictwo. Wdrażam oraz usprawniam procesy CI/CD i automatyzuję powtarzalne zadania.",
        main: [
          {
            name: "AWS",
            details: ["ECS", "EC2", "IAM", "CloudTrail", "KMS", "S3", "Lambda", "SQS", "SES", "EBS", "EventBridge", "CloudWatch"],
          },
          {name: "CloudFlare", details: ["Tunnels", "Zero-trust", "DNS", "Workers", "Pages", "R2", "KV"]},
          "Kubernetes",
          "Terraform / OpenTofu",
          "GitHub Actions"
        ],
        more: ["Azure", "Helm", "Docker"],
        badge: "",
      },
      {
        title: "Bezpieczeństwo",
        summary: "Pracuję nad systemami i procesami zarządzania tożsamością i dostępami, w modelu zero-trust. Nadzoruję audyty bezpieczeństwa i wdrażam rekomendacje proponowane w swoich zespołach.",
        main: ["IAM", "OAuth", "AWS IAM", "Zero Trust", "OIDC w CI/CD"],
        more: ["CloudTrail", "KMS", "VPN", "renovate", "HashiCorp Vault", "Azure Key Vault"],
        badge: "",
      },
      {
        title: "UI / UX",
        summary: "Tworzę interfejsy w React i TypeScript, w tym biblioteki komponentów. Dbam o dostępność, wydajność oraz spójność wizualną.",
        main: ["React", "React Router", "TypeScript", "Tailwind CSS", "Angular", "Playwright"],
        more: ["Storybook", "Vitest", "Radix UI", "Vite"],
        badge: "",
      },
    ],
  },

  conferences: {
    heading: "Wystąpienia",
    listHeading: "Ostatnie wystąpienia i publikacje",
    loading: "Ładowanie wydarzeń…",
    error: "Nie udało się załadować wydarzeń.",
    moreOnBlog: "Więcej wydarzeń znajdziesz na moim blogu →",
    description: "Regularnie uczestniczę jako prelegent w konferencjach, gdzie moje wystąpienia skupiają się na tematyce technologii serwerowych i tematach powiązanych. Podczas debat kładę nacisk na projektowanie aplikacji bezpiecznych przy wsparciu nowych technologii, przedstawiam, analizuję i konsultuję rozwiązania z zakresu cyberbezpieczeństwa.",
    featuredTalk: "Catching the mutants: introduction to mutation testing",
    featuredEvent: "PHPers Summit 2022, Poznań",
  },
};

export default pl;
