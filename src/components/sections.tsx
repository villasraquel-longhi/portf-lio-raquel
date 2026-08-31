import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import type { CaseStudy } from "@/data/cases";

export function ToolsField({ edicao, genAI }: { edicao: string[]; genAI: string[] }) {
  return (
    <div>
      <p className="label font-semibold">Ferramentas</p>
      <div className="mt-3 space-y-3">
        <div>
          <p className="text-xs text-muted-foreground">Ferramentas de edição</p>
          <p className="mt-1.5 text-sm text-foreground">{edicao.join(" · ")}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">GEN AI</p>
          <p className="mt-1.5 text-sm text-foreground">{genAI.join(" · ")}</p>
        </div>
      </div>
    </div>
  );
}

export function PageHero({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="border-b border-rule px-5 pt-20 pb-16 md:px-10 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="font-mono text-sm font-semibold tracking-[0.08em] text-foreground uppercase md:text-base">
            {label}
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-[2.75rem] leading-[1.02] md:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {subtitle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function FlowLine({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      {steps.map((s, i) => (
        <span key={s} className="flex items-center gap-3">
          <span className="rounded-full border border-border px-3.5 py-1.5 font-mono text-[11px] tracking-[0.16em] uppercase">
            {s}
          </span>
          {i < steps.length - 1 && <span className="text-primary">→</span>}
        </span>
      ))}
    </div>
  );
}

export function ProjectIndex({
  items,
}: {
  items: { n: string; title: string; text: string; slug?: string; id?: string }[];
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {items.map((item, i) => (
        <Reveal key={item.n} delay={i * 60}>
          <article
            id={item.id}
            className="group h-full scroll-mt-28 rounded-2xl border border-rule bg-card p-6 md:p-8"
          >
            <p className="label">{item.n}</p>
            <h3 className="mt-4 font-serif text-2xl md:text-3xl">
              {item.slug ? (
                <Link
                  to="/cases/$slug"
                  params={{ slug: item.slug }}
                  className="link-underline transition-colors group-hover:text-primary"
                >
                  {item.title}
                </Link>
              ) : (
                item.title
              )}
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function CaseCard({ item, index }: { item: CaseStudy; index: number }) {
  return (
    <Reveal delay={index * 70}>
      <Link
        to="/cases/$slug"
        params={{ slug: item.slug }}
        className="group grid gap-6 rounded-3xl border border-rule bg-card p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-10 md:p-8"
      >
        <div className="overflow-hidden rounded-2xl transition-transform duration-500 group-hover:-translate-y-1 md:order-2">
          <ImagePlaceholder caption={item.gallery[0]?.caption ?? "[INSERIR IMAGEM]"} />
        </div>
        <div className="flex flex-col justify-center md:order-1">
          <p className="label text-primary">{item.category}</p>
          <h3 className="mt-4 font-serif text-3xl transition-colors group-hover:text-primary md:text-4xl">
            {item.title}
          </h3>
          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{item.summary}</p>
          <span className="mt-6 inline-flex w-fit items-center rounded-full bg-[#2B301C] px-5 py-2.5 font-sans text-sm font-bold text-[#F7F6EC] italic transition-transform group-hover:scale-105">
            Ver projeto →
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
