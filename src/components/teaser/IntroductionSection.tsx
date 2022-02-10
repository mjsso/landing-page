import React, { forwardRef } from 'react'
import useScrollFadeIn, { Direction } from 'hooks/useScrollFadeIn'
import SectionContainer from 'components/common/SectionContainer'
import SectionContent from 'components/common/SectionContent'
import VerticalCard from '../common/VerticalCard'
import DerivativesIcon from 'assets/images/icon_derivatives.svg'
import RocketIcon from 'assets/images/icon_rocket.svg'
import CommunityIcon from 'assets/images/icon_community.svg'
import DefiIcon from 'assets/images/icon_defi.svg'
import './IntroductionSection.scss'


const IntroductionSection = forwardRef<HTMLDivElement>((props, ref) => {
    
    const card1 = useScrollFadeIn({ direction: Direction.UP, delay: 0.25, duration: 2 })
    const card2 = useScrollFadeIn({ direction: Direction.UP, delay: 0.5, duration: 2 })
    const card3 = useScrollFadeIn({ direction: Direction.UP, delay: 0.75, duration: 2 })
    const card4 = useScrollFadeIn({ direction: Direction.UP, delay: 1, duration: 2 })
    
    // @ts-ignore
    return <SectionContainer className='teaser-introduction-section' id='teaser-introduction-section' ref={ref}>
        <SectionContent title='Why Sample' subTitle='Sample builds the most powerful DeFi protocol for Derivatives'>
            <div className='cards-container'>
                <div {...card1}><VerticalCard title='Derivatives' description='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet' imgSrc={DerivativesIcon}/></div>
                <div {...card2}><VerticalCard title='Deflationary Mechanism' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' imgSrc={RocketIcon}/></div>
                <div {...card3}><VerticalCard title='DeFi 2.0' description='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet' imgSrc={DefiIcon}/></div>
                <div {...card4}><VerticalCard title='DAO' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' imgSrc={CommunityIcon}/></div>
            </div>
        </SectionContent>
    </SectionContainer>
})

export default IntroductionSection