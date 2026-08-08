import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, ProjectIndex, CaseCard } from "@/components/sections";
import { Reveal } from "@/components/Reveal";
import { CASES, getCase } from "@/data/cases";

export const Route = createFileRoute("/marca-e-presenca-digital")({
  head: () => ({
    meta: [
      { title: "Marca & Presença Digital | Raquel Villas" },
      {
        name: "description",
        content:
          "Site autoral desenvolvido com apoio de IA, social media, conteúdo B2B e projetos digitais de presença de marca.",
      },
      { property: "og:title", content: "Marca & Presença Digital | Raquel Villas" },
      {
        property: "og:description",
        content:
          "Projetos que conectam conteúdo, posicionamento, experiência digital e presença de marca.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/marca-e-presenca-digital" },
    ],
    links: [{ rel: "canonical", href: "/marca-e-presenca-digital" }],
  }),
  component: Page,
});

const AREAS = [
  {
    n: "02",
    title: "Social Media & Conteúdo",
    text: "Planejamento editorial, copywriting, direção visual e análise de métricas.",
    slug: "social-media-e-conteudo",
  },
  {
    n: "03",
    title: "Conteúdo B2B",
    text: "Artigos, materiais e peças de comunicação que traduzem temas complexos para o público certo.",
  },
  {
    n: "04",
    title: "Projetos Digitais / Sites",
    text: "Estrutura, conteúdo e experiência de páginas e sites, da concepção à publicação.",
  },
];

function Page() {
  const site = getCase("site-autoral")!;
  const others = CASES.filter(
    (c) => c.category === "Marca & Presença Digital" && c.slug !== site.slug,
  );

  return (
    <>
      <PageHero
        label="Área estratégica 03"
        title="Marca & Presença Digital"
        subtitle="Projetos que conectam conteúdo, posicionamento, experiência digital e presença de marca."
      />

      <section className="border-b border-rule px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="label">01 — Projeto em destaque</p>
            <h2 className="mt-6 font-serif text-5xl leading-[1] md:text-8xl">Site Autoral + IA</h2>
            <p className="mt-6 max-w-2xl font-serif text-xl leading-snug md:text-2xl">
              Da estratégia à implementação: um projeto digital desenvolvido com apoio de IA.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
            {site.process?.map((p, i) => (
              <Reveal key={p.n} delay={i * 60}>
                <div className="h-full border-t border-rule py-8 pr-8">
                  <p className="label">{p.n}</p>
                  <h3 className="mt-4 font-serif text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-12 flex flex-wrap gap-3">
              <Link
                to="/cases/$slug"
                params={{ slug: site.slug }}
                className="border border-foreground px-6 py-3 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors hover:bg-foreground hover:text-background"
              >
                Ver projeto
              </Link>
              <a
                href={site.externalCta?.href}
                className="border border-border px-6 py-3 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors hover:border-primary hover:text-primary"
              >
                Visitar site
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-rule px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <ProjectIndex items={AREAS} />
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="label mb-10">Cases desta área</p>
          </Reveal>
          {others.map((c, i) => (
            <CaseCard key={c.slug} item={c} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
