import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, PenLine, Globe2, MessagesSquare, Sparkles, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ToolsField } from "@/components/sections";
import { CASES } from "@/data/cases";
import { ABOUT, FORMACAO, PILLARS, PROFILE, SKILLS } from "@/data/site";

const SKILL_ICONS: Record<string, LucideIcon> = {
  Estratégia: Target,
  Conteúdo: PenLine,
  Digital: Globe2,
  Comunicação: MessagesSquare,
  "Tecnologia / IA": Sparkles,
};

const SKILL_COLORS = [
  "bg-[#D2DB76] text-[#2B301C]",
  "bg-[#FFC3CC] text-[#2B301C]",
  "bg-[#2B301C] text-[#F7F6EC]",
];

const HERO_PILL_COLORS = ["bg-[#D2DB76] text-[#2B301C]", "bg-[#FFC3CC] text-[#2B301C]"];

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

  return (
    <>
      <section className="overflow-hidden border-b border-rule bg-background">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-center gap-6 px-8 py-16 md:px-14 md:py-24">
            <Reveal delay={80}>
              <p className="label">Portfólio · 2026</p>
              <h1 className="mt-4 font-serif text-5xl leading-[0.95] md:text-7xl">
                {PROFILE.name}
              </h1>
              <div className="mt-5 flex flex-wrap gap-2">
                {PROFILE.headline.split(" · ").map((role, idx) => (
                  <span
                    key={role}
                    className={`rounded-full px-3.5 py-1.5 font-sans text-xs font-bold italic ${HERO_PILL_COLORS[idx % HERO_PILL_COLORS.length]}`}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160}>
              <p className="max-w-2xl font-serif text-xl leading-snug md:text-2xl">
                {PROFILE.intro}
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div
                id="contato"
                className="flex scroll-mt-28 flex-wrap gap-x-6 gap-y-3 border-t border-rule pt-6"
              >
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-mono text-[11px] tracking-[0.16em] uppercase hover:text-primary"
                >
                  LinkedIn
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
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

            <Reveal delay={280}>
              <a
                href="#projetos"
                className="inline-flex w-fit items-center rounded-full bg-[#2B301C] px-6 py-3 font-sans text-sm font-bold text-[#F7F6EC] italic transition-transform hover:scale-105"
              >
                Ver projetos
              </a>
            </Reveal>
          </div>

          <div className="relative flex items-center justify-center overflow-hidden px-8 py-16 md:py-24">
            <Reveal delay={140}>
              <div className="relative flex items-center justify-center">
                <div
                  aria-hidden="true"
                  className="absolute h-64 w-64 bg-[#FFC3CC] md:h-80 md:w-80"
                  style={{ borderRadius: "42% 58% 65% 35% / 45% 35% 65% 55%" }}
                />
                <div className="relative aspect-square w-52 overflow-hidden rounded-full border-[6px] border-background md:w-64">
                  <img
                    src="/raquel-villas.jpg"
                    alt="Raquel Villas"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span
                  aria-hidden="true"
                  className="absolute -top-3 -left-6 animate-[pulse-scale_3s_ease-in-out_infinite] text-4xl text-[#2B301C] md:text-5xl"
                >
                  ✦
                </span>
                <span
                  aria-hidden="true"
                  className="absolute top-2 right-0 animate-[pulse-scale_2.4s_ease-in-out_infinite] text-xl text-[#2B301C] md:text-2xl"
                  style={{ animationDelay: "0.6s" }}
                >
                  ✦
                </span>
                <span
                  aria-hidden="true"
                  className="absolute -right-6 bottom-6 animate-[pulse-scale_3.6s_ease-in-out_infinite] text-3xl text-[#D2DB76] md:text-4xl"
                  style={{ animationDelay: "1.2s" }}
                >
                  ✦
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="overflow-hidden bg-[#FFC3CC] py-5" aria-hidden="true">
          <div className="flex w-max animate-[marquee_18s_linear_infinite] whitespace-nowrap">
            {[0, 1].map((i) => (
              <span
                key={i}
                className="flex items-center px-8 font-sans text-sm font-bold text-[#2B301C]"
              >
                Vamos criar sua próxima campanha juntos.
                <span className="mx-8">✦</span>
                Vamos criar sua próxima campanha juntos.
                <span className="mx-8">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-rule bg-card p-6">
                <p className="label font-semibold">Formação</p>
                <ul className="mt-3 space-y-3">
                  {FORMACAO.map((f) => (
                    <li key={f.curso} className="max-w-md">
                      <p className="text-sm text-foreground">{f.curso}</p>
                      <p className="text-xs text-muted-foreground">
                        {f.instituicao} · {f.periodo}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-rule bg-card p-6">
                <p className="label font-semibold">Áreas de atuação</p>
                <p className="mt-3 max-w-md text-sm text-muted-foreground">
                  {ABOUT.areasDeAtuacao}
                </p>
              </div>
              <div className="rounded-2xl border border-rule bg-card p-6">
                <ToolsField edicao={ABOUT.ferramentasEdicao} genAI={ABOUT.ferramentasGenAI} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-rule px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="font-mono text-sm font-semibold tracking-[0.08em] text-foreground uppercase md:text-base">
              Competências
            </p>
          </Reveal>
          <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((s, i) => {
              const Icon = SKILL_ICONS[s.group] ?? Sparkles;
              return (
                <Reveal key={s.group} delay={i * 60}>
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                    <h3 className="label text-primary">{s.group}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.items.map((item, idx) => (
                      <span
                        key={item}
                        className={`rounded-full px-3.5 py-1.5 font-sans text-xs font-bold italic leading-none ${SKILL_COLORS[(i * 2 + idx) % SKILL_COLORS.length]}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projetos" className="border-b border-rule px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="font-mono text-sm font-semibold tracking-[0.08em] text-foreground uppercase md:text-base">
              Projetos em destaque
            </p>
          </Reveal>

          <Reveal delay={80}>
            <Link
              to="/cases/$slug"
              params={{ slug: featured.slug }}
              className="group mt-10 grid gap-6 md:grid-cols-[1.15fr_1fr] md:gap-8"
            >
              <div className="overflow-hidden rounded-3xl">
                <ImagePlaceholder
                  caption={featured.gallery[0]?.caption ?? "[INSERIR IMAGEM]"}
                  ratio="wide"
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="rounded-3xl border border-rule bg-card p-8">
                  <p className="label text-primary">{featured.category}</p>
                  <h3 className="mt-4 font-serif text-4xl leading-[1.05] transition-colors group-hover:text-primary md:text-5xl">
                    {featured.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{featured.summary}</p>
                  <span className="mt-6 inline-flex w-fit items-center rounded-full bg-[#2B301C] px-6 py-3 font-sans text-sm font-bold text-[#F7F6EC] italic transition-transform group-hover:scale-105">
                    Ver projeto →
                  </span>
                </div>
                <div className="rounded-3xl bg-secondary p-8">
                  <p className="label">Destaques do projeto</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Estratégia",
                      "Arquitetura de informação",
                      "Copywriting",
                      "UX",
                      "SEO",
                      "Desenvolvimento",
                      "IA aplicada",
                    ].map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-border bg-background px-3 py-1.5 text-xs"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-rule px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="font-mono text-sm font-semibold tracking-[0.08em] text-foreground uppercase md:text-base">
              Como eu atuo
            </p>
            <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              Estratégia, conteúdo, execução e resultado ao longo da jornada.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <Link
                  to={p.to}
                  className="group flex h-full flex-col rounded-3xl border border-rule bg-card p-8 transition-colors hover:border-primary"
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

      <section
        className="relative flex h-56 items-center justify-center overflow-hidden border-t border-rule md:h-72"
        style={{
          backgroundImage:
            "repeating-conic-gradient(#2B301C 0% 25%, #FFC3CC 0% 50%)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      >
        <div className="relative h-32 w-32 md:h-44 md:w-44">
          <svg viewBox="0 0 200 200" className="h-full w-full animate-[spin_22s_linear_infinite]">
            <defs>
              <path id="badge-path" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <circle cx="100" cy="100" r="98" fill="#D2DB76" />
            <text fontSize="12.5" fontWeight="700" letterSpacing="2.5" fill="#2B301C">
              <textPath href="#badge-path" startOffset="0%">
                RAQUEL VILLAS • PORTFÓLIO • MARKETING •{" "}
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-3xl text-[#2B301C] md:text-4xl">RV</span>
          </div>
        </div>
      </section>
    </>
  );
}
