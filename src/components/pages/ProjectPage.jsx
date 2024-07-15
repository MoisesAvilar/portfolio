import AOS from "aos";
import { useEffect } from "react";

import styles from "../pages/ProjectPage.module.css";
import icons from "../../assets/icons";

import ceicaImgs from "../../img/projects/api_ceica/api_ceica";
import gerenciamentoFinanceiroImgs from "../../img/projects/gerenciamento_financeiro/gerenciamento_financeiro";
import controleVendasImgs from "../../img/projects/controle_vendas/controle_vendas";
import passwordGeneratorImgs from "../../img/projects/password_generator/password_generator";

function ProjectPage() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleScrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <section className={styles.projectsContainer}>
      <h1 data-aos="fade-up" id="top">Projetos</h1>
      <div className={styles.project} data-aos="fade-up">
        <h2>API CeicaCake</h2>
        <h5>(Em andamento)</h5>
        <div className={styles.description}>
          <p>
            API RESTful para gerenciamento de clientes e vendas da loja de doces
            da minha mãe.
          </p>
        </div>
        <div className={styles.containerList}>
          <p><i>Atualização: 17/06/2024</i></p>
          <p>Integração com o frontend feito em React.js</p>
          <p>Funcionalidade de selecionar múltiplas vendas</p>
        </div>
        <div className={styles.containerList}>
          <ul>
            <p>O que aprendi com esse projeto:</p>
            <li>Gerenciamento de clientes e vendas;</li>
            <li>API RESTful com autenticação via JWT;</li>
            <li>Uso de serializers;</li>
            <li>Uso do Postman para testes de rotas e funcionalidades;</li>
            <li>
              Personalização do painel de administrador do Django, criando novos
              recursos e customizações.
            </li>
          </ul>
          <p>O que pretendo fazer:</p>
          <ul>
            <li>Novas funções para gerenciar fluxo de caixa.</li>
          </ul>
        </div>
        <div className={styles.images}>
          <ul className={styles.image_list}>
            <div className={styles.imagesContainer}>
            <li className={`${styles.image} ${styles.image1}`}>
                <img src={ceicaImgs.ceicaImg1} alt="Foto1" />
              </li>
              <li className={`${styles.image} ${styles.image2}`}>
                <img src={ceicaImgs.ceicaImg2} alt="Foto2" />
              </li>
              <li className={`${styles.image} ${styles.image3}`}>
                <img src={ceicaImgs.ceicaImg3} alt="Foto3" />
              </li>
            </div>
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
        <div className={styles.description}>
          <p>
            Aplicação Django projetada para auxiliar no controle de gastos mensais
            e no gerenciamento financeiro pessoal.
          </p>
        </div>
        <div className={styles.containerList}>
          <p><i>Atualização: 21/06/2024</i></p>
          <p>Adicionei uma nova aplicação responsável por cadastro de renda extra</p>
          <p>Otimizei o uso e experiencia do usuário</p>
          <p>Reestruturei o frontend.</p>
        </div>
        <div className={styles.containerList}>
          <p>O que aprendi com esse projeto:</p>
          <ul>
            <li>
              Foi o primeiro projeto que utilizei os conhecimentos de HTML e
              CSS;
            </li>
            <li>
              Utilização do <em>django template language</em>;
            </li>
            <li>Deploy e hosting.</li>
          </ul>
          <p>O que pretendo fazer:</p>
          <ul>
            <li>Criar funcionalidade de busca e filtros;</li>
            <li>Possibilidade de criar relatórios com base em dados;</li>
            <li>Reestruturar o frontend.</li>
          </ul>
          <div className={styles.images}>
            <ul className={styles.image_list}>
              <div className={styles.imagesContainer}>
                <li className={`${styles.image} ${styles.image1}`}>
                  <img
                    src={
                      gerenciamentoFinanceiroImgs.gerenciamentoFinanceiroImg1
                    }
                    alt="Foto1"
                  />
                </li>
                <li className={`${styles.image} ${styles.image2}`}>
                  <img
                    src={
                      gerenciamentoFinanceiroImgs.gerenciamentoFinanceiroImg2
                    }
                    alt="Foto2"
                  />
                </li>
                <li className={`${styles.image} ${styles.image3}`}>
                  <img
                    src={gerenciamentoFinanceiroImgs.gerenciamentoFinanceiroImg3}
                    alt="Foto3"
                  />
                </li>
              </div>
            </ul>
          </div>
        </div>
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
          Esse projeto é resultado do que eu aprendi inicialmente sobre CSS e a
          utilização do framework React como framework front-end.
        </p>
        <div className={styles.containerList}>
          <p>O que aprendi com esse projeto:</p>
          <ul>
            <li>Usar o recurso de SPA do React;</li>
            <li>
              Entendi sobre componentização e renderização de componentes React;
            </li>
            <li>Adaptação à sintaxe do JavaScript e Node.js;</li>
            <li>Transições e animações em CSS e com a biblioteca AOS.</li>
          </ul>
        </div>
        <div className={styles.usedTechnologies}>
          <h2 className={styles.h2}>Tecnologias utilizadas</h2>
          <ul className={styles.technologies}>
            <li className={styles.icon}>
              <img src={icons.nodejs} alt="nodejs" />
              <span>Node.js</span>
            </li>
            <li className={styles.icon}>
              <img src={icons.react} alt="react" />
              <span>React</span>
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
          href="#top"
          onClick={handleScrollToTop}
          className={`${styles.link} ${styles.tip}`}
          title="Você já está no repositório!"
        >
          Ver projeto
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
          Software para controle de vendas e estoque.
        </p>
        <div className={styles.containerList}>
          <p>O que aprendi com esse projeto:</p>
          <ul>
            <li>Uso do framework PySimpleGUI;</li>
            <li>Uso do SQL language;</li>
            <li>Manipular dados usando SQL queries;</li>
            <li>Funcionamento de janelas pop-up e alertas de erro;</li>
            <li>Múltiplas janelas do software.</li>
          </ul>
        </div>
        <div className={styles.images}>
          <ul className={styles.image_list}>
            <div className={styles.imagesContainer}>
            <li className={`${styles.image} ${styles.image1}`}>
                <img src={controleVendasImgs.controleVendasImg1} alt="Foto1" />
              </li>
              <li className={`${styles.image} ${styles.image2}`}>
                <img src={controleVendasImgs.controleVendasImg2} alt="Foto2" />
              </li>
            </div>
          </ul>
        </div>
        <div className={styles.usedTechnologies}>
          <h2 className={styles.h2}>Tecnologias utilizadas</h2>
          <ul className={styles.technologies}>
            <li className={styles.icon}>
              <img src={icons.python} alt="python" />
              <span>Python</span>
            </li>
            <li className={styles.icon}>
              <img src={icons.sqlite} alt="sqlite" />
              <span>SQLite3</span>
            </li>
            <li className={styles.icon}>
              <img src={icons.pysimplegui} alt="pysimplegui" />
              <span>PySimpleGUI</span>
            </li>
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
      <div className={styles.project} data-aos="fade-up">
        <h2>Gerador de Senhas</h2>
        <h5>(Concluído)</h5>
        <p className={styles.description}>
          Software que crie uma senha aleatória de acordo com o tamanho desejado
          e salva em um arquivo txt.
        </p>
        <div className={styles.containerList}>
          <p>O que aprendi com esse projeto:</p>
          <ul>
            <li>Uso do framework PySimpleGUI;</li>
            <li>Usar o método with open para salvar arquivos;</li>
            <li>Funcionamento de janelas pop-up e alertas de erro;</li>
            <li>Múltiplas janelas do software.</li>
          </ul>
        </div>
        <div className={styles.images}>
          <ul className={styles.image_list}>
            <div className={styles.imagesContainer}>
            <li className={`${styles.image} ${styles.image1}`}>
                <img
                  src={passwordGeneratorImgs.passwordGeneratorImg1}
                  alt="Foto1"
                />
              </li>
              <li className={`${styles.image} ${styles.image2}`}>
                <img
                  src={passwordGeneratorImgs.passwordGeneratorImg2}
                  alt="Foto2"
                />
              </li>
            </div>
          </ul>
        </div>
        <div className={styles.usedTechnologies}>
          <h2 className={styles.h2}>Tecnologias utilizadas</h2>
          <ul className={styles.technologies}>
            <li className={styles.icon}>
              <img src={icons.python} alt="python" />
              <span>Python</span>
            </li>
            <li className={styles.icon}>
              <img src={icons.pysimplegui} alt="pysimplegui" />
              <span>PySimpleGUI</span>
            </li>
          </ul>
        </div>
        <a
          href="https://github.com/MoisesAvilar/password-generator/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Ver repositório
        </a>
      </div>
    </section>
  );
}

export default ProjectPage;
