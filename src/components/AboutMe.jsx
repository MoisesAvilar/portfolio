import commonStyles from "./common.module.css"
import styles from "./AboutMe.module.css"

function AboutMe() {
  return (
    <div
      className={`${commonStyles.about_meContainer} ${styles.about_me}`}
      data-aos="fade-up"
    >
      <h2>Sobre mim</h2>
      <p>Fascinado por tecnologia e amante de programação.</p>
      <p>
        Meu foco é ingressar no mercado de trabalho como desenvolvedor backend
        ou desenvolvedor web.
      </p>
      <p>
        Estudo programação desde Setembro de 2023 como autodidata. Em Março de
        2024 comecei a cursar Análise e Desenvolvimento de Sistemas na Faculdade
        Pitágoras e nas minhas horas vagas tenho me dedicado a aprender sobre React e frontend.
      </p>
    </div>
  )
}

export default AboutMe
