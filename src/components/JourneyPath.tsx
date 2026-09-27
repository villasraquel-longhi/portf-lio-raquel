import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  Compass,
  Hammer,
  Rocket,
  Search,
  Sparkles,
  Target,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import type { CaseSection } from "@/data/cases";

const ICONS: Record<string, LucideIcon> = {
  Contexto: Search,
  Objetivo: Target,
  "Minha atuação": Wrench,
  Estratégia: Compass,
  Execução: Hammer,
  Resultado: Rocket,
};

const NODE_COLORS = [
  "bg-[#D2DB76] text-[#2B301C]",
  "bg-[#FFC3CC] text-[#2B301C]",
  "bg-[#2B301C] text-[#F7F6EC]",
  "bg-[#EDEBD9] text-[#2B301C]",
];

// Maximum indent (in rem) of the steps at the peak of the arc, on large screens.
const ARC_DEPTH = 22;

type Point = { x: number; y: number };

// Smooth curve through the points (Catmull-Rom converted to cubic Béziers).
function smoothPath(p: Point[]) {
  let d = `M ${p[0]!.x} ${p[0]!.y}`;
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] ?? p[i]!;
    const p1 = p[i]!;
    const p2 = p[i + 1]!;
    const p3 = p[i + 2] ?? p2;
    const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 };
    const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 };
    d += ` C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

export function JourneyPath({ title, steps }: { title: string; steps: CaseSection[] }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [path, setPath] = useState("");

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const draw = () => {
      const box = el.getBoundingClientRect();
      const pts = [...el.querySelectorAll<HTMLElement>("[data-node]")].map((n) => {
        const r = n.getBoundingClientRect();
        return { x: r.left - box.left + r.width / 2, y: r.top - box.top + r.height / 2 };
      });
      if (pts.length < 2) return setPath("");
      const first = pts[0]!;
      const last = pts[pts.length - 1]!;
      const curved = pts.some((p) => Math.abs(p.x - first.x) > 1);
      // On the arc layout the line enters and leaves from the left edge, as in a journey.
      const lead = curved
        ? { x: first.x - 180, y: first.y - 110 }
        : { x: first.x, y: first.y - 48 };
      const tail = curved ? { x: last.x - 180, y: last.y + 110 } : { x: last.x, y: last.y + 48 };
      setPath(smoothPath([lead, ...pts, tail]));
    };
    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(el);
    return () => ro.disconnect();
  }, [steps]);

  return (
    <div ref={wrap} className="relative py-6 lg:py-16">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      >
        <path
          d={path}
          fill="none"
          stroke="#D2DB76"
          strokeWidth={6}
          strokeLinecap="round"
          strokeDasharray="18 16"
        />
      </svg>

      <Reveal className="relative mb-14 lg:absolute lg:top-1/2 lg:left-0 lg:mb-0 lg:w-[18rem] lg:-translate-y-1/2">
        <h2 className="font-serif text-4xl leading-[1.02] font-bold md:text-6xl">{title}</h2>
      </Reveal>

      <ol className="relative space-y-14 md:space-y-20">
        {steps.map((s, i) => {
          const Icon = ICONS[s.heading] ?? Sparkles;
          const indent = ARC_DEPTH * Math.sin((Math.PI * (i + 0.5)) / steps.length);
          return (
            <li
              key={s.heading}
              className="flex items-start gap-5 md:gap-8 lg:ml-(--indent)"
              style={{ "--indent": `${indent.toFixed(2)}rem` } as CSSProperties}
            >
              <div
                data-node
                className={`flex size-16 shrink-0 items-center justify-center rounded-full md:size-28 ${NODE_COLORS[i % NODE_COLORS.length]}`}
              >
                <Icon className="size-7 md:size-11" strokeWidth={2} aria-hidden="true" />
              </div>
              <Reveal delay={i * 80} className="max-w-xl min-w-0 bg-background pt-1 pb-2 md:pt-5">
                <h3 className="font-serif text-2xl font-bold md:text-3xl">{s.heading}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
                {s.bullets && (
                  <ul className="mt-4 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-[#2B301C]"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
