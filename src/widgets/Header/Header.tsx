import { useState } from 'react';
import DownloadIcon from '../../shared/assets/svg/download.svg?react';
import Logo from '../../shared/assets/svg/logo.svg?react';
import BurgerButton from '../../shared/components/BurgerButton';
import { Button } from '../../shared/components/Button/Button';
import './Header.scss';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Menu = ['About Me', 'Skills', 'Projects', 'Contacts Me'];

  return (
    <div className="container">
      <header className={`header ${isMenuOpen ? 'active' : ''}`}>
        <div className="header__logo">
          <Logo />
          <h5 className="header__logo-title">Personal</h5>
        </div>
        <ul className="header__menu">
          <h5 className="header__menu-item">About Me</h5>
          <h5 className="header__menu-item">Skills</h5>
          <h5 className="header__menu-item">Projects</h5>
          <h5 className="header__menu-item">Contacts Me</h5>
        </ul>
        <Button className="header__button" icon={<DownloadIcon />} size="medium" text="Resume" />
        <BurgerButton
          className="header__menu-icon"
          onClick={handleMenuClick}
          isActive={isMenuOpen}
        />
      </header>
      <div className={`fullscreen-menu ${isMenuOpen ? 'is-active' : ''}`}>
        <ul className="fullscreen-menu__list">
          {Menu.map((item) => (
            <li className="h5 fullscreen-menu__item">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
