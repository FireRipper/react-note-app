import './Nav.css'
import React, { useState } from 'react'
import { Col, Row, Menu, Icon } from 'antd'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
    const currentPage = window.location.pathname

    // eslint-disable-next-line
    const [current, setCurrent] = useState('home')

    const handleClick = e => {
        setCurrent(e.key)
    }

    return (
        <React.Fragment>
            <Row className='Nav' type='flex' align='middle'>
                <Col className="Nav-logo" xs={12} md={12} lg={6} xl={6}>
                    <Icon type="highlight" theme="filled" />
                    Note app
                </Col>
                <Col className="Nav-items" xs={{ span: 4, offset: 8 }} md={{ span: 12, offset: 0 }} lg={16}
                     xl={{ span: 14, offset: 2 }}>
                    <Menu style={{ border: 0, background: 'none' }} className='Nav-items'
                          onClick={handleClick}
                          mode="horizontal">
                        <Menu.Item key="home" className={ currentPage === '/' ? 'ant-menu-item-selected' : ''}>
                            <NavLink to='/' exact><Icon type="home" className='Nav-icon'/>Главная</NavLink>
                        </Menu.Item>
                        <Menu.Item key="about" className={ currentPage === '/about' ? 'ant-menu-item-selected' : ''}>
                            <NavLink to='/about'><Icon type="exclamation-circle" className='Nav-icon' />Информация</NavLink>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </React.Fragment>
    )
}

