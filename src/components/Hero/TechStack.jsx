import * as Icons from '../Icons';
import styles from './styles.module.scss';

export default function TechStack() {
  return (
    <div className={styles.skills}>
      <p>Tech Stack</p>
      <ul>
        <li>
          <Icons.HTML5Icon />
        </li>
        <li>
          <Icons.CSS3Icon />
        </li>
        <li>
          <Icons.JavaScriptIcon />
        </li>
        <li>
          <Icons.ReactJSIcon />
        </li>
        <li>
          <Icons.BootstrapIcon />
        </li>
        <li>
          <Icons.TailwindIcon />
        </li>
        <li>
          <Icons.SassIcon />
        </li>
      </ul>
    </div>
  );
}
