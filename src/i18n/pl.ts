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
      achievements: "Osiągnięcia",
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

  achievements: {
    heading: {before: "Wybrane ", highlight: "osiągnięcia", after: ""},
    lead: "Poza pracą komercyjną kieruję technologią w Fundacji Generacja Innowacja. Nasze projekty docierają do milionów osób w Polsce.",
    carouselLabel: "Osiągnięcia",
    previous: "Poprzednie osiągnięcie",
    next: "Następne osiągnięcie",
    goTo: "Przejdź do: ",
    // `id` picks the logo in the component; everything else is text
    items: [
      {
        id: "mlodzi-wyborcy",
        name: "Młodzi Wyborcy '25",
        logoAlt: "Młodzi Wyborcy '25",
        title: "Największe w historii Polski badanie poglądów młodych wyborców",
        role: "Head of Engineering",
        body: [
          "Kierowałem zespołem technologicznym badania. W miesiącu przed wyborami prezydenckimi 2025 zebraliśmy na platformie myPolitics ponad 300 000 kwestionariuszy, z których wyłoniono próbę 100 000 osób w wieku 18–29 lat z zachowaniem proporcji demograficznych.",
          "Projekt wsparło 12 organizacji partnerskich, a całą warstwę technologiczną, od zbierania odpowiedzi po publikację danych, dostarczył mój zespół. Raport zaprezentowaliśmy m.in. w Belwederze.",
        ],
        stats: [
          {value: "300 000+", label: "wypełnionych kwestionariuszy"},
          {value: "100 000", label: "osób w próbie badawczej"},
          {value: "77", label: "pytań w 5 kategoriach"},
          {value: "200 000+", label: "kontaktów z raportem"},
        ],
        listLabel: "Partnerzy",
        list: ["Ad Personam", "Fundacja IBRiS", "Fundacja Venator", "Stowarzyszenie Pravda", "ORB", "PRZEkanał", "politologia.org", "Stowarzyszenie Racja", "Młode Kresy", "Kadeci RP", "Young Think", "android.com.pl"],
        links: [
          {label: "Raport i dane", href: "https://data.mypolitics.pl/mlodzi-wyborcy"},
          {label: "O projekcie", href: "https://gi.org.pl/projekty/mlodzi-wyborcy-25"},
        ],
      },
      {
        id: "generacja-innowacja",
        name: "Generacja Innowacja",
        logoAlt: "Fundacja Generacja Innowacja",
        title: "Platforma edukacji obywatelskiej z ponad 4 milionami użytkowników",
        role: "Wiceprezes zarządu i Head of Engineering",
        body: [
          "Współzarządzam Fundacją Generacja Innowacja i odpowiadam za technologię jej projektów. Najważniejszy z nich to myPolitics: platforma testów poglądów politycznych, z której przed każdymi wyborami korzystają setki tysięcy osób.",
          "Zespoły fundacji tworzą wolontariusze i stażyści. W ramach jej programów rozwinęło się ponad 170 osób.",
        ],
        stats: [
          {value: "4 mln+", label: "użytkowników myPolitics"},
          {value: "750 000+", label: "osób w Quizie Wyborczym 2023"},
          {value: "500 000+", label: "osób w Barometrze Prezydenckim 2025"},
          {value: "170+", label: "osób rozwiniętych w fundacji"},
        ],
        listLabel: "Projekty",
        list: ["myPolitics", "Quiz Wyborczy 2023", "Warszawski Radar Wyborczy 2024", "EuroWyborczy 2024", "Barometr Prezydencki 2025", "Młodzi Wyborcy '25", "Echo Generacji"],
        links: [
          {label: "gi.org.pl", href: "https://gi.org.pl/"},
          {label: "mypolitics.pl", href: "https://mypolitics.pl/"},
        ],
      },
    ],
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
