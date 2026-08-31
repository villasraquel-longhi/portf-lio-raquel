import { PROFILE } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule px-5 py-16 md:px-10">
      <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl">{PROFILE.name}</h2>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">{PROFILE.headline}</p>
          <p className="mt-8 font-serif text-lg text-primary italic">
            Feito com estratégia, conteúdo e curiosidade.
          </p>
        </div>
        <ul className="flex flex-col gap-3 md:items-end">
          <li>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-mono text-[11px] tracking-[0.16em] uppercase hover:text-primary"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`mailto:${PROFILE.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-mono text-[11px] tracking-[0.16em] uppercase hover:text-primary"
            >
              E-mail
            </a>
          </li>
          <li>
            <a
              href={PROFILE.site}
              className="link-underline font-mono text-[11px] tracking-[0.16em] uppercase hover:text-primary"
            >
              Site
            </a>
          </li>
        </ul>
      </div>
      <div className="mx-auto mt-14 max-w-[1400px] border-t border-border pt-6">
        <p className="label">© {new Date().getFullYear()} {PROFILE.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
