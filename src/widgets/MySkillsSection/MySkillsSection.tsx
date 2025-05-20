import GitIcon from '../../shared/assets/svg/git.svg?react';
import NestIcon from '../../shared/assets/svg/nest.svg?react';
import SassIcon from '../../shared/assets/svg/saas.svg?react';
import SocketIcon from '../../shared/assets/svg/socket.svg?react';
import { IconCard } from '../../shared/components/IconCard';
import './MySkillsSection.scss';

export function MySkillsSection() {
  return (
    <div className="container">
      <div className="my-skills-section">
        <div className="my-skills-section__titles">
          <p className="my-skills-section__titles-title1 display-text">My</p>
          <p className="my-skills-section__titles-title2 display-text">Skills</p>
        </div>
      </div>
      <div className="my-skills-section__cards">
        <IconCard size="large" srcIcon={<GitIcon />} title="Git" />
        <IconCard size="large" srcIcon={<SassIcon />} title="Sass" colorInverted />
        <IconCard size="large" srcIcon={<NestIcon />} title="Nest" />
        <IconCard size="large" srcIcon={<SocketIcon />} title="Socket" colorInverted />
        <IconCard size="large" srcIcon={<GitIcon />} title="Git" />
      </div>
    </div>
  );
}
