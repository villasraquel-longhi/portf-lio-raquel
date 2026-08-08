import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { NAV, PROFILE, type NavItem } from "@/data/site";

function DesktopItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const hide = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      <Link
        to={item.to}
        aria-haspopup={item.children ? "true" : undefined}
        aria-expanded={item.children ? open : undefined}
        className="link-underline block py-2 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-foreground"
        activeProps={{ className: "text-foreground" }}
        activeOptions={{ exact: item.to === "/" }}
      >
        {item.label}
      </Link>

      {item.children && open && (
        <div className="absolute top-full left-0 z-50 w-[22rem] border border-rule bg-background p-2 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.35)]">
          {item.children.map((child, i) => (
            <Link
              key={child.hash}
              to={item.to}
              hash={child.hash}
              className="group block px-4 py-3 transition-colors hover:bg-secondary"
            >
              <span className="label mr-3">0{i + 1}</span>
              <span className="font-serif text-lg transition-colors group-hover:text-primary">
                {child.label}
              </span>
              <span className="mt-1 block text-xs text-muted-foreground">{child.text}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-10 lg:flex lg:justify-between">
        <Link to="/" className="min-w-0 font-mono text-xs tracking-[0.2em] uppercase">
          {PROFILE.name}
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <DesktopItem key={item.to} item={item} />
          ))}
          <Link
            to="/sobre"
            hash="contato"
            className="border border-foreground px-4 py-2 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors hover:bg-foreground hover:text-background"
          >
            Contato
          </Link>
        </nav>

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
