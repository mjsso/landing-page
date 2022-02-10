import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import history from './routerHistory'
import Home from './views/Home'
import TestPage from './views/TestPage'
import Footer from './components/Footer'

const App: React.FC = () => {
    return (<Router history={history}>
            {/*<Header/>*/}
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/testPage' exact component={TestPage}/>
                <Redirect from='*' to='/'/>
            </Switch>
            <Footer/>
        </Router>
    
    )
}

export default React.memo(App)
