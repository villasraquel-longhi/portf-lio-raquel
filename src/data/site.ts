export const PROFILE = {
  name: "Raquel Villas",
  headline: "Marketing B2B · B2B2C · Inbound · Conteúdo · Geração de Demanda",
  intro:
    "Transformo estratégias de marketing em conteúdo, campanhas e experiências digitais que conectam marcas e pessoas ao longo da jornada de compra.",
  linkedin: "https://www.linkedin.com/in/raquel-villas-longhi/",
  email: "villasraquel@gmail.com",
  site: "[INSERIR LINK DO SITE]",
  cv: "[INSERIR LINK DO CURRÍCULO]",
};

export const FORMACAO = [
  {
    curso: "Pós-graduação em Comunicação e Marketing",
    instituicao: "Universidade Anhembi Morumbi",
    periodo: "2021",
  },
  {
    curso: "Bacharelado em Letras",
    instituicao: "Universidade Federal de Juiz de Fora",
    periodo: "2018",
  },
  {
    curso: "Copywriting — Redação Publicitária",
    instituicao: "EBAC",
    periodo: "2023",
  },
];

export const ABOUT = {
  areasDeAtuacao:
    "Inbound · Geração de demanda · Conteúdo B2B · Conteúdo B2B2C · CRM · E-mail marketing · Social media · Eventos · Projetos digitais",
  ferramentasEdicao: ["Figma", "Canva", "CapCut"],
  ferramentasGenAI: ["ChatGPT", "Gemini", "Claude"],
  interesses: "Estratégia de funil, conteúdo editorial B2B e IA aplicada ao marketing.",
};

export type NavItem = {
  to: "/" | "/geracao-de-demanda" | "/relacionamento-retencao" | "/marca-presenca-digital";
  label: string;
  children?: { hash: string; label: string; text: string }[];
};

export const NAV: NavItem[] = [
  { to: "/", label: "Início" },
  {
    to: "/geracao-de-demanda",
    label: "Geração de Demanda",
    children: [
      {
        hash: "email-marketing",
        label: "E-mail Marketing",
        text: "Campanhas e comunicação",
      },
      {
        hash: "inbound-marketing",
        label: "Inbound Marketing",
        text: "E-books, guias e conteúdos de apoio",
      },
      {
        hash: "landing-pages",
        label: "Landing Pages & Conversão",
        text: "Páginas de captura e copy de conversão",
      },
      {
        hash: "eventos",
        label: "Eventos",
        text: "Do anúncio ao pós-evento",
      },
    ],
  },
  {
    to: "/relacionamento-retencao",
    label: "Relacionamento & Retenção",
    children: [
      { hash: "newsletter", label: "Newsletter", text: "Estratégia editorial e curadoria" },
    ],
  },
  {
    to: "/marca-presenca-digital",
    label: "Marca & Presença Digital",
    children: [
      { hash: "web-design", label: "Web design", text: "Sites e páginas de ponta a ponta" },
      { hash: "social-media", label: "Social media", text: "Planejamento, copy e direção visual" },
      { hash: "print-design", label: "Print design", text: "Peças gráficas e materiais impressos" },
      { hash: "roteiro-captacao", label: "Roteiro e captação", text: "Roteiros e gravação de conteúdo" },
    ],
  },
];

export const PILLARS = [
  {
    n: "01",
    title: "Geração de Demanda",
    to: "/geracao-de-demanda",
    text: "Atrair, educar e converter potenciais clientes por meio de conteúdo, campanhas, landing pages, materiais ricos e eventos.",
  },
  {
    n: "02",
    title: "Relacionamento & Retenção",
    to: "/relacionamento-retencao",
    text: "Construir relacionamento com leads e públicos por meio de conteúdo, e-mail marketing, newsletters, CRM e automações.",
  },
  {
    n: "03",
    title: "Marca & Presença Digital",
    to: "/marca-presenca-digital",
    text: "Fortalecer posicionamento e presença digital por meio de conteúdo, social media, experiências digitais e projetos de marca.",
  },
] as const;

export const SKILLS = [
  {
    group: "Estratégia",
    items: [
      "Geração de demanda",
      "Inbound Marketing",
      "Jornada do cliente",
      "Campanhas integradas",
      "Growth Marketing",
      "Lifecycle Marketing",
    ],
  },
  {
    group: "Conteúdo",
    items: ["Copywriting", "Conteúdo B2B", "Social Media", "Materiais ricos", "Newsletter"],
  },
  {
    group: "Digital",
    items: ["Landing Pages", "Sites", "UX", "SEO", "CRM", "Automação"],
  },
  {
    group: "Comunicação",
    items: ["E-mail Marketing", "Eventos", "Comunicação institucional", "Campanhas"],
  },
  {
    group: "Tecnologia / IA",
    items: [
      "IA aplicada ao marketing",
      "Desenvolvimento assistido por IA",
      "Prototipação",
      "Experimentação digital",
    ],
  },
] as const;
