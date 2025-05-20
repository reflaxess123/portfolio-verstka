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
    <div className={`icon-card-${size} ${colorInverted ? `icon-card-${size}--inverted` : ''}`}>
      <div className={`icon-card-${size}__icon`}>
        {srcIcon &&
          React.cloneElement(srcIcon, {
            className: colorInverted
              ? `icon-card-${size}__icon-svg-inverted`
              : `icon-card-${size}__icon-svg`,
          })}
      </div>
      <div className={`icon-card-${size}__title`}>{title}</div>
    </div>
  );
};
