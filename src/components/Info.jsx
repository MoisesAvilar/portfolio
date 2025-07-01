import { useEffect } from "react";
import AOS from "aos";
import { TypeAnimation } from 'react-type-animation';
import styles from "./Info.module.css";
import {
  FaWhatsapp,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";

// 1. CRIE O ARRAY DE DADOS PARA OS LINKS
const socialLinksData = [
  { href: "https://instagram.com/avilarmoises/", label: "Instagram", icon: <FaInstagram /> },
  { href: "https://github.com/MoisesAvilar", label: "GitHub", icon: <FaGithub /> },
  { href: "https://linkedin.com/in/moisés-avilar", label: "LinkedIn", icon: <FaLinkedin /> },
  { href: "https://api.whatsapp.com/send?phone=5573999699511&text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portf%C3%B3lio!", label: "WhatsApp", icon: <FaWhatsapp /> }
];

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
  <TypeAnimation
    sequence={[
      'Desenvolvedor Backend',
      2000,
      'Estudante de Análise e Desenvolvimento de Sistemas',
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</h2>
          
          {/* 2. RENDERIZE OS LINKS USANDO O .map() */}
          <div className={styles.socialLinks}>
            {socialLinksData.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* ... (código do botão de download) ... */}
                    <a 
            href="/Moisés Avilar.pdf" 
            download 
            className={styles.downloadButton}
          >
            Baixar currículo
            <FaFileDownload className={styles.downloadIcon} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Info;