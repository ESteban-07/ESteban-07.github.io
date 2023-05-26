import styles from './styles.module.scss';
import Card from './Card';
import { projects } from './data';

function Projects() {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.projectsContent}>
        <h4>Projects</h4>
        <h3 className={styles.quote}>
          Each project is a unique piece of development 🧩
        </h3>
        <ul className={styles.gridContainer}>
          {projects.map((project) => {
            return <Card key={project.id} project={project} />;
          })}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
