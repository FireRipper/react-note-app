import './App.css'
import React from 'react'
import { Row } from 'antd'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Nav } from './components/Nav/Nav'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Row type='flex' justify='center'>
                    <Switch>
                        <Route path={'/'} exact component={Home} />
                        <Route path={'/about'} component={About} />
                    </Switch>
            </Row>
        </BrowserRouter>
    )
}

export default App
