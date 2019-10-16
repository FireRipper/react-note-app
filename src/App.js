import './App.css'
import React from 'react'
import { Row } from 'antd'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Nav } from './components/Nav/Nav'
import { AlertState } from './context/alert/AlertState'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { FirebaseState } from './context/firebase/FirebaseState'
import { Footer } from './components/Footer/Footer'

function App() {
    return (
        <FirebaseState>
            <AlertState>
                <BrowserRouter>
                    <Nav />
                    <div className='App'>
                        <Row type='flex' justify='center'>
                            <Switch>
                                <Route path={'/'} exact component={Home} />
                                <Route path={'/about'} component={About} />
                            </Switch>
                        </Row>
                    </div>
                    <Footer />
                </BrowserRouter>
            </AlertState>
        </FirebaseState>
    )
}

export default App
