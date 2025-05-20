import { IconCard } from '../../shared/components/IconCard';
import FacebookIcon from '../../shared/assets/svg/facebook.svg?react';
import './HelloSection.scss';

export function HelloSection() {
  return (
    <div className="container">
      <div className="hello-section">
        <div className="hello-section__block1">
          <p className="hello-section__block1-title1 display-text">Hello, I'm</p>
          <p className="hello-section__block1-title2 display-text">Evren Shah.</p>
        </div>
        <div className="hello-section__block2">
          <p className="hello-section__block2-title3 display-text">Frontend</p>
          <p className="hello-section__block2-title4 display-text-outlined">Developer</p>
        </div>
        <div className="hello-section__block3">
          <p className="hello-section__block3-title5 display-text">Based In</p>
          <p className="hello-section__block3-title6 display-text">India.</p>
        </div>
        <p className="hello-section__text p2">
          I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to specimen book.
        </p>
        <div className="hello-section__icons">
          <IconCard size="small" srcIcon={<FacebookIcon />} />
          <IconCard size="small" srcIcon={<FacebookIcon />} />
          <IconCard size="small" srcIcon={<FacebookIcon />} />
          <IconCard size="small" srcIcon={<FacebookIcon />} />
        </div>
      </div>
    </div>
  );
}
