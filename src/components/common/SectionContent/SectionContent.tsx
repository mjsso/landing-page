import React from 'react'
import './SectionContent.scss'


type SectionContentProps = {
    title?: string;
    titleColor?: 'primary' | 'secondary' | 'white' | 'grey' | 'blackNavy';
    subTitle?: string;
    subTitleColor?: 'primary' | 'secondary' | 'white' | 'grey' | 'blackNavy';
}

const SectionContent: React.FC<SectionContentProps> = ({ children, title, subTitle, titleColor = 'white', subTitleColor = 'white' }) => {
    return <div className="section-content">
        {title && <div className={`main-title ${titleColor}`}>{title}</div>}
        {subTitle && <div className={`sub-title ${subTitleColor}`}>{subTitle}</div>}
        {children}
    </div>
}

export default SectionContent
