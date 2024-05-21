import styles from "./Home.module.css"

import Info from "../Info"
import Technologies from "../Technologies"
import AboutMe from "../AboutMe"
import Projects from "../Projects"

function Home() {
  return (
    <section className={styles.bio}>
      <Info />
      <AboutMe />
      <Technologies />
      <Projects />
    </section>
  )
}

export default Home
