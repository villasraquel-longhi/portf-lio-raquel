import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { NAV, PROFILE } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const active = NAV.find((item) => item.to !== "/" && pathname.startsWith(item.to));
  const subItems = active?.children;

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-background/90 backdrop-blur-md">
      {/* Linha 1 — marca */}
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 pt-6 pb-4 md:px-10">
        <Link to="/" className="min-w-0 font-serif text-2xl tracking-tight md:text-3xl">
          {PROFILE.name}
        </Link>

        <p className="hidden font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase md:block">
          Marketing · Inbound · CRM · Conteúdo B2B
        </p>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Linha 2 — abas fixas */}
      <nav
        aria-label="Navegação principal"
        className="mx-auto hidden max-w-[1400px] items-center gap-8 px-5 md:px-10 lg:flex"
      >
        {NAV.filter((i) => i.to !== "/sobre").map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="-mb-px border-b-2 border-transparent py-3 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            activeProps={{ className: "border-foreground text-foreground" }}
            activeOptions={{ exact: item.to === "/" }}
          >
            {item.label}
          </Link>
        ))}
        <span className="ml-auto flex items-center gap-6">
          <Link
            to="/sobre"
            className="-mb-px border-b-2 border-transparent py-3 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            activeProps={{ className: "border-foreground text-foreground" }}
          >
            Sobre
          </Link>
          <Link
            to="/sobre"
            hash="contato"
            className="my-1 border border-foreground px-4 py-2 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors hover:bg-foreground hover:text-background"
          >
            Contato
          </Link>
        </span>
      </nav>

      {/* Linha 3 — subáreas fixas da seção ativa */}
      {subItems && active && (
        <div className="hidden border-t border-rule bg-secondary/40 lg:block">
          <nav
            aria-label={`Subáreas de ${active.label}`}
            className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-7 gap-y-1 px-5 py-2.5 md:px-10"
          >
            {subItems.map((child, i) => (
              <Link
                key={child.hash}
                to={active.to}
                hash={child.hash}
                className="group font-mono text-[10.5px] tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-primary"
              >
                <span className="mr-2 text-primary/60">0{i + 1}</span>
                {child.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Mobile */}
      {open && (
        <nav
          aria-label="Navegação principal"
          className="max-h-[80vh] overflow-y-auto border-t border-rule px-5 pb-10 lg:hidden"
        >
          {NAV.map((item) => (
            <div key={item.to} className="border-b border-border py-4">
              <Link to={item.to} className="block font-serif text-2xl">
                {item.label}
              </Link>
              {item.children && (
                <ul className="mt-3 space-y-2 border-l border-rule pl-4">
                  {item.children.map((child) => (
                    <li key={child.hash}>
                      <Link
                        to={item.to}
                        hash={child.hash}
                        className="block font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <Link
            to="/sobre"
            hash="contato"
            className="mt-6 inline-block border border-foreground px-5 py-3 font-mono text-[11px] tracking-[0.16em] uppercase"
          >
            Contato
          </Link>
        </nav>
      )}
    </header>
  );
}
