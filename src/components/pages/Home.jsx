import { useEffect } from "react";
import AOS from "aos";
import styles from "./Home.module.css";
import Info from "../Info";
import AboutMe from "../AboutMe";
import Projects from "../Projects";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className={styles.homeContainer}>
      <section className={styles.heroSection}>
        <Info />
      </section>

      <section className={styles.projectsSection} id="projects">
        <Projects />
      </section>

      <section className={styles.aboutSection} id="about">
        <AboutMe />
      </section>
    </main>
  );
}

export default Home;