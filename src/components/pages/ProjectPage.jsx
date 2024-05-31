import styles from "../pages/ProjectPage.module.css"
import icons from "../../assets/icons"

import ceicaImgs from "../../img/projects/api_ceica/api_ceica"

function ProjectPage() {
  return (
    <section className={styles.projectsContainer}>
      <h1 data-aos="fade-up">Projetos</h1>
      <div className={styles.project} data-aos="fade-up">
        <h2>API CeicaCake</h2>
        <h5>(Em andamento)</h5>
        <p className={styles.description}>
          Este projeto é uma API Django RESTful para gerenciamento de clientes e
          vendas.
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
        <div className={styles.images}>
          <ul className={styles.image_list}>
            <li className={styles.image}>
              <img src={ceicaImgs.ceicaImg1} alt="Foto1" />
            </li>
            <li className={styles.image}>
              <img src={ceicaImgs.ceicaImg2} alt="Foto2" />
            </li>
            <li className={styles.image}>
              <img src={ceicaImgs.ceicaImg3} alt="Foto3" />
            </li>
          </ul>
        </div>
        <div className={styles.usedTechnologies}>
          <h2>Tecnologias utilizadas</h2>
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
        <h2>Gerenciamento Financeiro</h2>
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
      <div className={styles.project} data-aos="fade-up">
        <h2>Portfólio</h2>
        <h5>(Em andamento)</h5>
        <p className={styles.description}>
          Devido a minha experiência com CSS no projeto{" "}
          <em>Gerenciamento FInanceiro</em>, acabei por não gostar muito de
          frontend pois achei um pouco complexo o conceito de tornar o projeto
          responsivo. Então comecei a ver um pouco sobre Node.js pra ter uma boa
          base e em seguida comecei a aprender React.
        </p>
        <p className={styles.description}>
          Esse projeto é resultado do que eu aprendi inicialmente sobre CSS e a
          utilização do framework React como framework de front-end.
        </p>
        <div className={styles.usedTechnologies}>
          <h2 className={styles.h2}>Tecnologias utilizadas</h2>
          <ul className={styles.technologies}>
            <li className={styles.icon}><img src={icons.nodejs} alt="nodejs" /><span>Node.js</span></li>
            <li className={styles.icon}><img src={icons.react} alt="react" /><span>React</span></li>
            <li className={styles.icon}><img src={icons.html5} alt="html5" /><span>HTML5</span></li>
            <li className={styles.icon}><img src={icons.css3} alt="css3" /><span>CSS3</span></li>
          </ul>
        </div>
        <a href="/" className={styles.not_available}>
          Ver projeto
          <p className={styles.tip}>Você já está no portfolio!</p>
        </a>
        <a
          href="https://github.com/MoisesAvilar/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Ver repositório
        </a>
        <hr className={styles.divider} data-aos="fade-up" />
      </div>
      <div className={styles.project} data-aos="fade-up">
        <h2>Controle de Vendas</h2>
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
        <div className={styles.usedTechnologies}>
          <h2 className={styles.h2}>Tecnologias utilizadas</h2>
          <ul className={styles.technologies}>
            <li className={styles.icon}><img src={icons.python} alt="python" /><span>Python</span></li>
            <li className={styles.icon}><img src={icons.sqlite} alt="sqlite" /><span>SQLite3</span></li>
            <li className={styles.icon}><img src={icons.pysimplegui} alt="pysimplegui" /><span>PySimpleGUI</span></li>
          </ul>
        </div>
        <a
          href="https://github.com/MoisesAvilar/controle-de-vendas/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Ver repositório
        </a>
      </div>
    </section>
  )
}

export default ProjectPage
