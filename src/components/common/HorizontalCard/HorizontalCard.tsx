import React from 'react'
import './HorizontalCard.scss'


type HorizontalCardProps = {
    imgSrc: string;
    className?: string;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({ imgSrc, className = '' }) => {
    return <div className='horizontal-card'>
        <img src={imgSrc} alt={imgSrc} className={`logo ${className}`}/>
    </div>
}

export default HorizontalCard