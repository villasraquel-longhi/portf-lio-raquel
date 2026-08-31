import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CASES, getCase, type CaseStudy } from "@/data/cases";

export const Route = createFileRoute("/cases/$slug")({
  loader: ({ params }) => {
    const item = getCase(params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Projeto não encontrado | Raquel Villas" }, { name: "robots", content: "noindex" }],
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

function CasePage() {
  const { item } = Route.useLoaderData() as { item: CaseStudy };
  const next = CASES[(CASES.findIndex((c) => c.slug === item.slug) + 1) % CASES.length]!;

  return (
    <article>
      <header className="border-b border-rule px-5 pt-16 pb-14 md:px-10 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-[1400px]">
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
            {item.externalCta && (
              <a
                href={item.externalCta.href}
                className="mt-10 inline-block rounded-full bg-[#2B301C] px-6 py-3 font-sans text-sm font-bold text-[#F7F6EC] italic transition-transform hover:scale-105"
              >
                {item.externalCta.label}
              </a>
            )}
          </Reveal>
        </div>
      </header>

      {item.process && (
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
          {item.sections.map((s, i) => (
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
          ))}

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

          {item.learnings && (
            <Reveal>
              <div className="grid gap-4 border-b border-rule py-10 md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:gap-16">
                <h2 className="label pt-2">Aprendizados</h2>
                <ol className="max-w-2xl space-y-4">
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
              <div className="grid gap-4 py-10 md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:gap-16">
                <h2 className="label pt-2">Ferramentas</h2>
                <p className="text-muted-foreground">{item.tools.join(" · ")}</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="border-b border-rule px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1400px]">
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
                <ImagePlaceholder caption={g.caption} ratio={g.ratio} />
              </Reveal>
            ))}
          </div>
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
