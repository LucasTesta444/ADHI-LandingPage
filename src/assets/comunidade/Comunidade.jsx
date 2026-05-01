import "./Comunidade.css";
import { motion } from "motion/react";

import iconWpp from "../images/icon-wpp.svg";
import lifestyleImage from "../images/alimentos.webp";
import communityImage from "../images/pessoas-2.webp";

function Comunidade() {
  return (
    <section className="container-comunidade" id="comunidade">
      <motion.div
        className="comunidade-content"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <p className="comunidade-label">COMUNIDADE</p>

        <div className="comunidade-text">
          <h1>
            Você não está <span>sozinho</span>
          </h1>
          <p>
            Junte-se ao nosso grupo de apoio no WhatsApp! Atendimento,
            orientações, encontros presenciais e acompanhamento de saúde, tudo
            para você viver melhor.
          </p>
          <p>
            Por apenas <strong>R$49,90 por mês</strong>, você garante orientação
            e suporte focado na sua saúde, com profissionais dedicados e uma
            comunidade que se importa.
          </p>
        </div>

        <a className="comunidade-button" href="https://chat.whatsapp.com/JSuB7ADFUpMExDCXx15WzF?mode=gi_t" target="_blank"
          rel="noreferrer" aria-label="Entrar no grupo do WhatsApp">
          <img src={iconWpp} alt="" aria-hidden="true" />
          <span>Entrar no grupo do WhatsApp</span>
        </a>
      </motion.div>

      <motion.div
        className="comunidade-gallery"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="comunidade-main-image">
          <img src={communityImage} alt="Atividades em comunidade" />
        </div>

        <div className="comunidade-floating-image">
          <img src={lifestyleImage} alt="Alimentação saudável" />
        </div>
      </motion.div>
    </section>
  );
}

export default Comunidade;
