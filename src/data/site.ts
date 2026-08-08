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

export const NAV = [
  { to: "/", label: "Início" },
  { to: "/geracao-de-demanda", label: "Geração de Demanda" },
  { to: "/relacionamento-e-retencao", label: "Relacionamento & Retenção" },
  { to: "/marca-e-presenca-digital", label: "Marca & Presença Digital" },
  { to: "/sobre", label: "Sobre" },
] as const;

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
    to: "/relacionamento-e-retencao",
    text: "Construir relacionamento com leads e públicos por meio de conteúdo, e-mail marketing, newsletters, CRM e automações.",
  },
  {
    n: "03",
    title: "Marca & Presença Digital",
    to: "/marca-e-presenca-digital",
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
