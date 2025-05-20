import React from 'react';
import './IconCard.scss';

interface IconCardProps {
  size: 'small' | 'large';
  srcIcon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  title?: string;
  colorInverted?: boolean;
}

export const IconCard = ({
  size = 'small',
  srcIcon,
  title,
  colorInverted = false,
}: IconCardProps) => {
  return (
    <div className={`icon-card icon-card--${size}`}>
      <div className="icon-card__icon">
        {srcIcon && React.cloneElement(srcIcon, { className: 'icon-card__icon-image' })}
      </div>
      <div className="icon-card__title">{title}</div>
    </div>
  );
};
