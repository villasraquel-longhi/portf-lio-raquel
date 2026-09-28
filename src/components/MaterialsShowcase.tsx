import { Reveal } from "@/components/Reveal";
import type { RichMaterial } from "@/data/cases";

const COVER_TINTS = ["bg-[#D2DB76]", "bg-[#FFC3CC]"];

/** Browser-framed landing page thumbnail that slowly scrolls through the page. */
function LpThumbnail({
  src,
  title,
  href,
}: {
  src: string;
  title: string;
  href?: string | undefined;
}) {
  const host = href ? new URL(href).host + new URL(href).pathname : "";
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-rule bg-card shadow-[0_18px_40px_-24px_rgba(43,48,28,0.45)]">
      <div className="flex items-center gap-1.5 border-b border-rule bg-muted px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#FFC3CC]" />
        <span className="h-2 w-2 rounded-full bg-[#D2DB76]" />
        <span className="h-2 w-2 rounded-full bg-[#2B301C]/30" />
        {host && (
          <span className="ml-2 truncate font-mono text-[10px] tracking-wide text-muted-foreground">
            {host}
          </span>
        )}
      </div>
      <img
        src={src}
        alt={`Landing page do material ${title}`}
        loading="lazy"
        className="aspect-[16/10] min-h-0 w-full flex-1 animate-[lp-scroll_18s_ease-in-out_infinite] object-cover md:aspect-auto"
      />
    </div>
  );
}

function MaterialRow({ item, index }: { item: RichMaterial; index: number }) {
  const flip = index % 2 === 1;
  return (
    <Reveal>
      {/* On desktop each material fits in a single viewport. */}
      <article
        className={`group grid items-stretch gap-6 md:gap-10 ${item.lpShot ? "md:h-[min(calc(100svh-9rem),40rem)]" : ""} ${flip ? "md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]" : "md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]"}`}
      >
        <div
          className={`relative flex items-center justify-center self-center overflow-hidden rounded-3xl p-6 md:p-7 ${COVER_TINTS[index % COVER_TINTS.length]} ${flip ? "md:order-2" : ""}`}
        >
          {item.cover ? (
            <div
              className={`relative w-fit max-w-full transition-transform duration-700 group-hover:scale-[1.03] ${item.coverInset ? "mr-5 mb-8" : ""}`}
            >
              <img
                src={item.cover}
                alt={`Capa do material ${item.title}`}
                loading="lazy"
                className="max-h-[22rem] w-auto max-w-full rounded-2xl bg-white object-contain shadow-[0_24px_40px_-16px_rgba(43,48,28,0.45)] md:max-h-[min(calc(100svh-14rem),33rem)]"
              />
              {item.coverInset && (
                <img
                  src={item.coverInset}
                  alt={`Capa do material ${item.title}`}
                  loading="lazy"
                  className="absolute -right-5 -bottom-8 w-[55%] rounded-xl border-4 border-[#F7F6EC] shadow-[0_24px_40px_-12px_rgba(43,48,28,0.55)]"
                />
              )}
            </div>
          ) : (
            <p className="label text-center leading-relaxed text-[#2B301C]">
              [INSERIR CAPA — {item.title}]
            </p>
          )}
        </div>

        <div
          className={`flex min-h-0 flex-col gap-6 ${item.lpShot ? "justify-between" : "justify-center"}`}
        >
          <div>
            <p className="label text-primary">
              {item.company} · {item.format}
            </p>
            <h3 className="mt-4 font-sans text-2xl leading-[1.05] font-bold tracking-tight uppercase md:text-3xl">
              {item.title}
            </h3>
            <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">{item.text}</p>
            {item.audience && (
              <p className="mt-5 max-w-lg text-sm leading-relaxed">
                <span className="label mr-2">Público</span>
                {item.audience}
              </p>
            )}
            {item.href && (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-fit items-center rounded-full bg-[#2B301C] px-5 py-2.5 font-sans text-sm font-bold text-[#F7F6EC] italic transition-transform hover:scale-105"
              >
                Ver landing page →
              </a>
            )}
          </div>
          {item.lpShot && <LpThumbnail src={item.lpShot} title={item.title} href={item.href} />}
        </div>
      </article>
    </Reveal>
  );
}

export function MaterialsShowcase({ items }: { items: RichMaterial[] }) {
  const companies = [...new Set(items.map((m) => m.company))];
  return (
    <div className="space-y-28 md:space-y-44">
      {companies.map((company) => (
        <div key={company}>
          <Reveal>
            <p className="font-mono text-sm font-semibold tracking-[0.08em] text-foreground uppercase md:text-base">
              Materiais {company}
            </p>
          </Reveal>
          <div className="mt-12 space-y-24 md:space-y-40">
            {items
              .filter((m) => m.company === company)
              .map((m, i) => (
                <MaterialRow key={m.title} item={m} index={i} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
