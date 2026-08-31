import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { NAV, type NavItem } from "@/data/site";

function NavItemWithDropdown({
  item,
}: {
  item: NavItem & { children: NonNullable<NavItem["children"]> };
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const openNow = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <span
      className="relative flex items-center"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
    >
      <Link
        to={item.to}
        className="-mb-px border-b-2 border-transparent py-5 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-foreground"
        activeProps={{ className: "border-foreground text-foreground" }}
      >
        {item.label}
      </Link>
      <button
        type="button"
        aria-label={`Abrir submenu de ${item.label}`}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`-mb-px flex items-center border-b-2 border-transparent py-5 pl-1.5 outline-none transition-colors hover:text-foreground ${open ? "text-primary" : "text-muted-foreground"}`}
      >
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={`Subáreas de ${item.label}`}
          className="absolute top-full left-0 z-50 mt-2 w-72 overflow-hidden rounded-2xl border border-rule bg-background"
        >
          {item.children.map((child, i) => (
            <Link
              key={child.hash}
              to={item.to}
              hash={child.hash}
              role="menuitem"
              className="group flex flex-col gap-1 border-b border-border px-4 py-5 transition-colors last:border-b-0 hover:bg-secondary"
            >
              <span className="font-mono text-[10.5px] tracking-[0.14em] text-primary/70 uppercase">
                0{i + 1}
              </span>
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase transition-colors group-hover:text-primary">
                {child.label}
              </span>
              <span className="text-xs text-muted-foreground">{child.text}</span>
            </Link>
          ))}
        </div>
      )}
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-background/90 backdrop-blur-md">
      {/* Linha 0 — utilitária */}
      <div className="bg-[#2B301C] px-5 py-1.5 md:px-10">
        <p className="mx-auto max-w-[1400px] font-mono text-[10px] tracking-[0.14em] text-[#F7F6EC] uppercase">
          Portfólio | Raquel Villas
        </p>
      </div>

      {/* Linha 1 — utilitária mobile */}
      <div className="mx-auto flex max-w-[1400px] items-center justify-end gap-4 px-5 py-3 md:px-10 lg:hidden">
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
        {NAV.map((item) =>
          item.children ? (
            <NavItemWithDropdown key={item.to} item={{ ...item, children: item.children }} />
          ) : (
            <Link
              key={item.to}
              to={item.to}
              className="-mb-px border-b-2 border-transparent py-5 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-foreground"
              activeProps={{ className: "border-foreground text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ),
        )}
        <span className="ml-auto flex items-center gap-6">
          <Link
            to="/"
            hash="contato"
            className="my-1 rounded-full bg-[#2B301C] px-4 py-2 font-sans text-sm font-bold text-[#F7F6EC] italic transition-transform hover:scale-105"
          >
            Contato
          </Link>
        </span>
      </nav>

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
            to="/"
            hash="contato"
            className="mt-6 inline-block rounded-full bg-[#2B301C] px-5 py-3 font-sans text-sm font-bold text-[#F7F6EC] italic"
          >
            Contato
          </Link>
        </nav>
      )}
    </header>
  );
}
