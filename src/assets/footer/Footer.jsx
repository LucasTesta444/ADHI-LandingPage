import { Mail, MapPin, Phone } from "lucide-react";
import "./Footer.css";

import adhiLogo from "../images/adhi-logo.webp";

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle className="instagram-dot" cx="17" cy="7" r="1" />
    </svg>
  );
}

const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Comunidade", href: "#comunidade" },
  { label: "Dúvidas", href: "#duvidas" },
];

function Footer() {
  return (
    <footer className="container-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={adhiLogo} alt="ADHI" />
          </div>
          <p>
            Associação dos Diabéticos, Hipertensos e Obesos de Angra dos Reis.
          </p>
        </div>

        <nav className="footer-column" aria-label="Links do rodapé">
          <h2>LINKS</h2>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-column footer-contact">
          <h2>CONTATO</h2>
          <ul>
            <li>
              <Mail aria-hidden="true" />
              <a href="mailto:contato@adhiangra.com.br">
                contato@adhiangra.com.br
              </a>
            </li>
            <li>
              <Phone aria-hidden="true" />
              <a href="tel:+5524998428002">(24) 99842-8002</a>
            </li>
            <li>
              <MapPin aria-hidden="true" />
              <span>Angra dos Reis — RJ</span>
            </li>
          </ul>
        </div>

        <div className="footer-column footer-social">
          <h2>SIGA-NOS</h2>
          <div className="footer-social-links">
            <a href="#" aria-label="Facebook">
              <span aria-hidden="true">f</span>
            </a>
            <a href="#" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 ADHI — Associação dos Diabéticos, Hipertensos e Obesos de Angra
          dos Reis. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
