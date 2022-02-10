import React from 'react'
import SectionContainer from 'components/common/SectionContainer'
import SectionContent from 'components/common/SectionContent'
import LinkButton from 'components/common/LinkButton'
import SampleIcon1 from 'assets/images/beach-ball.png'
import SampleIcon2 from 'assets/images/sea-waves.png'
import './CommunitySection.scss'


type SnsLogoProps = { label: string, index: number, url?: string }

const SnsLogo: React.FC<SnsLogoProps> = ({ label, index, url = '' }) => {
    const logoId = `teaser-community-sns-icons-${label}`
    return <div className={`sns-logo-container clickable grid${index + 1}`}>
        <div className={`logo ${label.toLowerCase()}`} id={logoId} onClick={() => {
            window.open(url)
        }}/>
        <div className={`hidden-logo ${label.toLowerCase()}`} />
        {label}
    </div>
}

const logos: { label: string, url: string }[] = [
    {
        label: 'Twitter',
        url: 'https://www.google.com'
    },
    {
        label: 'Discord',
        url: 'https://www.google.com'
    },
    {
        label: 'Telegram',
        url: 'https://www.google.com'
    },
    {
        label: 'Medium',
        url: 'https://www.google.com'
    },
    {
        label: 'Github',
        url: 'https://www.google.com'
    }
]

const CommunitySection: React.FC = () => {
    return <SectionContainer className='teaser-community-section' id='teaser-community-section'>
        <SectionContent title='Join Our Community' titleColor='blackNavy' subTitle='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet' subTitleColor='blackNavy'>
            <div className='sns-logos-container'>
                {
                    logos.map((logo, index) => <SnsLogo key={logo.label} label={logo.label} index={index} url={logo.url}/>)
                }
            </div>
            <div className='cards-container'>
                <div className='card'>
                    <img src={SampleIcon1} alt='card1' className='card-logo'/>
                    <div className='card-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                    <LinkButton text='See report' disabled/>
                </div>
                <div className='card'>
                    <img src={SampleIcon2} alt='card2' className='card-logo'/>
                    <div className='card-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <LinkButton text='See report' disabled/>
                </div>
            </div>
        </SectionContent>
    </SectionContainer>
}

export default CommunitySection