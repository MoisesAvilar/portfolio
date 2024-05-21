import commonStyles from "./common.module.css"
import styles from "./Projects.module.css"
import icons from "../assets/icons"

function Projects() {
  return (
    <div className={commonStyles.projectsContainer}>
      <h2 data-aos="fade-up">Projetos</h2>
      <div className={styles.project} data-aos="fade-up">
        <h3>API CeicaCake</h3>
        <h5>(Em andamento)</h5>
        <p className={styles.description}>
          Este projeto é uma API Django RESTful para gerenciamento de clientes e
          vendas, com suporte a autenticação via JWT.
        </p>
        <p className={styles.description}>
          Uma API simples e eficaz que fiz para o gerenciamento da loja de doces
          da minha mãe. Inclui cadastro de clientes e registro de vendas com
          base nos dados dos clientes.
        </p>
        <p className={styles.usedTechnologies}>
          Tecnologias utilizadas
          <div className={styles.technologies}>
            <img src={icons.python} alt="python" />
            <img src={icons.django} alt="django" />
            <img src={icons.postgresql} alt="postgresql" />
            <img src={icons.postman} alt="postman" />
          </div>
        </p>
        <a
          href="https://github.com/MoisesAvilar/ceica_cake/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver repositório
        </a>
        <hr className={styles.divider} data-aos="fade-up" />
      </div>
      <div className={styles.project} data-aos="fade-up">
        <h3>Gerenciamento Financeiro</h3>
        <h5>(Em andamento)</h5>
        <p className={styles.description}>
          Aplicação Django projetada para auxiliar no controle de gastos mensais
          e no gerenciamento financeiro pessoal.
        </p>
        <p className={styles.description}>
          Essa aplicação foi pensada desde o início com intuito de por em
          prática o conhecimento adquirido em Django e HTML e CSS. Sendo
          desenvolvido inteiramente em Django sem auxilio de framework para
          frontend, foi meu primeiro contato com HTML e CSS em um projeto.
          Utilizei a documentação como base e estruturei o frontend utilizando{" "}
          <em>django template language.</em>
        </p>
        <p className={styles.usedTechnologies}>
          Tecnologias utilizadas
          <div className={styles.technologies}>
            <img src={icons.python} alt="python" />
            <img src={icons.django} alt="django" />
            <img src={icons.postgresql} alt="postgresql" />
            <img src={icons.html5} alt="html5" />
            <img src={icons.css3} alt="css3" />
          </div>
        </p>
        <a
          href="https://expenses.pythonanywhere.com/"
          target="_blank"
          rel="noreferrer"
        >
          Ver projeto
        </a>
        <a
          href="https://github.com/MoisesAvilar/gerenciamento-financeiro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver repositório
        </a>
        <hr className={styles.divider} data-aos="fade-up" />
      </div>
      <div className={styles.project} data-aos="fade-up">
        <h3>Portfólio</h3>
        <h5>(Em andamento)</h5>
        <p className={styles.description}>
          Devido a minha experiência com CSS no projeto{" "}
          <em>Gerenciamento FInanceiro</em>, acabei por não gostar muito de
          frontend pois achei um pouco complexo o conceito de tornar o projeto
          responsivo. Então comecei a ver um pouco sobre Node.js pra ter uma boa
          base e em seguida comecei a aprender React.
        </p>
        <p>
          Esse projeto é resultado do que eu aprendi inicialmente sobre CSS e a
          utilização do framework React como framework de front-end.
        </p>
        <p className={styles.usedTechnologies}>
          Tecnologias utilizadas
          <div className={styles.technologies}>
            <img src={icons.nodejs} alt="nodejs" />
            <img src={icons.react} alt="react" />
            <img src={icons.html5} alt="html5" />
            <img src={icons.css3} alt="css3" />
          </div>
        </p>
        <a
          href="https://github.com/MoisesAvilar/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver repositório
        </a>
        <hr className={styles.divider} data-aos="fade-up" />
      </div>
      <div className={styles.project} data-aos="fade-up">
        <h3>Controle de Vendas</h3>
        <h5>(Concluído)</h5>
        <p className={styles.description}>
          Foi a ideia que tive para um site de gestão de estoque e vendas de uma
          empresa antes de saber sobre desenvolvimento web. Eu não queria deixar
          a ideia morrer entao decidi criar um software usando a biblioteca
          PySimpleGui, já que eu havia feito algumas coisas com ele antes.
        </p>
        <p className={styles.description}>
          Basicamente o usuario cadastra produtos em uma tabela, e em seguida
          ele pode registrar vendas detalhando os itens vendidos e quem foram os
          vendedores. O sistema subtrai automaticamente a quantidade vendida dos
          itens em estoque e impede a venda de itens que nao estiverem em
          estoque.
        </p>
        <p className={styles.usedTechnologies}>
          Tecnologias utilizadas
          <div className={styles.technologies}>
            <img src={icons.python} alt="python" />
            <img src={icons.django} alt="django" />
            <img src={icons.sqlite} alt="sqlite" />
            <img src={icons.pysimplegui} alt="pysimplegui" />
          </div>
        </p>
        <a
          href="https://github.com/MoisesAvilar/controle-de-vendas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver repositório
        </a>
      </div>
    </div>
  )
}

export default Projects
