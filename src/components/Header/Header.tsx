import { Link, useLocation } from 'react-router-dom';
import * as styles from './Header.module.scss';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoLink}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🚀</span>
            <span className={styles.logoText}>WebpackApp</span>
          </div>
        </Link>

        <nav className={styles.nav}>
          <Link
            to="/"
            className={`${styles.link} ${isActive('/') ? styles.active : ''}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${styles.link} ${isActive('/about') ? styles.active : ''}`}
          >
            About
          </Link>
          <Link
            to="/shop"
            className={`${styles.link} ${isActive('/shop') ? styles.active : ''}`}
          >
            Shop
          </Link>
        </nav>

        <div className={styles.actions}>
          <button className={styles.themeToggle} aria-label="Toggle theme">
            🌙
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
