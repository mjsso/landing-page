import React, { useState } from 'react'
import ArrowDown from 'assets/images/arrow_down.svg'


export type AccordionItemProps = {
    title: string;
    content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
    
    const [isActive, setIsActive] = useState(false)
    
    const handleClick = () => {
        setIsActive(!isActive)
    }
    
    return <div className="accordion-item">
        <div className="title-container" onClick={handleClick} aria-expanded={isActive}>
            <div className="title">{title}</div>
            <img className="arrow" src={ArrowDown} alt="arrow" aria-expanded={isActive}/>
        </div>
        <div className="content-container" aria-expanded={isActive}>
            <div className="content">
                {content}
            </div>
        </div>
    </div>
}

export default AccordionItem