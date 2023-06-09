import AboutIMG from '@assets/images/about-pic.jpg';
import styles from './styles.module.scss';

function AboutMe() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutWrapper}>
        <div>
          <img
            className={styles.aboutImg}
            src={AboutIMG}
            alt="A dedicated Front-end Developer based in San Salvador, El Salvador."
          />
        </div>
        <div className={styles.aboutContent}>
          <h4>About Me</h4>
          <h3>
            A dedicated Front-end Developer <br />
            based in San Salvador, El Salvador. 📍
          </h3>
          <p className={styles.description}>
            Experienced Front-End Developer with 3+ years of expertise in web
            development. Skilled in HTML5, CSS3, JavaScript, React JS, and
            popular CSS frameworks and preprocessors. Familiarized with CMS
            platforms (WordPress, Webflow). Proficient in Git, Figma
            prototyping, and the Mobile First approach. Worked with DBs (SQL
            Server, Firebase) and OS (Windows, WSL, Linux). Possesses a basic
            understanding of UX/UI principles.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
