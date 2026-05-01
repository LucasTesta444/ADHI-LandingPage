import { motion } from "motion/react";
import "./Home.css";

import arrowDown from "../images/arrow-down.svg";
import downloadIcon from "../images/download.svg";
import peopleInfo from "../images/pessoas.webp";

const stats = [
  { value: "500+", label: "Membros ativos" },
  { value: "12", label: "Anos de atuação" },
  { value: "100%", label: "Gratuito" },
];

function Home() {
  return (
    <section className="container-home" id="inicio">
      <div className="home-inner">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="ball">
            <span></span>
            Associação ADHI — Angra dos Reis
          </div>

          <div className="text-home">
            <h1>
              Cuidar da sua saúde <span>nunca foi</span> tão acolhedor
            </h1>
            <p>
              Um guia prático com orientações essenciais para diabéticos,
              hipertensos e pessoas que buscam mais qualidade de vida no dia a
              dia.
            </p>
          </div>

          <div className="button-home">
            <a className="home-button-download" href="#">
              <img src={downloadIcon} alt="" aria-hidden="true" />
              <span>Baixar manual de cuidados</span>
            </a>

            <a className="button-beneficios" href="#beneficios">
              Conhecer benefícios
            </a>
          </div>

          <div className="home-info" aria-label="Indicadores da ADHI">
            {stats.map((stat, index) => (
              <motion.div
                className="home-stat"
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.15, duration: 0.6 }}
              >
                <h2>{stat.value}</h2>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="home-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="home-image-card">
            <img src={peopleInfo} alt="Comunidade ADHI reunida" />
            <div className="home-image-overlay"></div>
          </div>

          <motion.div
            className="home-modal-pulse"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="home-icon-health">
              <span>💛</span>
            </div>
            <div className="home-modal-pulse-info">
              <h2>Você não está sozinho</h2>
              <p>Junte-se à nossa comunidade</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        className="arrow-down"
        href="#beneficios"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>DESCUBRA MAIS</span>
        <img src={arrowDown} alt="" aria-hidden="true" />
      </motion.a>
    </section>
  );
}

export default Home;
