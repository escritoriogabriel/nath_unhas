import { createFileRoute } from "@tanstack/react-router";
import { Share2, Sparkles } from "lucide-react";
import type { CSSProperties } from "react";

export const Route = createFileRoute("/links")({
  component: LinksPage,
});

const links = [
  {
    label: "Serviços e Valores",
    href: "https://nathaliaparteka.com.br/",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/message/RC547FBKEJP6A1",
  },
];

function LinksPage() {
  return (
    <main className="links-page">
      <div className="links-orb links-orb-top" />
      <div className="links-orb links-orb-bottom" />
      <div className="links-grain" aria-hidden="true" />

      <div className="links-shell">
        <header className="links-header">
          <div className="links-header-actions">
            <span className="links-action" aria-hidden="true">
              <Sparkles size={15} strokeWidth={2.2} />
            </span>
            <button className="links-share" type="button" aria-label="Compartilhar página">
              <Share2 size={15} strokeWidth={2.2} />
            </button>
          </div>

          <img className="links-avatar" src="/nathalia-avatar.jpeg" alt="Nathália Parteka" />
          <div className="links-identity">
            <h1>Nathália Parteka</h1>
            <p className="links-bio">
              Nail art <span>·</span> Esmaltação em Gel <span>·</span> Molde F1
            </p>
          </div>
        </header>

        <section className="links-list" aria-label="Links principais">
          <a
            className="link-feature"
            href="https://www.nathaliaparteka.com.br/formacao"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/curso-esmaltacao-gel.jpeg" alt="Nail art em esmaltação em gel" />
            <span className="link-feature-caption">Curso Esmaltação em Gel</span>
          </a>

          {links.map((link, index) => (
            <a
              className="link-card"
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noreferrer"
              style={{ "--link-delay": `${(index + 1) * 80}ms` } as CSSProperties}
            >
              <strong>{link.label}</strong>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}
