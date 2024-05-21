import commonStyles from "./common.module.css"
import styles from "./AboutMe.module.css"

function AboutMe() {
  return (
    <div className={`${commonStyles.about_meContainer} ${styles.about_me}`} data-aos="fade-up">
      <h2>Sobre mim</h2>
      <p>
        Desde criança, sempre tive interesse em compreender como funciona as
        coisas ao meu redor. Cresci assistindo videos e documentários com meu
        pai sobre motores, o corpo humano e construção de casas, enquanto também
        dominava o uso de diversos equipamentos eletrônicos em casa, desde
        videogames até celulares da época.
      </p>
      <p>
        Uni o util ao agradável e comecei a estudar programação como autodidata
        em Setembro de 2022 através do canal Curso Em Video, do renomado Prof.
        Gustavo Guanabara.
      </p>
      <p>
        Desde então, venho estudando e aprimorando meu conhecimento através de
        projetos pessoais e videos no YouTube. Em Março de 2024, decidi dar o
        próximo passo em minha jornada e iniciar o curso de Análise e
        Desenvolvimento de Sistemas na Faculdade Anhanguera.
      </p>
    </div>
  )
}

export default AboutMe
