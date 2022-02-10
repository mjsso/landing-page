import React, { useState } from 'react'
import SectionContainer from 'components/common/SectionContainer'
import SectionContent from 'components/common/SectionContent'
import HorizontalCard from 'components/common/HorizontalCard'
import Button from 'components/common/Button'
import SampleLogo from 'assets/images/octopus.png'
import SampleLogo2 from 'assets/images/octopus_leg.png'
import './EcoSystemSection.scss'


const BluredDefaultIcon = () => {
    return <div className='horizontal-card blurred'>
        <div className='logo-blurred'>
            <img src={SampleLogo} alt='blured-default-logo' style={{width: 30}}/>
            Sample
        </div>
    </div>
}
const EcoSystemSection: React.FC = () => {
    const [expanded, setExpanded] = useState(false)
    
    const toggleExpanded = () => {
        setExpanded(!expanded)
    }
    return <SectionContainer className='teaser-ecosystem-section' id='teaser-ecosystem-section'>
        <SectionContent title='Growing Ecosystem' titleColor='blackNavy' subTitle='Explore Sample, including DeFi platforms, Wallets, Exchanges and more' subTitleColor='blackNavy'>
            <div className='cards-grid' aria-expanded={expanded}>
                <HorizontalCard imgSrc={SampleLogo2}/>
                <HorizontalCard imgSrc={SampleLogo2}/>
                <BluredDefaultIcon/>
                <BluredDefaultIcon/>
            </div>
            <div>
                {/* NOTE : ecosystem 추가 되면 위에 주석으로 대체하기*/}
                {/*<Button className='view-more-button' text='View entire ecosystem' type={window.innerWidth >= 1024 ? 'primary-disabled' : 'primary'} onClick={toggleExpanded}/>*/}
                <Button className='view-more-button' text='View entire ecosystem' type='primary-disabled'/>
            </div>
        </SectionContent>
    </SectionContainer>
}

export default EcoSystemSection