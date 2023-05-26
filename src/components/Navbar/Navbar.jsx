import { BurgerMenuIcon, CloseMenuIcon } from '@components/Icons';
import { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import useMediaQuery from '@hooks/useMediaQuery';

function Navbar() {
  const linksRef = useRef(null);
  const { isMobileView } = useMediaQuery();

  useEffect(() => {
    // Handle click events on navigation links
    const handleClick = (e) => {
      e.preventDefault();
      const id = e.currentTarget.getAttribute('href').slice(1);
      const element = document.getElementById(id);
      const navHeight = getNavHeight();
      const position = element.offsetTop - navHeight;
      smoothScrollToPosition(position);

      if (isMobileView) {
        toggleMenu();
      }
    };

    // Get the height of the navigation
    const getNavHeight = () => {
      const nav = document.querySelector(`.${styles.fixedNav}`);
      return nav.clientHeight;
    };

    // Smoothly scroll to a position
    const smoothScrollToPosition = (position) => {
      window.scrollTo({
        left: 0,
        top: position,
        behavior: 'smooth',
      });
    };

    // Add click event listeners to navigation links
    const addClickListeners = () => {
      const links = linksRef.current.querySelectorAll('a');
      links.forEach((link) => {
        link.addEventListener('click', handleClick);
      });
    };

    // Remove click event listeners from navigation links
    const removeClickListeners = () => {
      const links = linksRef.current.querySelectorAll('a');
      links.forEach((link) => {
        link.removeEventListener('click', handleClick);
      });
    };

    // Add click event listeners when linksRef is available
    if (linksRef.current) {
      addClickListeners();
    }

    // Store the current value of linksRef in a variable
    const currentLinksRef = linksRef.current;

    // Clean up by removing click event listeners when component is unmounted
    return () => {
      if (currentLinksRef) {
        removeClickListeners();
      }
    };
  }, [isMobileView]);

  useEffect(() => {
    // Show/hide navigation links based on mobile view
    if (linksRef.current) {
      if (isMobileView) {
        linksRef.current.classList.add(styles.hide);
      } else {
        linksRef.current.classList.remove(styles.hide);
      }
    }
  }, [isMobileView]);

  const toggleMenu = () => {
    if (linksRef.current) {
      linksRef.current.classList.toggle(styles.hide);
    }
  };

  return (
    <nav className={styles.fixedNav}>
      <h3 className={styles.logo}>Esteban.dev</h3>
      <ul className={`${styles.linksContainer}`} ref={linksRef}>
        <li>
          <CloseMenuIcon
            className={styles.closeMenu}
            handleClick={toggleMenu}
          />
        </li>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <BurgerMenuIcon className={styles.burgerMenu} handleClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
