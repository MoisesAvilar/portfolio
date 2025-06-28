import { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import styles from "./Info.module.css";
import {
  FaWhatsapp,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

function Info() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.heroContainer} id="home">
      <div className={styles.heroContent} data-aos="fade-up">
        <div className={styles.profileContainer}>
          <img 
            src="/moises_avilar.jfif" 
            alt="Moisés Avilar" 
            className={styles.profileImage} 
          />
        </div>

        <div className={styles.textContent}>
          <h1>Moisés Avilar</h1>
          <h2>
            Desenvolvedor Backend
            <span className={styles.divider}>•</span>
            Estudante de Análise e Desenvolvimento de Sistemas
          </h2>
          
          <div className={styles.socialLinks}>
            <a
              href="https://instagram.com/avilarmoises/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/MoisesAvilar"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/moisés-avilar"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5573999699511&text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portf%C3%B3lio!"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>

          <a 
            href="/Moisés Avilar.pdf" 
            download 
            className={styles.downloadButton}
          >
            Baixar currículo
            <FaFileDownload className={styles.downloadIcon} />
            <FiArrowUpRight className={styles.linkIcon} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Info;