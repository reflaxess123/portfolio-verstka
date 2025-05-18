import { useState } from 'react';
import DownloadIcon from '../../shared/assets/svg/download.svg?react';
import Logo from '../../shared/assets/svg/logo.svg?react';
import MenuIcon from '../../shared/assets/svg/menu.svg?react';
import { Button } from '../../shared/components/Button/Button';
import styles from './Header.module.scss';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className={`${styles['header']} ${isMenuOpen ? styles.active : ''}`}>
        <div className={styles['header__logo']}>
          <Logo />
          <h5 className={styles['header__logo-title']}>Personal</h5>
        </div>
        <ul className={styles['header__menu']}>
          <h5 className={styles['header__menu-item']}>About Me</h5>
          <h5 className={styles['header__menu-item']}>Skills</h5>
          <h5 className={styles['header__menu-item']}>Projects</h5>
          <h5 className={styles['header__menu-item']}>Contacts Me</h5>
        </ul>
        <Button
          className={styles['header__button']}
          icon={<DownloadIcon />}
          size="medium"
          text="Resume"
        />
        <MenuIcon className={styles['header__menu-icon']} onClick={handleMenuClick} />
      </header>
      <div className={`${styles['header__menu-overlay']} ${isMenuOpen ? styles.active : ''}`}>
        <div className={styles['header__menu-overlay-items']}>
          <h2 className={styles['header__menu-item']}>About Me</h2>
          <h2 className={styles['header__menu-item']}>Skills</h2>
          <h2 className={styles['header__menu-item']}>Projects</h2>
          <h2 className={styles['header__menu-item']}>Contacts Me</h2>
        </div>
        <MenuIcon className={styles['header__menu-icon']} onClick={handleMenuClick} />
      </div>
    </div>
  );
}
