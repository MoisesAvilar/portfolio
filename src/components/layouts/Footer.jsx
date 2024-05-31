import styles from "./Footer.module.css"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link
            to="https://www.linkedin.com/in/moisés-avilar"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedin}
          >
            <FaLinkedin />
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            to="https://github.com/MoisesAvilar"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.github}
          >
            <FaGithub />
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            to="https://www.instagram.com/avilarmoises/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagram}
          >
            <FaInstagram />
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            to="mailto:moisesavilar0@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.email}
          >
            <MdEmail />
          </Link>
        </li>
      </ul>
      <p className={styles.copy}>Moisés Avilar - 2024</p>
    </footer>
  )
}

export default Footer
