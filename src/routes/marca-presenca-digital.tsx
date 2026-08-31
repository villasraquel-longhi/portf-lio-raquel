import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, ProjectIndex, CaseCard } from "@/components/sections";
import { Reveal } from "@/components/Reveal";
import { CASES, getCase } from "@/data/cases";

export const Route = createFileRoute("/marca-presenca-digital")({
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
      { property: "og:url", content: "/marca-presenca-digital" },
    ],
    links: [{ rel: "canonical", href: "/marca-presenca-digital" }],
  }),
  component: Page,
});

const AREAS = [
  {
    n: "02",
    title: "Social media",
    id: "social-media",
    text: "Planejamento editorial, copywriting, direção visual e análise de métricas.",
    slug: "social-media-e-conteudo",
  },
  {
    n: "03",
    title: "Print design",
    id: "print-design",
    text: "Peças gráficas e materiais impressos que traduzem a identidade em formato físico.",
  },
  {
    n: "04",
    title: "Roteiro e captação",
    id: "roteiro-captacao",
    text: "Roteiros e gravação de conteúdo para vídeos, reels e peças audiovisuais.",
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

      <section
        id="web-design"
        className="scroll-mt-28 border-b border-rule px-5 py-16 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="font-mono text-sm font-semibold tracking-[0.08em] text-foreground uppercase md:text-base">
              01 — Projeto em destaque
            </p>
            <h2 className="mt-6 font-serif text-5xl leading-[1] md:text-8xl">Web design</h2>
            <p className="mt-6 max-w-2xl font-serif text-xl leading-snug md:text-2xl">
              Da estratégia à implementação: um projeto digital desenvolvido com apoio de IA.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.process?.map((p, i) => (
              <Reveal key={p.n} delay={i * 60}>
                <div className="h-full rounded-2xl border border-rule bg-card p-6">
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
                className="rounded-full bg-[#2B301C] px-6 py-3 font-sans text-sm font-bold text-[#F7F6EC] italic transition-transform hover:scale-105"
              >
                Ver projeto
              </Link>
              <a
                href={site.externalCta?.href}
                className="rounded-full border-2 border-[#2B301C] px-6 py-3 font-sans text-sm font-bold text-[#2B301C] italic transition-colors hover:bg-[#2B301C] hover:text-[#F7F6EC]"
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
            <p className="mb-10 font-mono text-sm font-semibold tracking-[0.08em] text-foreground uppercase md:text-base">
              Cases desta área
            </p>
          </Reveal>
          <div className="space-y-6">
            {others.map((c, i) => (
              <CaseCard key={c.slug} item={c} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
