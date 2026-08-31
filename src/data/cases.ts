export type CaseSection = { heading: string; body: string; bullets?: string[] };

export type CaseStudy = {
  slug: string;
  category: "Geração de Demanda" | "Relacionamento & Retenção" | "Marca & Presença Digital";
  categoryHref: string;
  title: string;
  summary: string;
  featured?: boolean;
  externalCta?: { label: string; href: string };
  process?: { n: string; title: string; text: string }[];
  flow?: string[];
  sections: CaseSection[];
  results?: string[];
  learnings?: string[];
  gallery: { caption: string; ratio: "wide" | "tall" | "square" }[];
  tools?: string[];
};

export const CASES: CaseStudy[] = [
  {
    slug: "site-autoral",
    category: "Marca & Presença Digital",
    categoryHref: "/marca-presenca-digital",
    title: "Site Autoral",
    summary: "Da estratégia à implementação: um projeto digital desenvolvido com apoio de IA.",
    featured: true,
    externalCta: { label: "Visitar site", href: "[INSERIR LINK DO PROJETO]" },
    flow: ["Ideia", "Estratégia", "Direção", "Implementação com IA", "Site publicado"],
    process: [
      {
        n: "01",
        title: "Conceito",
        text: "Definição do posicionamento, do público-alvo e da narrativa que o site precisava sustentar: estratégia, conteúdo, execução e resultado.",
      },
      {
        n: "02",
        title: "Arquitetura",
        text: "Estruturação da informação em frentes estratégicas em vez de disciplinas isoladas, para tornar a leitura do perfil mais clara.",
      },
      {
        n: "03",
        title: "Copy",
        text: "Redação de toda a comunicação do site, do posicionamento aos textos de apoio, com foco em clareza e tom profissional.",
      },
      {
        n: "04",
        title: "UX",
        text: "Definição de fluxos de navegação, hierarquia visual, responsividade e critérios de acessibilidade e leitura.",
      },
      {
        n: "05",
        title: "Desenvolvimento",
        text: "Implementação do site, revisão de estrutura técnica, ajustes de performance e publicação.",
      },
      {
        n: "06",
        title: "IA aplicada",
        text: "Uso de IA como ferramenta de apoio: exploração de soluções, geração e revisão de código e refinamentos técnicos. As decisões de estratégia, conteúdo e direção foram minhas.",
      },
    ],
    sections: [
      {
        heading: "Contexto",
        body: "Meu portfólio precisava comunicar algo que um currículo tradicional não comunica: a capacidade de atuar em diferentes pontos da jornada de marketing e de conduzir um projeto digital de ponta a ponta.",
      },
      {
        heading: "Objetivo",
        body: "Construir um projeto digital próprio que funcionasse ao mesmo tempo como portfólio e como evidência prática de estratégia, conteúdo e execução.",
      },
      {
        heading: "Minha atuação",
        body: "Conduzi o projeto do início ao fim.",
        bullets: [
          "Estratégia e posicionamento",
          "Arquitetura de informação",
          "Copywriting integral",
          "Direção de UX e hierarquia visual",
          "SEO e estrutura semântica",
          "Desenvolvimento com apoio de IA",
        ],
      },
      {
        heading: "Estratégia",
        body: "A narrativa foi organizada em torno do fluxo ideia → estratégia → direção → implementação com IA → site publicado, para que cada seção reforçasse a visão de funil e não apenas a lista de entregas.",
      },
      {
        heading: "Execução",
        body: "Entrega de um site responsivo, com páginas por frente estratégica, template reutilizável de case, SEO básico e publicação.",
      },
    ],
    results: ["[INSERIR MÉTRICAS DO PROJETO]"],
    learnings: [
      "Definir a narrativa antes da interface encurta muito o trabalho de design.",
      "IA acelera implementação, mas o critério editorial e estratégico continua sendo humano.",
      "Menos seções e mais hierarquia comunicam senioridade melhor do que volume de conteúdo.",
    ],
    gallery: [
      { caption: "[INSERIR IMAGEM — Home do site]", ratio: "wide" },
      { caption: "[INSERIR IMAGEM — Página de case]", ratio: "square" },
      { caption: "[INSERIR IMAGEM — Versão mobile]", ratio: "tall" },
    ],
    tools: ["[INSERIR FERRAMENTAS UTILIZADAS]"],
  },
  {
    slug: "campanha-geracao-de-demanda",
    category: "Geração de Demanda",
    categoryHref: "/geracao-de-demanda",
    title: "Campanha de Geração de Demanda",
    summary:
      "Conteúdo, landing page, captura e nutrição pensados como uma jornada única, e não como peças isoladas.",
    sections: [
      {
        heading: "Contexto",
        body: "[INSERIR CONTEXTO DA CAMPANHA — cenário, público e desafio de negócio]",
      },
      { heading: "Objetivo", body: "[INSERIR OBJETIVO — o que precisava ser resolvido]" },
      {
        heading: "Minha atuação",
        body: "Atuação na concepção e execução das peças que compõem a jornada.",
        bullets: [
          "Planejamento da campanha",
          "Produção de material rico e conteúdo de apoio",
          "Landing page e copy de conversão",
          "Régua de e-mails de nutrição",
        ],
      },
      {
        heading: "Estratégia",
        body: "A campanha seguiu a lógica conteúdo → landing page → captura → nutrição → conversão, com mensagens ajustadas ao estágio de consciência de cada etapa.",
      },
      { heading: "Execução", body: "[INSERIR ENTREGAS DA CAMPANHA]" },
    ],
    results: ["[INSERIR RESULTADO DA CAMPANHA]"],
    gallery: [
      { caption: "[INSERIR IMAGEM — Landing page]", ratio: "wide" },
      { caption: "[INSERIR IMAGEM — Material rico]", ratio: "square" },
      { caption: "[INSERIR IMAGEM — E-mails da régua]", ratio: "square" },
    ],
    tools: ["[INSERIR FERRAMENTAS UTILIZADAS]"],
  },
  {
    slug: "eventos-e-campanhas-integradas",
    category: "Geração de Demanda",
    categoryHref: "/geracao-de-demanda",
    title: "Eventos & Campanhas Integradas",
    summary:
      "Eventos tratados como campanhas completas: estratégia, comunicação, captação, cobertura e pós-evento.",
    sections: [
      {
        heading: "Contexto",
        body: "Projetos de evento conduzidos como campanhas integradas: PeopleTech Summit, Pitch Day — IA e LinkLab Open Day. [INSERIR CONTEXTO ESPECÍFICO DE CADA EVENTO]",
      },
      {
        heading: "Objetivo",
        body: "Gerar inscrições qualificadas, sustentar a comunicação antes, durante e depois do evento e transformar a audiência em relacionamento contínuo.",
      },
      {
        heading: "Minha atuação",
        body: "Participação na comunicação e na divulgação dos eventos.",
        bullets: [
          "Estratégia de comunicação e divulgação",
          "Landing pages de inscrição",
          "E-mail marketing e lembretes",
          "Social media e conteúdo de apoio",
          "Cobertura e conteúdo de pós-evento",
        ],
      },
      {
        heading: "Estratégia",
        body: "Cada evento foi planejado em três tempos — pré, durante e pós — para que a audiência captada continuasse sendo trabalhada depois da data.",
      },
      { heading: "Execução", body: "[INSERIR ENTREGAS POR EVENTO]" },
    ],
    results: ["[INSERIR NÚMERO DE INSCRIÇÕES / PRESENÇAS / ALCANCE]"],
    gallery: [
      { caption: "[INSERIR IMAGEM — Landing page do evento]", ratio: "wide" },
      { caption: "[INSERIR IMAGEM — Peças de divulgação]", ratio: "square" },
      { caption: "[INSERIR IMAGEM — Cobertura do evento]", ratio: "square" },
    ],
  },
  {
    slug: "newsletter-e-email-marketing",
    category: "Relacionamento & Retenção",
    categoryHref: "/relacionamento-retencao",
    title: "Newsletter & E-mail Marketing",
    summary:
      "Estratégia editorial, curadoria e copy para manter a base engajada com frequência e consistência.",
    sections: [
      { heading: "Contexto", body: "[INSERIR CONTEXTO DA NEWSLETTER — público e objetivo da base]" },
      {
        heading: "Objetivo",
        body: "Manter relacionamento com a base, sustentar presença de marca e gerar cliques qualificados para conteúdos e ofertas.",
      },
      {
        heading: "Minha atuação",
        body: "Condução do ciclo editorial completo.",
        bullets: [
          "Estratégia editorial e definição de pautas",
          "Curadoria de conteúdo",
          "Copy e assunto dos e-mails",
          "Direção de design e montagem",
          "Definição de frequência e acompanhamento de métricas",
        ],
      },
      {
        heading: "Estratégia",
        body: "Segmentação → conteúdo → nutrição → relacionamento: a base foi tratada por interesse e estágio, não como lista única.",
      },
      { heading: "Execução", body: "[INSERIR EDIÇÕES / VOLUME / PERIODICIDADE]" },
    ],
    results: ["[INSERIR TAXA DE ABERTURA]", "[INSERIR CTR]"],
    gallery: [
      { caption: "[INSERIR IMAGEM — Edição da newsletter]", ratio: "tall" },
      { caption: "[INSERIR IMAGEM — Comparativo desktop/mobile]", ratio: "wide" },
    ],
    tools: ["[INSERIR FERRAMENTA DE E-MAIL / CRM]"],
  },
  {
    slug: "social-media-e-conteudo",
    category: "Marca & Presença Digital",
    categoryHref: "/marca-presenca-digital",
    title: "Social Media & Conteúdo",
    summary:
      "Planejamento editorial, copywriting e direção visual para sustentar presença digital consistente.",
    sections: [
      { heading: "Contexto", body: "[INSERIR CONTEXTO — canais, públicos e maturidade da marca]" },
      {
        heading: "Objetivo",
        body: "Fortalecer posicionamento e manter presença constante nos canais digitais com conteúdo relevante para o público B2B.",
      },
      {
        heading: "Minha atuação",
        body: "Condução do conteúdo do planejamento à análise.",
        bullets: [
          "Planejamento editorial",
          "Copywriting",
          "Criação de conteúdo",
          "Direção visual",
          "Gestão de redes",
          "Análise de métricas",
        ],
      },
      {
        heading: "Estratégia",
        body: "Linhas editoriais fixas garantiram recorrência e reconhecimento, com espaço para conteúdos de oportunidade ligados a campanhas e eventos.",
      },
      { heading: "Execução", body: "[INSERIR VOLUME DE PUBLICAÇÕES E FORMATOS]" },
    ],
    results: ["[INSERIR ALCANCE / ENGAJAMENTO / CRESCIMENTO]"],
    gallery: [
      { caption: "[INSERIR IMAGEM — Grade de posts]", ratio: "square" },
      { caption: "[INSERIR IMAGEM — Peça em destaque]", ratio: "square" },
      { caption: "[INSERIR IMAGEM — Carrossel]", ratio: "wide" },
    ],
  },
];

export const getCase = (slug: string) => CASES.find((c) => c.slug === slug);
