import React from 'react'
import LinkArrow from 'assets/images/link_arrow.svg'
import './LinkButton.scss'


type LinkButtonProps = {
    text: string;
    disabled?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, disabled }) => {
    return <div className={`link-button clickable ${disabled && 'disabled'}`}>
        <span className={`link-text ${disabled && 'disabled'}`}>{text}</span>
        <img src={LinkArrow} alt='link-arrow'/>
    </div>
}

export default LinkButton