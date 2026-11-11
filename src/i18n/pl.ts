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
    heading: {before: "Co robię poza ", highlight: "pracą zawodową", after: "?"},
    lead: "Udzielam się sporo w społecznościach technicznych. Jedną z nich zbudowałem od pierwszego zespołu technicznego, do pozycji największego tech-first NGO w Polsce. Projekty, które realizujemy, docierają do milionów osób w Polsce.",
    carouselLabel: "Osiągnięcia",
    previous: "Poprzednie osiągnięcie",
    next: "Następne osiągnięcie",
    goTo: "Przejdź do: ",
    partnerLink: " (otwiera się w nowej karcie)",
    // `id` picks the logo in the component; everything else is text
    items: [
      {
        id: "mlodzi-wyborcy",
        name: "Młodzi Wyborcy '25",
        title: "Współtworzyłem największe badanie społeczne w historii Polski",
        body: [
          "Kierowałem zespołem, który stworzył zaplecze techniczne badania. Zebrałem zespół techniczny, który pod moim leadershipem stworzył platformę do zbierania i przetwarzania danych, a także narzędzia do ich wizualizacji i analizy.",
          "W miesiącu przed wyborami prezydenckimi 2025 zebraliśmy na platformie myPolitics ponad 300 000 kwestionariuszy, z których wyłoniono próbę 100 000 osób w wieku 18–29 lat z zachowaniem proporcji demograficznych.",
          "Projekt wsparło 12 organizacji partnerskich, a z wynikami raportu dotarliśmy m.in. do Belwederu.",
        ],
        stats: [
          {value: "ponad 550 000 osób", label: "wypełniło nasz quiz"},
          {value: "100 000 osób", label: "w próbce badawczej, z pełnym odwzorowaniem proporcji demograficznych"},
          {value: "77 pytań", label: "w 5 kategoriach"},
        ],
        listLabel: "Partnerzy raportu",
        // `id` picks the logo in the component; links open in a new tab
        partners: [
          {id: "ad-personam", name: "Ad Personam", href: "https://ad.personam.pl/"},
          {id: "ibris", name: "Fundacja IBRiS", href: "https://ibris.pl/"},
          {id: "fundacja-venator", name: "Fundacja Venator", href: "https://fundacjavenator.pl/"},
          {id: "stowarzyszenie-pravda", name: "Stowarzyszenie Pravda", href: "https://pravda.org.pl/"},
          {id: "orb", name: "ORB", href: "https://www.youtube.com/@ORB_NEWS"},
          {id: "przekanal", name: "PRZEkanał", href: "https://www.youtube.com/@przekanal"},
          {id: "politologia-org", name: "politologia.org", href: "https://politologia.org/"},
          {id: "stowarzyszenie-racja", name: "Stowarzyszenie Racja", href: "https://stowarzyszenieracja.pl/"},
          {id: "mlode-kresy", name: "Młode Kresy", href: "https://mlodekresy.pl/"},
          {id: "kadeci-rp", name: "Kadeci RP", href: "https://kadecirp.pl/"},
          {id: "young-think", name: "Young Think", href: "https://youngthink.pl/"},
          {id: "android-com-pl", name: "android.com.pl", href: "https://android.com.pl/"},
        ],
        links: [
          {label: "Raport i dane", href: "https://data.mypolitics.pl/mlodzi-wyborcy"},
          {label: "O projekcie", href: "https://gi.org.pl/projekty/mlodzi-wyborcy-25"},
        ],
        // `id` picks the image in the component
        photos: [
          {
            id: "premiera",
            alt: "Oskar Barcz w panelu dyskusyjnym na premierze raportu, na ekranie wyniki badania",
            caption: "Premiera raportu, Warszawa, styczeń 2026",
          },
          {
            id: "belweder",
            alt: "Ekran z raportem Młodzi Wyborcy '25 przed polskimi flagami w Belwederze",
            caption: "Prezentacja raportu w Belwederze, marzec 2026",
          },
        ],
        gallery: [],
      },
      {
        id: "generacja-innowacja",
        name: "Generacja Innowacja",
        title: "Zbudowałem część technologiczną Fundacji, od pierwszego zespołu technicznego, do największego tech-first NGO w Polsce",
        body: [
          "Zarządzam technologią w Fundacji Generacja Innowacja i wyznaczam jej kierunek techniczny. Używając umiejętności technicznych, wyposażamy społeczeństwo w ważne narzędzia.",
          "Najważniejszy nasz projekt to myPolitics: platforma testów poglądów światopoglądowych, z której przed każdymi wyborami korzystają setki tysięcy osób.",
          "Koordynuję zespoły techniczne w Fundacji, które tworzą nasi wolontariusze i praktykanci. W ramach naszych programów rozwinęło się ponad 200 talentów branży IT.",
        ],
        stats: [
          {value: "ponad 5 mln", label: "użytkowników myPolitics w Polsce"},
          {value: "ponad 750 000", label: "osób w Quizie Wyborczym 2023"},
          {value: "ponad 500 000", label: "osób w Barometrze Prezydenckim 2025"},
          {value: "ponad 200", label: "wolontariuszy działających w Fundacji"},
          {
            prefix: "W 2026 roku uzyskaliśmy ponad",
            value: "220 000 zł",
            label: "finansowania publicznego na nasze projekty, a nasze wnioski zostały ocenione jako jedne z najbardziej merytorycznych.",
            full: true,
          },
        ],
        partners: [],
        links: [
          {label: "O Fundacji", href: "https://gi.org.pl/"},
          {label: "O myPolitics", href: "https://mypolitics.pl/"},
        ],
        photos: [],
        // A row of photos above the figures; `id` picks the image in the component
        gallery: [
          {id: "fundacja-warsztaty", alt: "Warsztaty fundacji w szkolnej klasie, uczniowie przy stołach słuchają prowadzącego"},
          {id: "fundacja-prezentacja", alt: "Prezentacja fundacji dla uczniów, na ekranie plan spotkania"},
          {id: "fundacja-zespol", alt: "Zespół Fundacji Generacja Innowacja na schodach przed budynkiem, z podziękowaniami od Fundacji Młode Kresy"},
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
    description: "Regularnie uczestniczę jako prelegent w konferencjach. Moje wystąpienia skupiają się na tematyce technologii serwerowych i tematach powiązanych. Podczas debat kładę nacisk na projektowanie aplikacji bezpiecznych przy wsparciu nowych technologii, przedstawiam, analizuję i konsultuję rozwiązania z zakresu cyberbezpieczeństwa.",
    featuredTalk: "Catching the mutants: introduction to mutation testing",
    featuredEvent: "PHPers Summit 2022, Poznań",
  },
};

export default pl;
