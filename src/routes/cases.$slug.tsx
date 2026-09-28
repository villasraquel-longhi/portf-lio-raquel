import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { JourneyPath } from "@/components/JourneyPath";
import { GalleryCarousel } from "@/components/GalleryCarousel";
import { MaterialsShowcase } from "@/components/MaterialsShowcase";
import {
  BookOpen,
  CalendarRange,
  MousePointerClick,
  Newspaper,
  type LucideIcon,
} from "lucide-react";
import {
  CASES,
  getCase,
  type CardIcon,
  type CaseSection,
  type CaseStudy,
} from "@/data/cases";

export const Route = createFileRoute("/cases/$slug")({
  loader: ({ params }) => {
    const item = getCase(params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Projeto não encontrado | Raquel Villas" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { item } = loaderData;
    const title = `${item.title} | Raquel Villas`;
    return {
      meta: [
        { title },
        { name: "description", content: item.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: item.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/cases/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/cases/${params.slug}` }],
    };
  },
  component: CasePage,
});

const CARD_ICONS: Record<CardIcon, LucideIcon> = {
  calendar: CalendarRange,
  book: BookOpen,
  cursor: MousePointerClick,
  newspaper: Newspaper,
};

const CARD_ICON_COLORS = [
  "bg-[#D2DB76] text-[#2B301C]",
  "bg-[#FFC3CC] text-[#2B301C]",
  "bg-[#2B301C] text-[#F7F6EC]",
];

function SectionCards({ section }: { section: CaseSection }) {
  return (
    <div className="py-4">
      <Reveal>
        <h2 className="label">{section.heading}</h2>
        <p className="mt-4 max-w-2xl font-serif text-2xl leading-snug">{section.body}</p>
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {section.cards?.map((c, i) => {
          const Icon = CARD_ICONS[c.icon];
          return (
            <Reveal key={c.title} delay={i * 60} className="h-full">
              <div className="flex h-full flex-col items-center rounded-2xl border border-rule bg-card px-6 py-9 text-center transition-colors hover:border-primary/40">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${CARD_ICON_COLORS[i % CARD_ICON_COLORS.length]}`}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 max-w-[14rem] font-serif text-lg leading-snug text-balance">
                  {c.title}
                </h3>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

function CasePage() {
  const { item } = Route.useLoaderData() as { item: CaseStudy };
  const hasImages = item.gallery.some((g) => g.src) || !!item.materials;
  const next = CASES[(CASES.findIndex((c) => c.slug === item.slug) + 1) % CASES.length]!;

  return (
    <article>
      <header className="border-b border-rule px-5 pt-16 pb-14 md:px-10 md:pt-28 md:pb-20">
        <div
          className={`mx-auto max-w-[1400px] ${item.video ? "grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-10" : ""}`}
        >
          <Reveal>
            <Link to={item.categoryHref} className="label text-primary link-underline">
              {item.category}
            </Link>
            <h1 className="mt-6 max-w-5xl font-serif text-[2.75rem] leading-[1] md:text-8xl">
              {item.title}
            </h1>
            <p className="mt-8 max-w-2xl font-serif text-xl leading-snug md:text-2xl">
              {item.summary}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {item.externalCta && (
                <a
                  href={item.externalCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#2B301C] px-6 py-3 font-sans text-sm font-bold text-[#F7F6EC] italic transition-transform hover:scale-105"
                >
                  {item.externalCta.label}
                </a>
              )}
              {hasImages && (
                <a
                  href="#galeria"
                  className="rounded-full border-2 border-[#2B301C] px-6 py-3 font-sans text-sm font-bold text-[#2B301C] italic transition-colors hover:bg-[#2B301C] hover:text-[#F7F6EC]"
                >
                  {item.materials ? "Ver materiais" : "Ver galeria"}
                </a>
              )}
            </div>
          </Reveal>
          {item.video && (
            <Reveal delay={120}>
              <div className={`relative ${item.videoMockup ? "pb-16 sm:pb-24 lg:pb-28" : ""}`}>
                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`Vídeo do projeto ${item.title}`}
                  className={`aspect-[16/10] w-full rounded-3xl border border-rule bg-muted object-cover ${item.videoMockup ? "ml-auto sm:w-[82%]" : ""}`}
                />
                {item.videoMockup && (
                  <img
                    src={item.videoMockup}
                    alt={`Tela do projeto ${item.title} em um notebook`}
                    className="absolute bottom-0 left-0 w-[70%] drop-shadow-[0_24px_32px_rgba(43,48,28,0.25)] sm:w-[58%]"
                  />
                )}
              </div>
            </Reveal>
          )}
        </div>
      </header>

      {item.process && !item.journeyTitle && (
        <section className="border-b border-rule px-5 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <p className="font-mono text-sm font-semibold tracking-[0.08em] text-foreground uppercase md:text-base">
                Processo
              </p>
              {item.flow && (
                <p className="mt-6 font-mono text-[11px] tracking-[0.16em] uppercase">
                  {item.flow.join(" → ")}
                </p>
              )}
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {item.process.map((p, i) => (
                <Reveal key={p.n} delay={i * 60}>
                  <div className="h-full rounded-2xl border border-rule bg-card p-6">
                    <p className="label">{p.n}</p>
                    <h3 className="mt-4 font-serif text-2xl">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-b border-rule px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          {item.journeyTitle ? (
            <div className="border-b border-rule pb-16">
              <JourneyPath title={item.journeyTitle} steps={item.sections} />
            </div>
          ) : (
            item.sections.map((s, i) =>
              s.cards ? (
                <SectionCards key={s.heading} section={s} />
              ) : (
                <Reveal key={s.heading} delay={i * 50}>
                  <div className="grid gap-4 border-b border-rule py-10 md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:gap-16">
                    <h2 className="label pt-2">{s.heading}</h2>
                    <div>
                      <p className="max-w-2xl text-lg leading-relaxed">{s.body}</p>
                      {s.bullets && (
                        <ul className="mt-6 grid max-w-2xl gap-2 sm:grid-cols-2">
                          {s.bullets.map((b) => (
                            <li
                              key={b}
                              className="border-b border-border pb-2 text-sm text-muted-foreground"
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </Reveal>
              ),
            )
          )}

          {item.results && item.results.length > 0 && (
            <Reveal>
              <div className="grid gap-4 border-b border-rule py-10 md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:gap-16">
                <h2 className="label pt-2">Resultados</h2>
                <ul className="space-y-3">
                  {item.results.map((r) => (
                    <li key={r} className="font-serif text-2xl">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          {(item.learnings || item.tools) && (
            <div className="grid gap-10 py-10 md:grid-cols-2 md:gap-16">
              {item.learnings && (
                <Reveal>
                  <div>
                    <h2 className="label">Aprendizados</h2>
                    <ol className="mt-6 max-w-2xl space-y-4">
                      {item.learnings.map((l, i) => (
                        <li key={l} className="flex gap-5">
                          <span className="label pt-1">0{i + 1}</span>
                          <span className="leading-relaxed">{l}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </Reveal>
              )}

              {item.tools && (
                <Reveal>
                  <div>
                    <h2 className="label">Ferramentas</h2>
                    <p className="mt-6 text-muted-foreground">{item.tools.join(" · ")}</p>
                  </div>
                </Reveal>
              )}
            </div>
          )}
        </div>
      </section>

      <section
        id="galeria"
        className="scroll-mt-28 border-b border-rule px-5 py-16 md:px-10 md:py-20"
      >
        <div className="mx-auto max-w-[1400px]">
          {item.materials ? (
            <MaterialsShowcase items={item.materials} />
          ) : item.galleryStyle === "carousel" ? (
            <GalleryCarousel
              title="Galeria"
              items={item.gallery.flatMap((g) =>
                g.src ? [{ caption: g.caption, src: g.src }] : [],
              )}
            />
          ) : (
            <>
              <Reveal>
                <p className="font-mono text-sm font-semibold tracking-[0.08em] text-foreground uppercase md:text-base">
                  Galeria
                </p>
              </Reveal>
              <div className="mt-10 grid gap-5 md:grid-cols-6">
                {item.gallery.map((g, i) => (
                  <Reveal
                    key={g.caption + i}
                    delay={i * 70}
                    className={
                      g.ratio === "wide"
                        ? "md:col-span-6"
                        : g.ratio === "tall"
                          ? "md:col-span-2"
                          : "md:col-span-3"
                    }
                  >
                    <ImagePlaceholder caption={g.caption} ratio={g.ratio} src={g.src} />
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-sm font-semibold tracking-[0.08em] text-foreground uppercase md:text-base">
            Próximo projeto
          </p>
          <Link
            to="/cases/$slug"
            params={{ slug: next.slug }}
            className="group mt-6 block rounded-3xl border border-rule bg-card p-8 transition-colors hover:border-primary md:p-10"
          >
            <h2 className="font-serif text-4xl transition-colors group-hover:text-primary md:text-6xl">
              {next.title}
            </h2>
            <span className="mt-4 inline-flex w-fit items-center rounded-full bg-[#2B301C] px-5 py-2.5 font-sans text-sm font-bold text-[#F7F6EC] italic transition-transform group-hover:scale-105">
              Ver projeto →
            </span>
          </Link>
        </div>
      </section>
    </article>
  );
}
