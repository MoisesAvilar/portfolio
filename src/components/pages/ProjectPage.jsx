import AOS from "aos";
import { useEffect, useState } from "react";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import styles from "../pages/ProjectPage.module.css";
import { projects } from "../../data/projectsData"; 

function ProjectPage() {

    useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Executa imediatamente e também quando o hash muda
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (isZoomed) {
      setIsDragging(true);
      setStartPos({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (isZoomed) {
      setIsDragging(true);
      const touch = e.touches[0];
      setStartPos({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - startPos.x,
      y: touch.clientY - startPos.y,
    });
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const openLightbox = (imgSrc) => {
    setSelectedImage(imgSrc);
    setIsZoomed(false);
    setPosition({ x: 0, y: 0 }); // Garante que comece centralizada
  };
  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const closeLightbox = (e) => {
    // Só fecha se clicar fora da imagem (no overlay)
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  return (
    <section className={styles.projectsContainer} id="projects">
      <div className={styles.projectsHeader} data-aos="fade-up">
        <h1>Meus Projetos</h1>
        <div className={styles.underline}></div>
        <p className={styles.subtitle}>
          Desenvolvimentos que mostram minha jornada e habilidades
        </p>
      </div>

      <div className={styles.projectsGrid}>
        {projects.slice().reverse().map((project) => (
          <article
            id={`project-${project.id}`}
            key={project.id}
            className={styles.projectCard}
            data-aos="fade-up"
          >
            <div className={styles.projectHeader}>
              <h2>{project.title}</h2>
              <span
                className={`${styles.status} ${
                  project.status === "Concluído"
                    ? styles.completed
                    : styles.inProgress
                }`}
              >
                {project.status}
              </span>
            </div>

            <div className={styles.projectContent}>
              <p className={styles.description}>{project.description}</p>

              {project.updates && (
                <div className={styles.updates}>
                  <h3>Atualizações Recentes</h3>
                  <ul>
                    {project.updates.map((update, index) => (
                      <li key={index}>{update}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className={styles.learnings}>
                <h3>O que aprendi</h3>
                <ul>
                  {project.learnings.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {project.goals && project.goals.length > 0 && (
                <div className={styles.goals}>
                  <h3>Próximos passos</h3>
                  <ul>
                    {project.goals.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Lightbox */}
              {selectedImage && (
                <div
                  className={styles.lightbox}
                  onClick={closeLightbox}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                >
                  <div
                    className={`${styles.lightboxContent} ${
                      isZoomed ? styles.zoomed : ""
                    }`}
                    style={{
                      transform: isZoomed
                        ? `scale(1.5) translate(${position.x}px, ${position.y}px)`
                        : "scale(1) translate(0, 0)",
                    }}
                  >
                    <img
                      src={selectedImage}
                      alt="Visualização ampliada"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!isDragging) toggleZoom();
                      }}
                      onMouseDown={handleMouseDown}
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleMouseUp}
                    />
                    <button
                      className={styles.closeButton}
                      onClick={() => {
                        setSelectedImage(null);
                        setPosition({ x: 0, y: 0 });
                      }}
                    >
                      &times;
                    </button>
                  </div>
                </div>
              )}

              {project.images && project.images.length > 0 && (
                <div className={styles.projectGallery}>
                  {project.images.map((img, index) => (
                    <div
                      key={index}
                      className={styles.galleryItem}
                      onClick={() => openLightbox(img)}
                    >
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className={styles.technologies}>
                <h3>Tecnologias</h3>
                <div className={styles.techGrid}>
                  {project.technologies.map((tech, index) => (
                    <div key={index} className={styles.techItem}>
                      <img src={tech.icon} alt={tech.name} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.projectLinks}>
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {link.label === "Repositório" ? (
                      <>
                        <FaGithub /> {link.label}
                      </>
                    ) : (
                      <>
                        <FaExternalLinkAlt /> {link.label}
                      </>
                    )}
                    <FiArrowUpRight className={styles.linkIcon} />
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectPage;
