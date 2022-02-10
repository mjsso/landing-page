import React from 'react'
import './Header.scss'
import Logo from '../assets/images/octopus.png'
import history from '../routerHistory'


const Header: React.FC = () => {
    return (<div className="header">
        <div className="header-content">
            <div className="heading-logo-container clickable" onClick={() => {
                history.push('/')
                window.location.reload()
            }}>
                <img src={Logo} alt="logo" className="heading-logo"/>
                <span className="heading-title">SAMPLE</span>
            </div>
        </div>
    </div>)
}

export default Header
