import styles from "./Projects.module.css";
import { Link } from "react-router-dom";

import icons from "../assets/icons";
import ceicaImgs from "../img/projects/api_ceica/api_ceica";
import gerenciamentoFinanceiroImgs from "../img/projects/gerenciamento_financeiro/gerenciamento_financeiro";

import Technologies from "./Technologies";

function Projects() {
  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>Projetos em Destaque</h2>
      <div className={styles.project} data-aos="fade-up">
        <h2>API CeicaCake</h2>
        <h5>(Em andamento)</h5>
        <div className={styles.images}>
          <ul className={styles.image_list}>
            <li className={styles.image}>
              <img src={ceicaImgs.ceicaImg1} alt="Foto 1" />
            </li>
          </ul>
        </div>
        <p className={styles.description}>
          Este projeto é uma API Django RESTful para gerenciamento de clientes e
          vendas.
        </p>
        <div className={styles.usedTechnologies}>
          <h2 className={styles.h2}>Tecnologias utilizadas</h2>
          <ul className={styles.technologies}>
            <li className={styles.icon}>
              <img src={icons.python} alt="python" />
              <span>Python</span>
            </li>
            <li className={styles.icon}>
              <img src={icons.django} alt="django" />
              <span>Django</span>
            </li>
            <li className={styles.icon}>
              <img src={icons.postgresql} alt="postgresql" />
              <span>PostgreSQL</span>
            </li>
            <li className={styles.icon}>
              <img src={icons.postman} alt="postman" />
              <span>Postman</span>
            </li>
          </ul>
        </div>
        <a
          href="https://github.com/MoisesAvilar/ceica_cake/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Ver repositório
        </a>
        <hr className={styles.divider} data-aos="fade-up" />
      </div>
      <div className={styles.project} data-aos="fade-up">
        <h2 className={styles.h2}>Gerenciamento Financeiro</h2>
        <h5>(Em andamento)</h5>
        <div className={styles.images}>
          <ul className={styles.image_list}>
            <li className={styles.image}>
              <img
                src={gerenciamentoFinanceiroImgs.gerenciamentoFinanceiroImg3}
                alt="Foto 1"
              />
            </li>
          </ul>
        </div>
        <p className={styles.description}>
          Aplicação Django projetada para auxiliar no controle de gastos mensais
          e no gerenciamento financeiro pessoal.
        </p>
        <div className={styles.usedTechnologies}>
          <h2 className={styles.h2}>Tecnologias utilizadas</h2>
          <ul className={styles.technologies}>
            <li className={styles.icon}>
              <img src={icons.python} alt="python" />
              <span>Python</span>
            </li>
            <li className={styles.icon}>
              <img src={icons.django} alt="django" />
              <span>Django</span>
            </li>
            <li className={styles.icon}>
              <img src={icons.postgresql} alt="postgresql" />
              <span>PostgreSQL</span>
            </li>
            <li className={styles.icon}>
              <img src={icons.html5} alt="html5" />
              <span>HTML5</span>
            </li>
            <li className={styles.icon}>
              <img src={icons.css3} alt="css3" />
              <span>CSS3</span>
            </li>
          </ul>
        </div>
        <a
          href="https://expenses.pythonanywhere.com/"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          Ver projeto
        </a>
        <a
          href="https://github.com/MoisesAvilar/gerenciamento-financeiro/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Ver repositório
        </a>
        <hr className={styles.divider} data-aos="fade-up" />
      </div>
      <div className={styles.projects_button_container}>
        <h2>Confira meus outros projetos</h2>
        <Link to="/projetos" className={styles.projects_button}>
          Ver projetos
        </Link>
      </div>
      <hr className={styles.divider} />
      <Technologies />
    </section>
  );
}

export default Projects;
