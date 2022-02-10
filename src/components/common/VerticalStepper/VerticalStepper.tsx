import React, { useMemo, useCallback } from 'react'
import useStepperAnimation from 'hooks/useStepperAnimation'
import './VerticalStepper.scss'


export type PointData = {
    title: string;
    description: string;
    isActive: boolean;
}

type LinearChartProps = {
    items: PointData[]
}

const VerticalStepper: React.FC<LinearChartProps> = ({ items }) => {
    const height = useMemo(() => items.length * 120, [items.length])
    
    const handleStyle = useCallback(() => {
        items.forEach((item, index) => {
            document.getElementById(`step${index}`).classList.add(`step${index + 1}`)
        })
    }, [])
    const ref = useStepperAnimation(handleStyle)
    
    return <div {...ref} className='line-chart-container' style={{ height }}>
        <ol className='c-stepper'>
            {items?.map((item, index) => {
                const { title, description, isActive } = item
                const active = isActive ? 'activated' : 'deactivated'
                return <li className={`c-stepper__item ${active}`} key={`step${index}`} id={`step${index}`}>
                    <div className='text-container'>
                        <h3 className={`c-stepper__title ${active}`}>{title}</h3>
                        <p className='c-stepper__desc'>{description}</p>
                    </div>
                </li>
            })}
        </ol>
    </div>
}

export default VerticalStepper
