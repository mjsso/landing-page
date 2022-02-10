import React from 'react'
import ReactDOM from 'react-dom'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './index.scss'
import Teaser from './Teaser'


ReactDOM.render(
    <React.StrictMode>
        <Teaser/>
    </React.StrictMode>,
    document.getElementById('root')
)
