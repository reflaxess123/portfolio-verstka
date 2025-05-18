import DownloadIcon from '../../shared/assets/svg/download.svg?react';
import Logo from '../../shared/assets/svg/logo.svg?react';
import { Button } from '../../shared/components/Button/Button';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles['header']}>
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
    </header>
  );
}
