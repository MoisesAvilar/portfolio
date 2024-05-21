import { Link } from "react-router-dom"
import styles from "./Info.module.css"
import logo from "../img/moises_avilar.jfif"
import { FaWhatsappSquare, FaGithubSquare, FaInstagramSquare, FaEnvelopeSquare } from "react-icons/fa"

function Info() {
  return (
    <div className={styles.head}>
      <Link to={"/"}>
        <img src={logo} alt="Moisés Avilar" className={styles.logo} />
      </Link>
      <h1>Moisés Avilar</h1>
      <p>Desenvolvedor Backend, Estudante de Análise e Desenvolvimento de Sistemas</p>
      <div className={styles.socials}>
        <li>
          <FaWhatsappSquare />
        </li>
        <li>
          <FaInstagramSquare />
        </li>
        <li>
          <FaGithubSquare />
        </li>
        <li>
          <FaEnvelopeSquare />
        </li>
      </div>
    </div>
  )
}

export default Info
