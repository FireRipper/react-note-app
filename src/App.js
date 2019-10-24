import './App.css'
import React from 'react'
import { Row } from 'antd'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Nav } from './components/Nav/Nav'
import { Footer } from './components/Footer/Footer'
import { AlertState } from './context/alert/AlertState'
import { ModalState } from './context/modal/ModalState'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { FirebaseState } from './context/firebase/FirebaseState'

function App() {
    return (
        <ModalState>
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
        </ModalState>
    )
}

export default App
