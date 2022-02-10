import React from 'react'
import AccordionItem, { AccordionItemProps } from './AccordionItem'
import './Accordion.scss'


type AccordionProps = {
    items: AccordionItemProps[]
    
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    return <div className="accordion">
        {items.map((item, index) => <AccordionItem title={item.title} content={item.content} key={index}/>)}
    </div>
}

export default Accordion