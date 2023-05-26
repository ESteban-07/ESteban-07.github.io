import { LinkedinIcon, GithubIcon } from '../Icons';
import styels from './styles.module.scss';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styels.footer}>
      <div>
        <h3>Copyright © {currentYear}. All rights are reserved</h3>
        <span>
          <LinkedinIcon />
          <GithubIcon />
        </span>
      </div>
    </footer>
  );
}

export default Footer;
