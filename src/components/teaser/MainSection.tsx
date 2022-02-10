import React from 'react'
import SectionContainer from 'components/common/SectionContainer'
import Header from 'components/Header'
import Button from 'components/common/Button'
import './MainSection.scss'


const MainSection: React.FC = () => {
    return <SectionContainer className='teaser-main-section' id='teaser-main-section'>
        <Header/>
        <div className='main-content'>
            <div className='main-title'>
                Finance,<br/>
                One-Stop<br/>
                <span className='keyword'>Derivatives</span> Maker
            </div>
            <div className='sub-title'>Simplified and Secure Investment for Cryptocurrency</div>
            <Button type='primary' text='Lite Paper' className='button' href='https://www.google.com'/>
        </div>
    </SectionContainer>
}

export default MainSection