import React from 'react'
import './Button.scss'
import history from 'routerHistory'


interface ButtonProps {
    className?: string;
    type?: 'primary' | 'secondary' | 'transparent' | 'transparent-disabled' | 'primary-disabled';
    onClick?: (e: any) => void;
    to?: string;
    href?: string;
    text?: string;
}

const Button: React.FC<ButtonProps> = ({ type = 'primary', text, to, href, onClick, className = '' }) => {
    const handleClick = (e) => {
        if (to) {
            history.push(to)
        } else if (href) {
            window.open(href, '_blank')
        } else if (onClick) {
            onClick(e)
        }
    }
    
    const buttonClassName = () => [
        'clickable',
        'lxr-button', type, className
    ].filter(each => each.length > 0).join(' ')
    
    return <div className={buttonClassName()} onClick={handleClick}>{text}</div>
}

export default Button