import wavingHandIcon from '@assets/icons/waving-icon.png';
import cssIcon from '@assets/icons/css-icon.svg';
import htmlIcon from '@assets/icons/html-icon.svg';
import jsIcon from '@assets/icons/javascript-icon.svg';
import reactJSIcon from '@assets/icons/react-icon.svg';
import tailwindIcon from '@assets/icons/tailwind-icon.svg';
import sassIcon from '@assets/icons/sass-icon.svg';
import bootstrapIcon from '@assets/icons/bootstrap-icon.svg';

export function BurgerMenuIcon({ className, handleClick }) {
  return (
    <span className={className} onClick={handleClick}>
      <i className="fa-solid fa-bars-staggered mobile-menu"></i>
    </span>
  );
}

export function CloseMenuIcon({ className, handleClick }) {
  return (
    <span className={className} onClick={handleClick}>
      <i className="fa-solid fa-xmark"></i>
    </span>
  );
}

export function LinkedinIcon() {
  return (
    <a
      href="https://www.linkedin.com/in/esteban-portillo/"
      target="_blank"
      rel="noreferrer">
      <i className="fa-brands fa-linkedin"></i>
    </a>
  );
}

export function GithubIcon() {
  return (
    <a href="https://github.com/ESteban-07" target="_blank" rel="noreferrer">
      <i className="fa-brands fa-github"></i>
    </a>
  );
}

export function WavingHandIcon() {
  return (
    <img
      src={wavingHandIcon}
      alt="Hello! I'm Esteban Portillo, a passionate Junior React Frontend Developer"
    />
  );
}

export function HTML5Icon() {
  return (
    <img
      src={htmlIcon}
      alt="Proficient in HTML5 front-end technology"
      title="HTML5"
    />
  );
}

export function CSS3Icon() {
  return (
    <img
      src={cssIcon}
      alt="Proficient in CSS3 front-end technology"
      title="CSS3"
    />
  );
}

export function JavaScriptIcon() {
  return (
    <img
      src={jsIcon}
      alt="Proficient in JavaScript front-end technology"
      title="JavaScript"
    />
  );
}

export function ReactJSIcon() {
  return (
    <img
      src={reactJSIcon}
      alt="Proficient in ReactJS, a popular front-end library"
      title="React JS"
    />
  );
}

export function TailwindIcon() {
  return (
    <img
      src={tailwindIcon}
      alt="Proficient in Tailwind CSS, a CSS framework"
      title="Tailwind CSS"
    />
  );
}

export function BootstrapIcon() {
  return (
    <img
      src={bootstrapIcon}
      alt="Proficient in Bootstrap, a CSS framework"
      title="Bootstrap"
    />
  );
}

export function SassIcon() {
  return (
    <img
      src={sassIcon}
      alt="Proficient in Sass, a CSS preprocessor"
      title="Sass"
    />
  );
}
