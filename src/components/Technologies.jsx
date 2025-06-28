import icons from "../assets/icons";
import styles from "./Technologies.module.css";

const technologies = [
  { name: "Python", icon: icons.python },
  { name: "Django", icon: icons.django },
  { name: "PostgreSQL", icon: icons.postgresql },
  { name: "SQLite3", icon: icons.sqlite },
  { name: "Postman", icon: icons.postman },
  { name: "JavaScript", icon: icons.javascript },
  { name: "Node.js", icon: icons.nodejs },
  { name: "HTML5", icon: icons.html5 },
  { name: "CSS3", icon: icons.css3 },
  { name: "React", icon: icons.react },
  { name: "PySimpleGUI", icon: icons.pysimplegui }
];

function Technologies() {
  return (
    <section className={styles.technologies} data-aos="fade-up">
      <h2 className={styles.title}>Tecnologias que utilizo</h2>
      <div className={styles.grid}>
        {technologies.map((tech, index) => (
          <div key={index} className={styles.card}>
            <img 
              src={tech.icon} 
              alt={tech.name} 
              className={styles.icon}
              loading="lazy" // Otimização de carregamento
            />
            <span className={styles.name}>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;