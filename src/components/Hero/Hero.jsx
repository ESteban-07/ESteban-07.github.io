import { WavingHandIcon, LinkedinIcon, GithubIcon } from '../Icons';
import styles from './styles.module.scss';
import TechStack from './TechStack';

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <div className={styles.heroDescription}>
          <h1>
            Front-End React Developer <WavingHandIcon />
          </h1>

          <p>
            Hi, I&apos;m Esteban Portillo. A passionate Frontend React Developer
            based in San Salvador, El Salvador. 📍
          </p>
          <span>
            <LinkedinIcon />
            <GithubIcon />
          </span>
        </div>
        <div className={styles.heroImage}></div>
      </div>
      <TechStack />
    </section>
  );
}

export default Hero;
