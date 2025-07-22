import icons from "../assets/icons";
import styles from "./Technologies.module.css";

const technologyCategories = [
  {
    category: "Backend",
    technologies: [
      { name: "Python", icon: icons.python },
      { name: "Django", icon: icons.django },
      { name: "Node.js", icon: icons.nodejs },
      { name: "PostgreSQL", icon: icons.postgresql },
      { name: "SQLite3", icon: icons.sqlite },
    ]
  },
  {
    category: "Frontend",
    technologies: [
      { name: "TypeScript", icon: icons.ts },
      { name: "React", icon: icons.react },
      { name: "JavaScript", icon: icons.javascript },
      { name: "HTML5", icon: icons.html5 },
      { name: "CSS3", icon: icons.css3 },
      { name: "Bootstrap", icon: icons.bootstrap },
    ]
  },
  {
    category: "Ferramentas e Outros",
    technologies: [
      { name: "Postman", icon: icons.postman },
      { name: "PySimpleGUI", icon: icons.pysimplegui },
    ]
  }
];


function Technologies() {
  return (
    <section id="technologies" className={styles.technologies} data-aos="fade-up">
      <h2 className={styles.title}>Minhas Habilidades</h2>
      <div className={styles.grid}>
        {/* USANDO flatMap PARA CRIAR UMA LISTA ÚNICA */}
        {technologyCategories.flatMap(categoryGroup => [
          // Item 1: O título da categoria (precisa de uma key)
          <h3 key={categoryGroup.category} className={styles.categoryTitle}>
            {categoryGroup.category}
          </h3>,
          
          // Itens 2, 3, 4...: Os cards de tecnologia
          ...categoryGroup.technologies.map((tech, index) => (
            <div key={`${categoryGroup.category}-${index}`} className={styles.card}>
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className={styles.icon}
                loading="lazy"
              />
              <span className={styles.name}>{tech.name}</span>
            </div>
          ))
        ])}
      </div>
    </section>
  );
}

export default Technologies;