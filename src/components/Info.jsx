import { Link } from "react-router-dom";
import styles from "./Info.module.css";
import logo from "../img/moises_avilar.jfif";
import {
  FaWhatsappSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";

function Info() {
  return (
    <div className={styles.head}>
      <Link to={"/"}>
        <img src={logo} alt="Moisés Avilar" className={styles.logo} />
      </Link>
      <h1>Moisés Avilar</h1>
      <p>
        Desenvolvedor Backend <br />
        Estudante de Análise e Desenvolvimento de Sistemas
      </p>
      <div className={styles.socials}>
        <li>
          <abbr title="Instagram">
            <Link
              to={"https://instagram.com/avilarmoises/"}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagram}
            >
              <FaInstagramSquare />
            </Link>
          </abbr>
        </li>
        <li>
          <abbr title="Github">
            <Link
              to={"https://github.com/MoisesAvilar"}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.github}
            >
              <FaGithubSquare />
            </Link>
          </abbr>
        </li>
        <li>
          <abbr title="LinkedIn">
            <Link
              to={"https://linkedin.com/in/moisés-avilar"}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedin}
            >
              <FaLinkedin />
            </Link>
          </abbr>
        </li>
        <li>
          <abbr title="WhatsApp">
            <Link
              to={
                "https://api.whatsapp.com/send?phone=5573999699511&text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portf%C3%B3lio!"
              }
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsapp}
            >
              <FaWhatsappSquare />
            </Link>
          </abbr>
        </li>
      </div>
      <hr className={styles.divider} />
      <a href="/Moisés Avilar.pdf" download className={styles.downloadCV}>Baixar currículo <FaFileDownload className={styles.icon} /></a>
    </div>
  );
}

export default Info;
