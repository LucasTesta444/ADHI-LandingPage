import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import "./Duvidas.css";

const duvidas = [
  {
    title: "Posso cancelar a qualquer momento?",
    description:
      "Sim, você pode cancelar sua participação a qualquer momento, sem multas ou burocracias. Basta entrar em contato conosco.",
  },
  {
    title: "Tem taxa de inscrição?",
    description:
      "Sim, o valor mensal é de R$49,90 que cobre orientações, encontros presenciais, acompanhamento profissional e acesso ao grupo exclusivo no WhatsApp.",
  },
  {
    title: "Preciso ter diagnóstico para participar?",
    description:
      "Não! Qualquer pessoa que busque mais qualidade de vida é bem-vinda. Nosso grupo é aberto para diabéticos, hipertensos, obesos e qualquer pessoa que queira cuidar melhor da saúde.",
  },
  {
    title: "Como funcionam os encontros presenciais?",
    description:
      "Os encontros acontecem mensalmente em Angra dos Reis, com atividades em grupo, palestras com profissionais de saúde e momentos de integração.",
  },
  {
    title: "Quais profissionais fazem parte da associação?",
    description:
      "Contamos com médicos, nutricionistas, educadores físicos e psicólogos comprometidos com o bem-estar dos nossos membros.",
  },
];

function Duvidas() {
  const [openIndex, setOpenIndex] = useState(0);

  function handleToggle(index) {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  }

  return (
    <section className="container-duvidas" id="duvidas">
      <motion.div
        className="duvidas-info"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>PERGUNTAS FREQUENTES</p>
        <h1>Dúvidas frequentes</h1>
      </motion.div>

      <motion.div
        className="duvidas-list"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {duvidas.map((duvida, index) => {
          const isOpen = openIndex === index;
          const answerId = `duvida-resposta-${index}`;

          return (
            <article
              className={`duvida-card ${isOpen ? "duvida-card-open" : ""}`}
              key={duvida.title}
            >
              <button
                className="duvida-question"
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => handleToggle(index)}
              >
                <span>{duvida.title}</span>
                <ChevronDown className="duvida-icon" aria-hidden="true" />
              </button>

              <div className="duvida-answer" id={answerId}>
                <p>{duvida.description}</p>
              </div>
            </article>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Duvidas;
