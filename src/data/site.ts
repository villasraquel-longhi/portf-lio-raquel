export const PROFILE = {
  name: "Raquel Villas",
  headline: "Marketing B2B · Inbound · Conteúdo · Geração de Demanda",
  intro:
    "Transformo estratégias de marketing em conteúdo, campanhas e experiências digitais que conectam marcas e pessoas ao longo da jornada de compra.",
  linkedin: "[INSERIR LINK DO LINKEDIN]",
  email: "[INSERIR E-MAIL]",
  site: "[INSERIR LINK DO SITE]",
  cv: "[INSERIR LINK DO CURRÍCULO]",
};

export type NavItem = {
  to: "/" | "/geracao-de-demanda" | "/relacionamento-retencao" | "/marca-presenca-digital" | "/sobre";
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
        hash: "landing-pages",
        label: "Landing Pages & Conversão",
        text: "Páginas de captura e copy de conversão",
      },
      {
        hash: "materiais-ricos",
        label: "Materiais Ricos",
        text: "E-books, guias e conteúdos de apoio",
      },
      {
        hash: "reguas-topo-funil",
        label: "Réguas de Topo de Funil",
        text: "Sequências de e-mail pós-conversão",
      },
      {
        hash: "eventos",
        label: "Eventos & Campanhas Integradas",
        text: "Do anúncio ao pós-evento",
      },
    ],
  },
  {
    to: "/relacionamento-retencao",
    label: "Relacionamento & Retenção",
    children: [
      { hash: "newsletter", label: "Newsletter", text: "Estratégia editorial e curadoria" },
      { hash: "email-marketing", label: "E-mail Marketing", text: "Campanhas e comunicação" },
      { hash: "crm-automacao", label: "CRM & Automação", text: "Segmentação e fluxos" },
      {
        hash: "reguas-relacionamento",
        label: "Réguas de relacionamento",
        text: "Contato contínuo com a base",
      },
    ],
  },
  {
    to: "/marca-presenca-digital",
    label: "Marca & Presença Digital",
    children: [
      { hash: "site-autoral", label: "Site Autoral + IA", text: "Projeto autoral em destaque" },
      {
        hash: "social-media",
        label: "Social Media & Conteúdo",
        text: "Planejamento, copy e direção visual",
      },
      { hash: "conteudo-b2b", label: "Conteúdo B2B", text: "Artigos e materiais editoriais" },
      {
        hash: "projetos-digitais",
        label: "Projetos Digitais / Sites",
        text: "Páginas e sites de ponta a ponta",
      },
    ],
  },
  { to: "/sobre", label: "Sobre" },
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
    items: ["Geração de demanda", "Inbound Marketing", "Jornada do cliente", "Campanhas integradas"],
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
