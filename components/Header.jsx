import Link from 'next/link';

import styles from './layout.module.scss';

const Header = () => (
  <div className={styles.navBar}>
    <nav className={styles.navBar__wrapper}>
      <button type="button" className={styles.navBarButton}>
        <Link href="/" className={styles.navBar__link}>
          <a className={styles.navBar__link}>Logo</a>
        </Link>
      </button>
      <button type="button" className={styles.navBarButton}>
        <Link href="triageAutomation" className={styles.navBar__link}>
          <a className={styles.navBar__link}>Robô de Triagem</a>
        </Link>
      </button>
      <button type="button" className={styles.navBarButton}>
        <Link href="cardioPatch" className={styles.navBar__link}>
          <a className={styles.navBar__link}>Cardio Patch</a>
        </Link>
      </button>
      <button type="button" className={styles.navBarButton}>
        <Link href="contact" className={styles.navBar__link}>
          <a className={styles.navBar__link}>Fale Conosco</a>
        </Link>
      </button>
    </nav>
  </div>
);

export { Header };
