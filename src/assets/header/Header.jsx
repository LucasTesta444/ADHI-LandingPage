import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import "./Header.css";

import adhiLogo from "../images/adhi-logo.webp";
import iconWpp from "../images/icon-wpp.svg";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 16);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div
      className={`container-header ${isScrolled ? "header-scrolled" : ""}`}
    >
      <div className="header-logo">
        <img src={adhiLogo} alt="logo-adhi" />
      </div>

      <button
        className="header-menu-toggle"
        type="button"
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isMenuOpen}
        aria-controls="header-menu"
        onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
      >
        {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav
        className={`header-actions ${isMenuOpen ? "header-actions-open" : ""}`}
        id="header-menu"
        aria-label="Navegação principal"
      >
        <a href="#inicio" onClick={closeMenu}>
          Início
        </a>
        <a href="#beneficios" onClick={closeMenu}>
          Benefícios
        </a>
        <a href="#comunidade" onClick={closeMenu}>
          Comunidade
        </a>
        <a href="#duvidas" onClick={closeMenu}>
          Dúvidas
        </a>

        <a
          className="header-button"
          href="https://chat.whatsapp.com/JSuB7ADFUpMExDCXx15WzF?mode=gi_t"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          <img src={iconWpp} alt="icon whatsapp" />
          <span>Entrar no Grupo</span>
        </a>
      </nav>
    </div>
  );
}

export default Header;
