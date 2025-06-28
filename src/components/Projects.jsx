import { Link } from "react-router-dom";
import styles from "./Projects.module.css";
import icons from "../assets/icons";
import ceicaImgs from "../img/projects/api_ceica/api_ceica";
import gerenciamentoFinanceiroImgs from "../img/projects/gerenciamento_financeiro/gerenciamento_financeiro";
import Technologies from "./Technologies";

const projectsData = [
  {
    id: 1,
    title: "API CeicaCake",
    status: "Em andamento",
    description: "API Django RESTful para gerenciamento de clientes e vendas.",
    image: ceicaImgs.ceicaImg1,
    technologies: [
      { icon: icons.python, name: "Python" },
      { icon: icons.django, name: "Django" },
      { icon: icons.postgresql, name: "PostgreSQL" },
      { icon: icons.postman, name: "Postman" }
    ],
    links: [
      { url: "https://github.com/MoisesAvilar/ceica_cake/", label: "Ver repositório" }
    ]
  },
  {
    id: 2,
    title: "Gerenciamento Financeiro",
    status: "Em andamento",
    description: "Aplicação Django para controle de gastos mensais e gerenciamento financeiro pessoal.",
    image: gerenciamentoFinanceiroImgs.gerenciamentoFinanceiroImg3,
    technologies: [
      { icon: icons.python, name: "Python" },
      { icon: icons.django, name: "Django" },
      { icon: icons.postgresql, name: "PostgreSQL" },
      { icon: icons.html5, name: "HTML5" },
      { icon: icons.css3, name: "CSS3" }
    ],
    links: [
      { url: "https://expenses.pythonanywhere.com/", label: "Ver projeto" },
      { url: "https://github.com/MoisesAvilar/gerenciamento-financeiro/", label: "Ver repositório" }
    ]
  }
];

function Projects() {
  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>Projetos em Destaque</h2>
      
      {projectsData.map((project) => (
        <div key={project.id} className={styles.project} data-aos="fade-up">
          <div className={styles.projectHeader}>
            <Link to={`/projetos#project-${project.id}`} className={styles.projectTitleLink}>
              <h2>{project.title}</h2>
            </Link>
            <span className={styles.status}>{project.status}</span>
          </div>
          
          <Link to={`/projetos#project-${project.id}`} className={styles.projectImageLink}>
            <div className={styles.projectImage}>
              <img src={project.image} alt={`${project.title} screenshot`} />
            </div>
          </Link>
          
          <p className={styles.description}>{project.description}</p>
          
          <div className={styles.technologies}>
            <h3>Tecnologias utilizadas</h3>
            <ul className={styles.techList}>
              {project.technologies.map((tech, index) => (
                <li key={index} className={styles.techItem}>
                  <img src={tech.icon} alt={tech.name} />
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.links}>
            {project.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <hr className={styles.divider} />
        </div>
      ))}
      
      <div className={styles.moreProjects}>
        <h2>Confira meus outros projetos</h2>
        <Link to="/projetos" className={styles.button}>
          Ver todos os projetos
        </Link>
      </div>
      
      <Technologies />
    </section>
  );
}

export default Projects;