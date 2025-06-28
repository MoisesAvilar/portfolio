import styles from "./Footer.module.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
        <ul className={styles.socialLinks}>
          {socialLinks.map((link, index) => (
            <li key={index} className={styles.socialItem}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={link.className}
                aria-label={`Link para ${link.icon.type.name}`}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Moisés Avilar. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;