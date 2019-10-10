import './Nav.css'
import React, { useState } from 'react'
import { Col, Row, Menu, Icon } from 'antd'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
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
                <Col className="Nav-items" xs={12} md={12} lg={16} xl={14}>
                    <Menu style={{ border: 0, background: 'none' }} className='Nav-items' onClick={handleClick}
                          selectedKeys={[current]} mode="horizontal">
                        <Menu.Item key="home">
                            <NavLink to='/' exact>Главная</NavLink>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <NavLink to='/about'>Информация</NavLink>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </React.Fragment>
    )
}

