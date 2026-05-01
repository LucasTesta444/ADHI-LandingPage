import "./Beneficios.css";
import { motion } from "motion/react";
import {
  BookOpen,
  Calendar,
  Heart,
  MessageCircle,
  Stethoscope,
  Users,
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const benefits = [
  {
    icon: MessageCircle,
    title: "Grupo exclusivo no WhatsApp",
    description:
      "Conecte-se com outros membros, troque experiências e receba apoio diário.",
    color: "--brand-primary",
  },
  {
    icon: BookOpen,
    title: "Dicas práticas e confiáveis",
    description:
      "Orientações de saúde baseadas em evidências para o seu dia a dia.",
    color: "--brand-secondary",
  },
  {
    icon: Users,
    title: "Comunidade acolhedora",
    description:
      "Apoio de pessoas que entendem sua jornada e caminham ao seu lado.",
    color: "--brand-terciary",
  },
  {
    icon: Calendar,
    title: "Encontros presenciais",
    description:
      "Eventos e atividades em grupo em Angra dos Reis para cuidar da saúde.",
    color: "--brand-primary",
  },
  {
    icon: Stethoscope,
    title: "Orientação profissional",
    description:
      "Acesso a profissionais de saúde qualificados e comprometidos.",
    color: "--brand-secondary",
  },
  {
    icon: Heart,
    title: "Suporte contínuo",
    description:
      "Acompanhamento focado na sua saúde com atenção e carinho.",
    color: "--brand-terciary",
  },
];

function Beneficios() {
  return (
    <section className="container-beneficios" id="beneficios">
      <div className="beneficios-info">
        <p>POR QUE FAZER PARTE</p>
        <h1>Benefícios do grupo</h1>
        <p>
          Cuide da sua saúde com acompanhamento contínuo e uma rede de apoio
          que faz a diferença.
        </p>
      </div>

      <motion.div
        className="beneficios-card"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <motion.div
              className="beneficio-card"
              key={benefit.title}
              variants={item}
              style={{ "--benefit-color": `var(${benefit.color})` }}
            >
              <div className="beneficio-icon">
                <Icon className="beneficio-icon-svg" aria-hidden="true" />
              </div>

              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Beneficios;
