import type { ImageRatio } from "@/components/ImagePlaceholder";

export type CaseSection = { heading: string; body: string; bullets?: string[] };

export type CaseStudy = {
  slug: string;
  category: "Geração de Demanda" | "Relacionamento & Retenção" | "Marca & Presença Digital";
  categoryHref: string;
  title: string;
  summary: string;
  featured?: boolean;
  externalCta?: { label: string; href: string };
  /** Video shown next to the title in the case header (path under /public). */
  video?: string;
  /** Device mockup layered over the side of the header video. */
  videoMockup?: string;
  process?: { n: string; title: string; text: string }[];
  flow?: string[];
  sections: CaseSection[];
  /** When set, the sections are shown as a visual journey with this heading. */
  journeyTitle?: string;
  results?: string[];
  learnings?: string[];
  gallery: { caption: string; ratio: ImageRatio; src?: string }[];
  /** "carousel" shows the gallery as side-by-side thumbnails with arrows. */
  galleryStyle?: "grid" | "carousel";
  /** Image used on the case cards; defaults to the first gallery image. */
  cover?: string;
  tools?: string[];
};

export const CASES: CaseStudy[] = [
  {
    slug: "site-autoral",
    category: "Marca & Presença Digital",
    categoryHref: "/marca-presenca-digital",
    title: "Site Spotlar",
    summary: "Da estratégia à implementação: um projeto digital desenvolvido com apoio de IA.",
    featured: true,
    externalCta: { label: "Visitar site", href: "https://spotlar.com.br/" },
    video: "/videos/site-spotlar.mp4",
    videoMockup: "/cases/site-spotlar/mockup-sobre-nos.webp",
    flow: ["Ideia", "Estratégia", "Direção", "Implementação com IA", "Site publicado"],
    journeyTitle: "Do diagnóstico ao go-live",
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
        body: "O site da Spotlar não era atualizado havia mais de 5 anos e já não acompanhava a evolução da marca. A comunicação não transmitia com clareza o posicionamento da Spotlar, nem apresentava de forma objetiva seus produtos e soluções para os diferentes públicos do negócio.",
      },
      {
        heading: "Objetivo",
        body: "Criar uma nova experiência digital, capaz de traduzir o posicionamento atual da Spotlar e apresentar seus produtos e soluções de forma mais clara e estratégica. O novo site precisava organizar a comunicação para os diferentes públicos, oferecer uma experiência consistente em desktop e mobile e garantir uma migração segura do site anterior.",
      },
      {
        heading: "Minha atuação",
        body: "Participei do projeto de ponta a ponta, conectando estratégia, conteúdo, design e tecnologia.",
        bullets: [
          "Diagnóstico do site existente, considerando SEO, navegação, prova social e conversão",
          "Definição de escopo e gestão do projeto",
          "Arquitetura de informação para as jornadas B2C e B2B",
          "Participação no copywriting do novo site",
          "Direção de UX e aplicação do brand system",
          "Design e desenvolvimento com apoio do Claude",
          "Coordenação do go-live junto ao time de Tech",
        ],
      },
      {
        heading: "Resultado",
        body: "O novo site foi lançado em 24 dias, com 17 entregas entre desktop, mobile e código. A migração do site anterior foi realizada sem perda de conteúdo, e o projeto cumpriu o OKR de relançamento, criando uma nova base digital para comunicar o posicionamento, produtos e soluções da Spotlar.",
      },
    ],
    learnings: [
      "Definir a narrativa antes da interface encurta muito o trabalho de design.",
      "IA acelera implementação, mas o critério editorial e estratégico continua sendo humano.",
      "Menos seções e mais hierarquia comunicam senioridade melhor do que volume de conteúdo.",
    ],
    cover: "/cases/site-spotlar/home-hero.jpg",
    galleryStyle: "carousel",
    gallery: [
      { caption: "Home", ratio: "tall", src: "/cases/site-spotlar/pagina-home.jpg" },
      { caption: "Para você", ratio: "tall", src: "/cases/site-spotlar/pagina-para-voce.jpg" },
      {
        caption: "Interiores turn key",
        ratio: "tall",
        src: "/cases/site-spotlar/pagina-interiores-turn-key.jpg",
      },
      { caption: "Sobre nós", ratio: "tall", src: "/cases/site-spotlar/pagina-sobre-nos.jpg" },
      {
        caption: "Onde estamos",
        ratio: "tall",
        src: "/cases/site-spotlar/pagina-onde-estamos.jpg",
      },
    ],
    tools: ["Claude Code", "Figma", "CapCut", "GitHub"],
  },
  {
    slug: "conteudos-ricos-e-inbound",
    category: "Geração de Demanda",
    categoryHref: "/geracao-de-demanda",
    title: "Conteúdos Ricos & Inbound",
    summary:
      "E-books, landing pages e blog posts que educam o público, geram leads qualificados e fortalecem marcas como ACATE e Leroy Merlin.",
    sections: [
      {
        heading: "Contexto",
        body: "Marcas com públicos bem diferentes, do ecossistema de tecnologia de Santa Catarina ao varejo de casa e construção, precisavam de conteúdo que fizesse mais do que informar: que atraísse, educasse e abrisse caminho para a conversão.",
      },
      {
        heading: "Objetivo",
        body: "Gerar leads qualificados e engajamento com conteúdo educativo, posicionando cada marca como referência no seu tema.",
      },
      {
        heading: "Minha atuação",
        body: "Criação dos conteúdos e das estratégias de inbound que os sustentam.",
        bullets: [
          "Planejamento de conteúdo para inbound",
          "Redação de e-books e materiais ricos",
          "Copy de landing pages de captura",
          "Produção de blog posts",
        ],
      },
      {
        heading: "Estratégia",
        body: "Cada material rico funcionou como porta de entrada: o blog atrai, o e-book aprofunda o tema e a landing page converte o interesse em lead, com a mensagem ajustada ao estágio de consciência do público.",
      },
      {
        heading: "Execução",
        body: "Produção de e-books, landing pages e blog posts para a ACATE (Associação Catarinense de Tecnologia) e para a Leroy Merlin.",
      },
    ],
    results: ["[INSERIR RESULTADO — leads gerados, downloads ou conversão]"],
    gallery: [
      { caption: "[INSERIR IMAGEM — Capa de e-book]", ratio: "square" },
      { caption: "[INSERIR IMAGEM — Landing page de captura]", ratio: "square" },
      { caption: "[INSERIR IMAGEM — Blog post]", ratio: "wide" },
    ],
    tools: ["[INSERIR FERRAMENTAS UTILIZADAS]"],
  },
  {
    slug: "lancamento-de-programas-acate",
    category: "Geração de Demanda",
    categoryHref: "/geracao-de-demanda",
    title: "Lançamento de Programas ACATE",
    summary:
      "Textos e landing pages que apresentam novos programas da ACATE com clareza e mostram, logo de cara, o valor para cada público.",
    sections: [
      {
        heading: "Contexto",
        body: "A ACATE lançou novos programas voltados a públicos estratégicos: investidores, startups e grandes empresas. Cada um precisava de uma comunicação própria, capaz de explicar a proposta e convencer rápido.",
      },
      {
        heading: "Objetivo",
        body: "Comunicar os principais benefícios de cada programa de forma clara e atrativa, gerando interesse e adesão.",
      },
      {
        heading: "Minha atuação",
        body: "Redação da comunicação de lançamento dos programas.",
        bullets: [
          "Copy de landing pages",
          "Textos de apresentação dos programas",
          "Hierarquia de benefícios por público",
        ],
      },
      {
        heading: "Estratégia",
        body: "Em vez de descrever o programa, os textos partem do que cada público ganha: o investidor encontra startups com potencial, a startup encontra capital e a grande empresa encontra conexão com o ecossistema de inovação.",
      },
      {
        heading: "Execução",
        body: "ACATE Invest, que conecta investidores e startups de forma estratégica, e Mantenedores ACATE, que oferece a grandes empresas a oportunidade de se associar a um dos principais hubs de inovação do Brasil.",
      },
    ],
    results: ["[INSERIR RESULTADO — inscrições, adesões ou conversão das páginas]"],
    gallery: [
      { caption: "[INSERIR IMAGEM — Landing page ACATE Invest]", ratio: "wide" },
      { caption: "[INSERIR IMAGEM — Landing page Mantenedores ACATE]", ratio: "wide" },
    ],
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
      "Newsletters enviadas por e-mail e publicadas no LinkedIn para uma base de mais de 30 mil assinantes.",
    sections: [
      {
        heading: "Contexto",
        body: "A ACATE precisava manter uma base grande e diversa, formada por empresas associadas, startups e profissionais de tecnologia, informada e engajada com o que acontece no ecossistema.",
      },
      {
        heading: "Objetivo",
        body: "Manter relacionamento com a base, ampliar o alcance e o engajamento das campanhas e gerar cliques qualificados para conteúdos, eventos e programas.",
      },
      {
        heading: "Minha atuação",
        body: "Desenvolvimento das newsletters em conjunto com o time de Comunicação.",
        bullets: [
          "Definição de pautas",
          "Curadoria de conteúdo",
          "Copy e linhas de assunto",
          "Adaptação para e-mail e LinkedIn",
        ],
      },
      {
        heading: "Estratégia",
        body: "Dois canais, um mesmo conteúdo: o e-mail mantém o relacionamento com quem já está na base e a newsletter no LinkedIn amplia o alcance para novos públicos.",
      },
      {
        heading: "Execução",
        body: "Edições recorrentes distribuídas por e-mail e publicadas como newsletter no LinkedIn. [INSERIR PERIODICIDADE / NÚMERO DE EDIÇÕES]",
      },
    ],
    results: ["+30 mil assinantes impactados", "[INSERIR TAXA DE ABERTURA]", "[INSERIR CTR]"],
    gallery: [
      { caption: "[INSERIR IMAGEM — Edição da newsletter]", ratio: "tall" },
      { caption: "[INSERIR IMAGEM — Newsletter no LinkedIn]", ratio: "wide" },
    ],
    tools: ["[INSERIR FERRAMENTA DE E-MAIL / CRM]"],
  },
  {
    slug: "social-media-e-conteudo",
    category: "Marca & Presença Digital",
    categoryHref: "/marca-presenca-digital",
    title: "Social Media & Conteúdo",
    summary:
      "Planejamento editorial e copy estratégico para as redes da ACATE e da Rede de Inovação Florianópolis.",
    sections: [
      {
        heading: "Contexto",
        body: "Duas marcas do ecossistema de inovação de Santa Catarina, a ACATE e a Rede de Inovação Florianópolis, falam com públicos diversos: empreendedores, empresas, investidores, poder público e comunidade.",
      },
      {
        heading: "Objetivo",
        body: "Fortalecer a presença digital das duas marcas e engajar diferentes públicos com conteúdo relevante e consistente.",
      },
      {
        heading: "Minha atuação",
        body: "Participação no planejamento e responsabilidade pelo copy.",
        bullets: [
          "Planejamento do calendário editorial da Rede de Inovação Florianópolis",
          "Copywriting para as redes da ACATE",
          "Copywriting para as redes da Rede de Inovação Florianópolis",
          "Adaptação de tom por público e canal",
        ],
      },
      {
        heading: "Estratégia",
        body: "Um calendário editorial com linhas fixas garante recorrência e reconhecimento, e deixa espaço para conteúdos de oportunidade ligados a campanhas, eventos e programas.",
      },
      { heading: "Execução", body: "[INSERIR VOLUME DE PUBLICAÇÕES E FORMATOS]" },
    ],
    results: ["[INSERIR ALCANCE / ENGAJAMENTO / CRESCIMENTO]"],
    gallery: [
      { caption: "[INSERIR IMAGEM — Posts ACATE]", ratio: "square" },
      { caption: "[INSERIR IMAGEM — Posts Rede de Inovação Florianópolis]", ratio: "square" },
      { caption: "[INSERIR IMAGEM — Carrossel]", ratio: "wide" },
    ],
  },
  {
    slug: "acate-38-anos",
    category: "Marca & Presença Digital",
    categoryHref: "/marca-presenca-digital",
    title: "ACATE 38 anos: Protagonizando o futuro",
    summary:
      "Criação do mote da campanha de aniversário e de todo o copy derivado dele, das redes sociais ao vídeo institucional.",
    sections: [
      {
        heading: "Contexto",
        body: "Em seu aniversário de 38 anos, a ACATE precisava de uma campanha que celebrasse a sua trajetória e reforçasse o papel da Associação no futuro da tecnologia em Santa Catarina.",
      },
      {
        heading: "Objetivo",
        body: "Criar um conceito forte o bastante para guiar todas as peças da campanha, para o público externo e para o interno.",
      },
      {
        heading: "Minha atuação",
        body: "Junto ao time de Marketing, criei o mote “Protagonizando o futuro há 38 anos” e os textos da campanha.",
        bullets: [
          "Criação do mote da campanha",
          "Copy para as peças de redes sociais",
          "Roteiro do vídeo institucional",
          "E-mails marketing",
          "Ações de endomarketing",
        ],
      },
      {
        heading: "Estratégia",
        body: "O mote une passado e futuro na mesma frase: os 38 anos comprovam a trajetória e o “protagonizando” coloca a ACATE à frente do que vem pela frente. Cada peça partiu dessa ideia, o que deu unidade à campanha em todos os canais.",
      },
      {
        heading: "Execução",
        body: "O roteiro do vídeo institucional, desenvolvido com o time de Comunicação, foi lançado na posse da nova diretoria da Associação, no Teatro do CIC, em Florianópolis.",
      },
    ],
    results: ["Cerca de 600 convidados no lançamento do vídeo institucional"],
    gallery: [
      { caption: "[INSERIR VÍDEO — Institucional 38 anos da ACATE]", ratio: "wide" },
      { caption: "[INSERIR IMAGEM — Peças de redes sociais]", ratio: "square" },
      { caption: "[INSERIR IMAGEM — E-mail marketing]", ratio: "square" },
    ],
  },
  {
    slug: "acate-37-anos",
    category: "Marca & Presença Digital",
    categoryHref: "/marca-presenca-digital",
    title: "ACATE 37 anos: Criando conexões com o futuro",
    summary:
      "Mote da campanha de aniversário e roteiros de entrevistas com empresas e pessoas impactadas pelos programas da Associação.",
    sections: [
      {
        heading: "Contexto",
        body: "Em 2023, a ACATE completou 37 anos e queria engajar suas empresas associadas mostrando, com histórias reais, o impacto dos seus programas de inovação e formação.",
      },
      {
        heading: "Objetivo",
        body: "Celebrar a trajetória da Associação e dar protagonismo a quem foi impactado por ela.",
      },
      {
        heading: "Minha atuação",
        body: "Junto ao time, criei o mote “Desde 1986, criando conexões com o futuro”, que guiou toda a campanha, e escrevi os roteiros das entrevistas.",
        bullets: [
          "Criação do mote da campanha",
          "Seleção dos entrevistados com o time",
          "Roteiros das entrevistas",
        ],
      },
      {
        heading: "Estratégia",
        body: "Em vez de a ACATE falar de si mesma, a campanha deu voz a startups, corporates e pessoas que viveram os programas da Associação. O mote reforça a ideia central: a ACATE conecta pessoas e empresas ao futuro desde 1986.",
      },
      {
        heading: "Execução",
        body: "Série de entrevistas com cases do ecossistema.",
        bullets: ["Harmo", "RD Station", "Formação de Talentos", "Fazendas Bioma"],
      },
    ],
    results: ["[INSERIR RESULTADO — visualizações, alcance ou engajamento]"],
    gallery: [
      { caption: "[INSERIR VÍDEO — Entrevista Harmo]", ratio: "square" },
      { caption: "[INSERIR VÍDEO — Entrevista RD Station]", ratio: "square" },
      { caption: "[INSERIR VÍDEO — Entrevista Formação de Talentos]", ratio: "square" },
      { caption: "[INSERIR VÍDEO — Entrevista Fazendas Bioma]", ratio: "square" },
    ],
  },
];

export const getCase = (slug: string) => CASES.find((c) => c.slug === slug);
