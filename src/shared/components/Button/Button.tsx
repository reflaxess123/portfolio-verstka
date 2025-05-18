import React from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    svgPath?: string;
    iconPosition?: 'left' | 'right';
    size?: 'small' | 'medium';
}

const IconComponent = ({ path }: { path: string }) => (
    <span
        className={styles.icon}
        style={{
            WebkitMaskImage: `url(${path})`,
            maskImage: `url(${path})`,
        }}
    />
);

export const Button: React.FC<ButtonProps> = ({
    children,
    svgPath,
    iconPosition = 'left',
    size = 'medium',
    className,
    disabled,
    ...props
}) => {
    const isIconOnly = !children && !!svgPath;

    const buttonClasses = cn(
        styles.button,
        styles[size],
        {
            [styles.iconOnly]: isIconOnly,
            [styles.disabled]: disabled, // Добавляем класс для disabled состояния, если стили это используют
        },
        className
    );

    return (
        <button className={buttonClasses} disabled={disabled} {...props}>
            {svgPath && (iconPosition === 'left' || isIconOnly) && <IconComponent path={svgPath} />}
            {children}
            {svgPath && iconPosition === 'right' && !isIconOnly && <IconComponent path={svgPath} />}
        </button>
    );
};
