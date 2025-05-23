import DiscordIcon from '../../shared/assets/svg/discord.svg?react';
import FacebookIcon from '../../shared/assets/svg/facebook.svg?react';
import RedditIcon from '../../shared/assets/svg/reddit.svg?react';
import TwitterIcon from '../../shared/assets/svg/twitter.svg?react';
import { Button } from '../../shared/components/Button/Button';
import { IconCard } from '../../shared/components/IconCard';
import { Input } from '../../shared/components/Input';
import './ContactSection.scss';

export const ContactSection = () => {
  return (
    <div className="container">
      <section className="contact-section">
        <form className="contact-section__form">
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Input placeholder="Your Website" />
          <Input placeholder="How can I help you?" />
          <div className="contact-section__form-buttons">
            <Button text="Get in touch" />
            <div className="contact-section__form-buttons-icons">
              <IconCard size="small" srcIcon={<FacebookIcon />} />
              <IconCard size="small" srcIcon={<RedditIcon />} colorInverted />
              <IconCard size="small" srcIcon={<TwitterIcon />} colorInverted />
              <IconCard size="small" srcIcon={<DiscordIcon />} colorInverted />
            </div>
          </div>
        </form>
        <aside className="contact-section__content">
          <div className="contact-section__content-header">
            <div className="contact-section__content-header-block1">
              <div className="contact-section__content-header-block1-title1 display-text">
                Let's
              </div>
              <div className="contact-section__content-header-block1-title2 display-text display-text-outlined">
                talk
              </div>
              <div className="contact-section__content-header-block1-title3 display-text">for</div>
            </div>
            <div className="contact-section__content-header-block2-title4 display-text">
              Something special
            </div>
          </div>
          <p className="contact-section__content-description p2">
            I seek to push the limits of creativity to create high-engaging, user-friendly, and
            memorable interactive experiences.
          </p>
          <div className="contact-section__content-contacts">
            <p className="contact-section__content-contacts-email h3">Youremail@gmail.com</p>
            <p className="contact-section__content-contacts-phone h3">1234567890</p>
          </div>
        </aside>
      </section>
    </div>
  );
};
