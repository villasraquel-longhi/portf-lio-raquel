import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections";
import { Reveal } from "@/components/Reveal";
import { PROFILE, SKILLS } from "@/data/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre | Raquel Villas — Marketing B2B" },
      {
        name: "description",
        content:
          "Formação, experiência e áreas de atuação de Raquel Villas: inbound, geração de demanda, conteúdo B2B, CRM, campanhas e projetos digitais.",
      },
      { property: "og:title", content: "Sobre | Raquel Villas — Marketing B2B" },
      {
        property: "og:description",
        content: "Trajetória, competências e formas de contato de Raquel Villas.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: Page,
});

const EXPERIENCE = [
  {
    company: "[INSERIR EMPRESA]",
    role: "[INSERIR CARGO]",
    period: "[INSERIR PERÍODO]",
    text: "[INSERIR RESUMO DE ATUAÇÃO — 2 a 4 linhas sobre responsabilidades e frentes conduzidas]",
  },
  {
    company: "[INSERIR EMPRESA]",
    role: "[INSERIR CARGO]",
    period: "[INSERIR PERÍODO]",
    text: "[INSERIR RESUMO DE ATUAÇÃO — 2 a 4 linhas sobre responsabilidades e frentes conduzidas]",
  },
];

function Page() {
  return (
    <>
      <PageHero
        label="Sobre"
        title="Raquel Villas"
        subtitle="Profissional de marketing com experiência em estratégias de geração de demanda, inbound, conteúdo B2B, relacionamento, campanhas digitais e projetos de comunicação."
      />

      <section className="border-b border-rule px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-20">
          <Reveal>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Trabalho com marketing B2B em frentes que costumam ser tratadas separadamente:
                conteúdo, campanhas, e-mail, CRM, redes sociais, landing pages e eventos. O que me
                interessa é justamente a conexão entre elas — como uma peça sustenta a próxima e
                como a jornada se mantém coerente do primeiro contato à retenção.
              </p>
              <p>
                Gosto de começar pela estratégia e ir até a execução. Isso significa escrever,
                estruturar páginas, montar réguas, acompanhar métricas e ajustar o que não
                funcionou. Também significa testar ferramentas novas quando elas resolvem um
                problema real — foi assim que desenvolvi meu próprio site com apoio de IA.
              </p>
              <p>
                Busco projetos em que estratégia e execução andem juntas, e times que valorizem
                clareza, curiosidade e autonomia.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <dl className="space-y-8 border-t border-rule pt-8">
              <div>
                <dt className="label">Formação</dt>
                <dd className="mt-2">[INSERIR FORMAÇÃO]</dd>
              </div>
              <div>
                <dt className="label">Áreas de atuação</dt>
                <dd className="mt-2">
                  Inbound · Geração de demanda · Conteúdo B2B · CRM · E-mail marketing · Social
                  media · Eventos · Projetos digitais
                </dd>
              </div>
              <div>
                <dt className="label">Ferramentas</dt>
                <dd className="mt-2">[INSERIR FERRAMENTAS]</dd>
              </div>
              <div>
                <dt className="label">Interesses profissionais</dt>
                <dd className="mt-2">
                  Estratégia de funil, conteúdo editorial B2B e IA aplicada ao marketing.
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-rule px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="label">Experiência</p>
          </Reveal>
          <div className="mt-10 border-t border-rule">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={i} delay={i * 70}>
                <article className="grid gap-3 border-b border-rule py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-12">
                  <div>
                    <h3 className="font-serif text-2xl">{e.company}</h3>
                    <p className="label mt-2">
                      {e.role} · {e.period}
                    </p>
                  </div>
                  <p className="leading-relaxed text-muted-foreground">{e.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="label">Competências</p>
          </Reveal>
          <div className="mt-10 grid gap-x-10 gap-y-10 border-t border-rule pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((s, i) => (
              <Reveal key={s.group} delay={i * 50}>
                <h3 className="label text-primary">{s.group}</h3>
                <ul className="mt-4 space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="border-b border-border pb-2 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="scroll-mt-24 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <h2 className="font-serif text-5xl leading-[1] md:text-8xl">Vamos conversar?</h2>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              <a
                href={PROFILE.linkedin}
                className="link-underline font-mono text-[11px] tracking-[0.16em] uppercase hover:text-primary"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="link-underline font-mono text-[11px] tracking-[0.16em] uppercase hover:text-primary"
              >
                E-mail
              </a>
              <a
                href={PROFILE.cv}
                className="link-underline font-mono text-[11px] tracking-[0.16em] uppercase hover:text-primary"
              >
                Currículo
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
