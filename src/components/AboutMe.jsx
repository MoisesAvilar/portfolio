import { useEffect } from "react";
import AOS from "aos";
import styles from "./AboutMe.module.css";

function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.aboutContainer} data-aos="fade-up">
        <div className={styles.aboutHeader}>
          <h2>Sobre Mim</h2>
          <p className={styles.subtitle}>Minha jornada na tecnologia e além</p>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutCard}>
            <h3>Minha Jornada Tecnológica</h3>
            <p>
              Sou um entusiasta da tecnologia com paixão por programação desde cedo.
              Minha curiosidade começou na infância, explorando dispositivos
              eletrônicos e configurações de sistemas. Aos 15 anos, tive meu
              primeiro contato com programação ao tentar criar um servidor para GTA
              San Andreas, o que despertou meu interesse pela área.
            </p>
          </div>

          <div className={styles.aboutCard}>
            <h3>Foco e Especialização</h3>
            <p>
              Atualmente, me dedico intensivamente ao desenvolvimento backend.
              Acredito em princípios de código limpo, documentação clara e
              desenvolvimento orientado a testes. Minha metodologia preferida é
              Scrum, sempre buscando equilibrar qualidade técnica com prazos
              realistas.
            </p>
          </div>

          <div className={styles.aboutCard}>
            <h3>Formação e Objetivos</h3>
            <p>
              Comecei meus estudos formais em programação em Setembro de 2023 como
              autodidata. Em Março de 2024 iniciei o curso de Análise e
              Desenvolvimento de Sistemas na Faculdade Pitágoras. Paralelamente,
              tenho me dedicado ao aprendizado de React e desenvolvimento frontend
              para me tornar um profissional fullstack.
            </p>
            <p>
              Meu objetivo atual é ingressar no mercado de trabalho como
              desenvolvedor backend ou fullstack, aplicando meus conhecimentos em
              projetos desafiadores.
            </p>
          </div>

          <div className={styles.aboutCard}>
            <h3>Interesses Pessoais</h3>
            <p>
              Quando não estou programando, sou músico nas horas vagas. Toco bateria
              e inclusive dou aulas em uma escola de música na minha cidade,
              atividade que me ajuda a manter o equilíbrio entre vida profissional e
              pessoal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;