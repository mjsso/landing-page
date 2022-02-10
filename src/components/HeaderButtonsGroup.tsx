import React from 'react'
import Button from './common/Button'
import './HeaderButtonsGroup.scss'

const HeaderButtonsGroup: React.FC = () => {
    return <div className="heading-button-group">
        <Button type="transparent" to="/" text="First"/>
        <Button type="primary" to="/testPage" text="Second"/>
        <Button type="secondary" href="https://www.google.com" text="Third"/>
    </div>
}

export default React.memo(HeaderButtonsGroup)