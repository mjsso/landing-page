import React from 'react'
import './VerticalCard.scss'


type VerticalCardProps = {
    title: string;
    description?: string;
    imgSrc?: any;
}

const VerticalCard: React.FC<VerticalCardProps> = ({ title, description, imgSrc }) => {
    return <div className='vertical-card'>
        <img src={imgSrc} alt={title} className='vertical-card-image'/>
        <div className="text-container">
            <div className='vertical-card-title'>{title}</div>
            <div className='vertical-card-description'>{description}</div>
        </div>
    </div>
}

export default VerticalCard