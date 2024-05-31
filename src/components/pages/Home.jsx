import styles from "./Home.module.css"

import Info from "../Info"
import AboutMe from "../AboutMe"
import Projects from "../Projects"

function Home() {
  return (
    <section className={styles.bio}>
      <Info />
      <Projects />
      <AboutMe />
    </section>
  )
}

export default Home
