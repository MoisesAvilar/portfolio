import { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    
    // Calculate scroll progress (0-100)
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = (window.scrollY / scrollHeight) * 100;
    setProgress(Math.round(scrollProgress));
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={styles.container}>
      {isVisible && (
        <button 
          className={styles.button} 
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title={`Voltar ao topo (${progress}% rolado)`}
        >
          <div className={styles.progressRing}>
            <svg className={styles.progressCircle} viewBox="0 0 36 36">
              <path
                className={styles.progressCircleBg}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={styles.progressCircleFill}
                strokeDasharray={`${progress}, 100`}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>
          <FaArrowUp className={styles.arrowIcon} />
          <span className={styles.progressText}>{progress}%</span>
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;