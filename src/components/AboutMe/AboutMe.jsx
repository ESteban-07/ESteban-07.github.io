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
          <p>
            I&apos;m a Junior Front-End Developer skilled in HTML5, CSS3, and
            JavaScript, with experience in React JS and popular CSS frameworks
            and preprocessors. Proficient in Git and prototyping with Figma. I
            build responsive web pages using a Mobile First approach and have a
            basic understanding of UX/UI design.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
