import cn from 'classnames';
import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  svgPath?: string;
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  iconPosition?: 'left' | 'right';
  size?: 'small' | 'medium';
  text?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  svgPath,
  icon,
  iconPosition = 'left',
  size = 'medium',
  className,
  disabled,
  ...props
}) => {
  const isIconOnly = !!svgPath || !!icon;

  const buttonClasses = cn(
    styles.button,
    styles[size],
    {
      [styles.iconOnly]: isIconOnly,
      [styles.disabled]: disabled,
    },
    className
  );

  const textClassName = size === 'small' ? 'button-text-2' : 'button-text';

  const renderIcon = () => {
    if (icon) {
      return React.cloneElement(icon, { className: styles.icon });
    }
  };

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {(svgPath || icon) && (iconPosition === 'left' || isIconOnly) && renderIcon()}
      {text && <span className={textClassName}>{text}</span>}
      {(svgPath || icon) && iconPosition === 'right' && !isIconOnly && renderIcon()}
    </button>
  );
};
