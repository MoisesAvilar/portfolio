import { useState } from "react"
import { Link } from "react-router-dom"

import styles from "./NavBar.module.css"
import Container from "../layouts/Container"
import Darkmode from "../darkmode/Darkmode"
import { GiHamburgerMenu } from "react-icons/gi"

function NavBar() {
  const [menuVisible, setMenuVisible] = useState(true)

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }
  return (
    <nav className={styles.navbar}>
      <Container>
        <ul className={styles.list}>
          <li
            className={`${styles.item} ${styles.hamburger}`}
            onClick={toggleMenu}
          >
            <GiHamburgerMenu />
          </li>
          {menuVisible && (
            <>
              <li className={`${styles.item} ${styles.pages}`}>
                <Link to={"/"}>Home</Link>
              </li>
              <li className={`${styles.item} ${styles.pages}`}>
                <Link to={"/contato"}>Contato</Link>
              </li>
              <li className={`${styles.item} ${styles.pages}`}>
                <Link to={"/projetos"}>Projetos</Link>
              </li>
            </>
          )}
          <li className={styles.darkmode}>
            <Darkmode />
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default NavBar
