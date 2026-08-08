import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import type { CaseStudy } from "@/data/cases";

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
          <p className="label">{label}</p>
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
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      {steps.map((s, i) => (
        <span key={s} className="flex items-center gap-4">
          <span className="font-mono text-[11px] tracking-[0.16em] uppercase">{s}</span>
          {i < steps.length - 1 && <span className="text-primary">→</span>}
        </span>
      ))}
    </div>
  );
}

export function ProjectIndex({
  items,
}: {
  items: { n: string; title: string; text: string; slug?: string }[];
}) {
  return (
    <div className="border-t border-rule">
      {items.map((item, i) => (
        <Reveal key={item.n} delay={i * 60}>
          <article className="group grid gap-4 border-b border-rule py-10 md:grid-cols-[6rem_minmax(0,1fr)_minmax(0,1.1fr)] md:gap-10 md:py-14">
            <p className="label pt-2">{item.n}</p>
            <h3 className="font-serif text-3xl md:text-4xl">
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
            <p className="max-w-xl leading-relaxed text-muted-foreground">{item.text}</p>
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
        className="group block border-t border-rule py-10 md:py-12"
      >
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-12">
          <div>
            <p className="label text-primary">{item.category}</p>
            <h3 className="mt-4 font-serif text-4xl transition-colors group-hover:text-primary md:text-5xl">
              {item.title}
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{item.summary}</p>
            <span className="mt-6 inline-block font-mono text-[11px] tracking-[0.16em] uppercase">
              Ver projeto →
            </span>
          </div>
          <div className="transition-transform duration-500 group-hover:-translate-y-1">
            <ImagePlaceholder caption={item.gallery[0]?.caption ?? "[INSERIR IMAGEM]"} />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
