import React, { forwardRef } from 'react'
import { Element } from 'react-scroll'
import './SectionContainer.scss'


type SectionContainerProps = {
    id: string;
    className?: string;
    onWheel?: any;
}

const SectionContainer: React.FC<SectionContainerProps> = forwardRef<HTMLDivElement, SectionContainerProps>(({ id, className = '', children, onWheel }, ref) => {
    return <Element id={id} name={id}>
        <div ref={ref} className={`section-container ${className}`} onWheel={onWheel}>{children}</div>
    </Element>
})

export default SectionContainer