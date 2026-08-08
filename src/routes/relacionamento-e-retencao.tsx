import { createFileRoute } from "@tanstack/react-router";
import { FlowLine, PageHero, ProjectIndex, CaseCard } from "@/components/sections";
import { Reveal } from "@/components/Reveal";
import { CASES } from "@/data/cases";

export const Route = createFileRoute("/relacionamento-e-retencao")({
  head: () => ({
    meta: [
      { title: "Relacionamento & Retenção | Raquel Villas" },
      {
        name: "description",
        content:
          "Newsletter, e-mail marketing, CRM, automação e réguas de relacionamento para nutrir leads e manter a marca presente.",
      },
      { property: "og:title", content: "Relacionamento & Retenção | Raquel Villas" },
      {
        property: "og:description",
        content:
          "Conteúdo e comunicação para nutrir leads, fortalecer relacionamentos e manter a marca presente ao longo da jornada.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/relacionamento-e-retencao" },
    ],
    links: [{ rel: "canonical", href: "/relacionamento-e-retencao" }],
  }),
  component: Page,
});

const AREAS = [
  {
    n: "01",
    title: "Newsletter",
    text: "Estratégia editorial, curadoria e copy para sustentar frequência e relevância junto à base.",
    slug: "newsletter-e-email-marketing",
  },
  {
    n: "02",
    title: "E-mail Marketing",
    text: "Campanhas de comunicação, lançamentos e conteúdos com mensagem ajustada a cada segmento.",
  },
  {
    n: "03",
    title: "CRM & Automação",
    text: "Organização da base, segmentações e fluxos automatizados para escalar o relacionamento.",
  },
  {
    n: "04",
    title: "Réguas de relacionamento",
    text: "Sequências que acompanham o lead depois da conversão inicial, mantendo o contato útil e contínuo.",
  },
];

function Page() {
  const cases = CASES.filter((c) => c.category === "Relacionamento & Retenção");
  return (
    <>
      <PageHero
        label="Área estratégica 02"
        title="Relacionamento & Retenção"
        subtitle="Conteúdo e comunicação para nutrir leads, fortalecer relacionamentos e manter a marca presente ao longo da jornada."
      />
      <section className="border-b border-rule px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <FlowLine steps={["Segmentação", "Conteúdo", "Nutrição", "Relacionamento"]} />
          </Reveal>
          <div className="mt-14">
            <ProjectIndex items={AREAS} />
          </div>
        </div>
      </section>
      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="label mb-10">Cases desta área</p>
          </Reveal>
          {cases.map((c, i) => (
            <CaseCard key={c.slug} item={c} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
