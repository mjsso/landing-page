import React from 'react'
import SectionContainer from 'components/common/SectionContainer'
import SectionContent from 'components/common/SectionContent'
import LinkButton from 'components/common/LinkButton'
import S2W from 'assets/images/logo_s2w.svg'
import PeckshieldIcon from 'assets/images/logo_peckshield.svg'
import TheoriIcon from 'assets/images/logo_theori.svg'
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
                    <img src={PeckshieldIcon} alt='card1' className='card-logo'/>
                    <div className='card-description'>PeckShield is based in Beijing and San Francisco, and consist security professionals from world-leading security groups. A lot of experience in vulnerability analysis and malware defense, PeckShield provides security total solutions to all blockchain users.</div>
                    <LinkButton text='See report' disabled/>
                </div>
                <div className='card'>
                    <img src={S2W} alt='card2' className='card-logo'/>
                    <div className='card-description'>S2W is Big data intelligence company specialized in hidden channels and cryptocurrencies. On March 20, International Criminal Police Organization (Interpol) has announced a partnership with S2W Lab, to analyze dark web activity, including cryptocurrency transactions.</div>
                    <LinkButton text='See report' disabled/>
                </div>
                {/*<div className='card'>*/}
                {/*    <img src={TheoriIcon} alt='card3' className='card-logo'/>*/}
                {/*    <div className='card-description'>Theori, a cybersecurity startup based in Austin, was founded by a team of hackers from Carnegie Mellon University who have conquered DEFCON CTF five times and many other international competitions. The performance of Theori about consulting and penetration testing is already world-class.</div>*/}
                {/*    <LinkButton text='See report' disabled/>*/}
                {/*</div>*/}
            </div>
        </SectionContent>
    </SectionContainer>
}

export default CommunitySection