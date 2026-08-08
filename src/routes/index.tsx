import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/sections";
import { CASES } from "@/data/cases";
import { PILLARS, PROFILE, SKILLS } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raquel Villas | Marketing B2B, Inbound & Conteúdo" },
      {
        name: "description",
        content:
          "Portfólio de Raquel Villas, profissional de marketing com experiência em inbound, geração de demanda, conteúdo B2B, CRM, campanhas digitais, eventos e projetos de presença digital.",
      },
      { property: "og:title", content: "Raquel Villas | Marketing B2B, Inbound & Conteúdo" },
      {
        property: "og:description",
        content:
          "Estratégia, conteúdo e execução em marketing B2B: geração de demanda, relacionamento e presença digital.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const featured = CASES.find((c) => c.featured)!;
  const others = CASES.filter((c) => !c.featured);

  return (
    <>
      <section className="border-b border-rule px-5 pt-20 pb-20 md:px-10 md:pt-36 md:pb-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="label">Portfólio · 2026</p>
            <h1 className="mt-8 font-serif text-[3.25rem] leading-[0.95] md:text-[8rem] lg:text-[10rem]">
              Raquel Villas
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 font-mono text-[11px] tracking-[0.16em] uppercase md:text-xs">
              {PROFILE.headline}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-14 grid gap-10 border-t border-rule pt-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-20">
              <p className="max-w-xl font-serif text-2xl leading-snug md:text-3xl">
                {PROFILE.intro}
              </p>
              <div className="self-end">
                <p className="max-w-md leading-relaxed text-muted-foreground">
                  Profissional de marketing com experiência em estratégias de geração de demanda,
                  inbound, conteúdo B2B, relacionamento, campanhas digitais e projetos de
                  comunicação.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#projetos"
                    className="border border-foreground px-6 py-3 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors hover:bg-foreground hover:text-background"
                  >
                    Ver projetos
                  </a>
                  <Link
                    to="/sobre"
                    className="border border-border px-6 py-3 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors hover:border-primary hover:text-primary"
                  >
                    Sobre mim
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <p className="label mt-20 animate-pulse">↓ Role para continuar</p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-rule px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="label">Como eu atuo</p>
            <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              Estratégia, conteúdo, execução e resultado ao longo da jornada.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px border-t border-rule md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <Link
                  to={p.to}
                  className="group flex h-full flex-col border-b border-rule py-10 md:border-r md:border-b-0 md:pr-10 md:last:border-r-0"
                >
                  <p className="label">{p.n}</p>
                  <h3 className="mt-5 font-serif text-3xl transition-colors group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{p.text}</p>
                  <span className="mt-8 font-mono text-[11px] tracking-[0.16em] uppercase">
                    Ver área →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="border-b border-rule px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="label">Projetos em destaque</p>
          </Reveal>

          <Reveal delay={80}>
            <Link
              to="/cases/$slug"
              params={{ slug: featured.slug }}
              className="group mt-10 block border-t border-b border-rule py-12 md:py-16"
            >
              <p className="label text-primary">{featured.category}</p>
              <h3 className="mt-6 font-serif text-5xl leading-[1] transition-colors group-hover:text-primary md:text-8xl">
                {featured.title}
              </h3>
              <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16">
                <p className="font-serif text-xl leading-snug md:text-2xl">{featured.summary}</p>
                <div>
                  <p className="leading-relaxed text-muted-foreground">
                    Projeto autoral no qual concebi a estrutura, o conteúdo e a experiência do site,
                    utilizando IA como ferramenta de apoio à implementação e ao refinamento técnico.
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                    {[
                      "Estratégia",
                      "Arquitetura de informação",
                      "Copywriting",
                      "UX",
                      "SEO",
                      "Desenvolvimento",
                      "IA aplicada",
                    ].map((t) => (
                      <li key={t} className="label">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-8 inline-block border border-foreground px-6 py-3 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors group-hover:bg-foreground group-hover:text-background">
                    Ver projeto
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          <div className="mt-16">
            {others.map((c, i) => (
              <CaseCard key={c.slug} item={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="label">Competências</p>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
              O que eu sei fazer — não apenas as ferramentas que uso.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-12 border-t border-rule pt-12 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((s, i) => (
              <Reveal key={s.group} delay={i * 60}>
                <h3 className="label text-primary">{s.group}</h3>
                <ul className="mt-5 space-y-2">
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
    </>
  );
}
