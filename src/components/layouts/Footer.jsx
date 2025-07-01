import styles from "./Footer.module.css";
import { FaLinkedin, FaGithub, FaInstagram , FaArrowUp} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/moisés-avilar",
    className: styles.linkedin
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/MoisesAvilar",
    className: styles.github
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/avilarmoises/",
    className: styles.instagram
  },
  {
    icon: <MdEmail />,
    url: "mailto:moisesavilar0@gmail.com",
    className: styles.email
  }
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.logo}>Moisés Avilar</div>
        </div>
        
        <div className={styles.divider}></div>

        <div className={styles.bottomSection}>
          <div className={styles.navLinks}>
            <Link to="/">Home</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/contato">Contato</Link>
          </div>

          <ul className={styles.socialLinks}>
            {socialLinks.map((link, index) => (
              <li key={index} className={`${styles.socialItem} ${link.className}`}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Link para ${link.icon.type.name.toLowerCase()}`}
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} Moisés Avilar. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;