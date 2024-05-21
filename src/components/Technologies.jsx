import icons from "../assets/icons"
import styles from "./Technologies.module.css"

function Technologies() {
  return (
    <div className={styles.technologies} data-aos="fade-up">
      <h2>Tecnologias</h2>
      <ul className={styles.list}>
        <li>
          <img src={icons.python} alt="Python" />
        </li>
        <li>
          <img src={icons.django} alt="Django" />
        </li>
        <li>
          <img src={icons.postgresql} alt="PostgreSQL" />
        </li>
        <li>
          <img src={icons.sqlite} alt="sqlite" />
        </li>
        <li>
          <img src={icons.postman} alt="Postman" />
        </li>
        <li>
          <img src={icons.javascript} alt="JavaScript" />
        </li>
        <li>
          <img src={icons.nodejs} alt="Node.js" />
        </li>
        <li>
          <img src={icons.html5} alt="HTML5" />
        </li>
        <li>
          <img src={icons.css3} alt="CSS3" />
        </li>
        <li>
          <img src={icons.react} alt="React" />
        </li>
        <li>
          <img src={icons.pysimplegui} alt="PySimpleGUI" />
        </li>
      </ul>
    </div>
  )
}

export default Technologies
