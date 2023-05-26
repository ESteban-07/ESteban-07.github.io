import styles from './styles.module.scss';

function Contact() {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.contactWrapper}>
        <h4>Contact</h4>
        <h3>Don&apos;t be shy! Hit me up! 👇</h3>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <span className={styles.icon}>
              <i className="fa-solid fa-map-location-dot"></i>
            </span>
            <div className={styles.details}>
              <h3>Location</h3>
              <p>San Salvador, El Salvador</p>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <span className={styles.icon}>
              <i className="fa-solid fa-envelope-open-text"></i>
            </span>
            <div className={styles.details}>
              <h3>Mail</h3>
              <a href="mailto:esteban.07.elias@gmail.com">
                esteban.07.elias@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
