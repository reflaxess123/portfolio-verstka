import Logo from '../../src/assets/svg/logo.svg?react';
import './Header.scss';

export function Header() {
    return (
        <header className="header">
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
        </header>
    );
}
