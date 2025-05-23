import Logo from '../../shared/assets/svg/logo.svg?react';
import './Footer.scss';

export const Footer = () => {
  return (
    <div className="footer-wrapper-bg">
      <div className="container">
        <footer className="footer">
          <div className="footer__logo">
            <Logo className="footer__logo-icon" />
            <h5 className="footer__logo-title">Personal</h5>
          </div>
          <div className="footer__content">
            <p className="footer__content-text">@ 2019-2023 Personal</p>
            <p className="footer__content-text">All rights reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
};
