import { createFileRoute } from "@tanstack/react-router";
import { Mail, BookOpen, MousePointerClick, CalendarDays } from "lucide-react";
import { AreaColumns, PageHero, CaseCard } from "@/components/sections";
import { Reveal } from "@/components/Reveal";
import { CASES } from "@/data/cases";

export const Route = createFileRoute("/geracao-de-demanda")({
  head: () => ({
    meta: [
      { title: "Geração de Demanda | Raquel Villas" },
      {
        name: "description",
        content:
          "Projetos de geração de demanda: landing pages, materiais ricos, réguas de topo de funil e eventos como campanhas integradas.",
      },
      { property: "og:title", content: "Geração de Demanda | Raquel Villas" },
      {
        property: "og:description",
        content:
          "Projetos para atrair públicos, gerar interesse, captar leads e transformar conteúdo em oportunidades.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/geracao-de-demanda" },
    ],
    links: [{ rel: "canonical", href: "/geracao-de-demanda" }],
  }),
  component: Page,
});

const AREAS = [
  {
    n: "01",
    title: "E-mail Marketing",
    id: "email-marketing",
    icon: Mail,
    text: "Campanhas e comunicação que continuam a conversa iniciada no conteúdo e conduzem o lead ao próximo passo.",
  },
  {
    n: "02",
    title: "Inbound Marketing",
    id: "inbound-marketing",
    icon: BookOpen,
    text: "E-books, blog posts e conteúdos de apoio que educam o público e qualificam o lead antes do contato comercial.",
    slug: "conteudos-ricos-e-inbound",
  },
  {
    n: "03",
    title: "Landing Pages & Conversão",
    id: "landing-pages",
    icon: MousePointerClick,
    text: "Estrutura e copy de páginas de captura e de lançamento, pensadas para o estágio de consciência do público.",
    slug: "lancamento-de-programas-acate",
  },
  {
    n: "04",
    title: "Eventos",
    id: "eventos",
    icon: CalendarDays,
    text: "Eventos conduzidos como campanhas completas, do anúncio ao pós-evento.",
    slug: "eventos-e-campanhas-integradas",
  },
];

function Page() {
  const cases = CASES.filter((c) => c.category === "Geração de Demanda");
  return (
    <>
      <PageHero
        label="Área estratégica 01"
        title="Geração de Demanda"
        subtitle="Projetos para atrair públicos, gerar interesse, captar leads e transformar conteúdo em oportunidades."
      />
      <section className="border-b border-rule px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <AreaColumns items={AREAS} />
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
            {cases.map((c, i) => (
              <CaseCard key={c.slug} item={c} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
