import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import Container from "../layouts/Container";
import Darkmode from "../darkmode/Darkmode";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (!isMobile) setMenuOpen(false);
    };

    const handleClickOutside = (event) => {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile, menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={styles.navbar} ref={navRef} aria-label="Main navigation">
        <Container>
          <div className={styles.navContent}>
            {isMobile && (
              <button 
                className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
                onClick={toggleMenu}
                aria-expanded={menuOpen}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            )}

            <ul className={`${styles.navList} ${menuOpen ? styles.open : ''}`}>
              <li className={styles.navItem}>
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/projetos" onClick={() => setMenuOpen(false)}>Projetos</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/contato" onClick={() => setMenuOpen(false)}>Contato</Link>
              </li>
            </ul>

            <div className={styles.darkModeToggle}>
              <Darkmode />
            </div>
          </div>
        </Container>
      </nav>
      
      {/* Overlay para o menu mobile */}
      <div 
        className={`${styles.menuOverlay} ${menuOpen && isMobile ? styles.visible : ''}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}

export default NavBar;