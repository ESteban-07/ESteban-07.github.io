import styles from './styles.module.scss';

function Card({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <a href={project.demo} target="_blank" rel="noreferrer">
          <img src={project.image} alt={project.title} />
        </a>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <ul className={styles.stack}>
          {project.technologies.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
        </ul>
        <span className={styles.links}>
          <a href={project.repo} target="_blank" rel="noreferrer">
            Code
            <i className="fa-brands fa-github"></i>
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer">
            Live Demo
            <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
          </a>
        </span>
      </div>
    </div>
  );
}

export default Card;
