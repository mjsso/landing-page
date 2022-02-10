import React from 'react'
import Logo from 'assets/images/octopus.png'
import './Footer.scss'


const Footer: React.FC = () => {
    return <div className='footer'>
        <img src={Logo} alt='footer-logo' className='footer-logo'/>
    </div>
}

export default Footer