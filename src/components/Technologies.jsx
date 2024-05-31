import icons from "../assets/icons"
import styles from "./Technologies.module.css"

function Technologies() {
  return (
    <div className={styles.technologies} data-aos="fade-up">
      <h2>Tecnologias que utilizo</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <img src={icons.python} alt="Python" />
          <span>Python</span>
        </li>
        <li className={styles.item}>
          <img src={icons.django} alt="Django" />
          <span>Django</span>
        </li>
        <li className={styles.item}>
          <img src={icons.postgresql} alt="PostgreSQL" />
          <span>PostgreSQL</span>
        </li>
        <li className={styles.item}>
          <img src={icons.sqlite} alt="sqlite" />
          <span>SQLite3</span>
        </li>
        <li className={styles.item}>
          <img src={icons.postman} alt="Postman" />
          <span>Postman</span>
        </li>
        <li className={styles.item}>
          <img src={icons.javascript} alt="JavaScript" />
          <span>Javascript</span>
        </li>
        <li className={styles.item}>
          <img src={icons.nodejs} alt="Node.js" />
          <span>Node</span>.js
        </li>
        <li className={styles.item}>
          <img src={icons.html5} alt="HTML5" />
          <span>HTML5</span>
        </li>
        <li className={styles.item}>
          <img src={icons.css3} alt="CSS3" />
          <span>CSS3</span>
        </li>
        <li className={styles.item}>
          <img src={icons.react} alt="React" />
          <span>React</span>
        </li>
        <li className={styles.item}>
          <img src={icons.pysimplegui} alt="PySimpleGUI" />
          <span>PySimpleGUI</span>
        </li>
      </ul>
    </div>
  )
}

export default Technologies
