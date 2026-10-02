import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, MessageCircle, MoreHorizontal, Sparkles } from "lucide-react";
import type { CSSProperties } from "react";

export const Route = createFileRoute("/links")({
  component: LinksPage,
});

const links = [
  {
    label: "Agende seu horário",
    description: "Atendimento exclusivo em Balneário Camboriú",
    href: "https://wa.me/5547997041491?text=Ol%C3%A1%20Nath%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.",
    featured: true,
    icon: <MessageCircle aria-hidden="true" size={18} strokeWidth={1.8} />,
  },
  {
    label: "Serviços & valores",
    description: "Escolha o cuidado ideal para suas unhas",
    href: "https://www.nathaliaparteka.com.br/",
    icon: <Sparkles aria-hidden="true" size={18} strokeWidth={1.8} />,
  },
  {
    label: "Formação em esmaltação em gel",
    description: "Aprenda do zero ao avançado com a Nath",
    href: "https://www.nathaliaparteka.com.br/formacao",
    icon: <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />,
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
          <button className="links-menu" type="button" aria-label="Mais opções">
            <MoreHorizontal size={21} strokeWidth={2} />
          </button>

          <img
            className="links-avatar"
            src="https://www.nathaliaparteka.com.br/assets/img/quem_sou_eu2.jpeg"
            alt="Nathália Parteka, nail designer"
          />
          <p className="links-kicker">Nath Nail Art</p>
          <h1>Nathália Parteka</h1>
          <p className="links-bio">
            Nail art <span>·</span> Esmaltação em gel <span>·</span> Molde F1
          </p>
          <p className="links-intro">Seu próximo momento de cuidado começa aqui.</p>
        </header>

        <section className="links-list" aria-label="Links principais">
          {links.map((link, index) => (
            <a
              className={`link-card${link.featured ? " link-card-featured" : ""}`}
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noreferrer"
              style={{ "--link-delay": `${index * 80}ms` } as CSSProperties}
            >
              <span className="link-card-icon">{link.icon}</span>
              <span className="link-card-copy">
                <strong>{link.label}</strong>
                <small>{link.description}</small>
              </span>
              <ArrowUpRight
                className="link-card-arrow"
                aria-hidden="true"
                size={17}
                strokeWidth={1.8}
              />
            </a>
          ))}
        </section>

        <footer className="links-footer">
          <div className="links-socials" aria-label="Redes sociais">
            <a
              href="https://www.instagram.com/nathaliapartekaa/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={19} strokeWidth={1.8} />
            </a>
            <a
              href="https://wa.me/5547997041491"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={19} strokeWidth={1.8} />
            </a>
          </div>
          <p>
            feito com carinho por <span>Nath Nail Art</span>
          </p>
        </footer>
      </div>
    </main>
  );
}
