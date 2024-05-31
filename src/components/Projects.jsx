import commonStyles from "./common.module.css"
import styles from "./Projects.module.css"
import { Link } from "react-router-dom"

import icons from "../assets/icons"

import Technologies from "./Technologies"

function Projects() {
  return (
    <section className={commonStyles.projectsContainer}>
      <h2 className={styles.title}>Projetos em Destaque</h2>
      <div className={styles.projects}>
        <div className={styles.project} data-aos="fade-up">
          <h2 className={styles.h2}>API CeicaCake</h2>
          <h5>(Em andamento)</h5>
          <p className={styles.description}>
            Este projeto é uma API Django RESTful para gerenciamento de clientes
            e vendas.
          </p>
          <p>O que aprendi com esse projeto:</p>
          <ul className={styles.list}>
            <li>Gerenciamento de clientes e vendas;</li>
            <li>API RESTful com autenticação via JWT;</li>
            <li>Uso de serializers;</li>
            <li>Uso do Postman para testes de rotas e funcionalidades;</li>
            <li>
              Personalização do painel de administrador do Django, criando novos
              recursos e customizações.
            </li>
          </ul>
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
          <p className={styles.description}>
            Aplicação Django projetada para auxiliar no controle de gastos
            mensais e no gerenciamento financeiro pessoal.
          </p>
          <p>O que aprendi com esse projeto:</p>
          <ul className={styles.list}>
            <li>Estrutura de dados;</li>
            <li>Sistemas básico de login;</li>
            <li>
              Coloquei em prática meu conhecimento de CSS e os conceitos de
              responsividade.
            </li>
          </ul>
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
          <Link className={styles.projects_button} to="/projects">
            Ver projetos
          </Link>
        </div>
        <hr className={styles.divider} />
        <Technologies />
      </div>
    </section>
  )
}

export default Projects
