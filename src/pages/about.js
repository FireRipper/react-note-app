import './about.css'
import React, { Fragment } from 'react'
import { Col, Typography, Card, Row, Icon } from 'antd'

const { Title } = Typography

export const About = () => (
    <Fragment>
        <Col xs={23} md={20}>
            <div className='about'>
                <Row type='flex' justify='space-around'>
                    <Col xs={23} md={12}>
                        <Title level={2}>
                            <Icon type="highlight" theme="filled" />
                            Note app
                        </Title>
                    </Col>
                    <Col xs={23} md={12}>
                        <p>
                            Создавай заметки для себя и своей семьи.
                        </p>
                    </Col>
                    <Col xs={24}><Title level={3}>Возможности</Title> </Col>
                    <Col sm={7} md={8} lg={7} xl={7}>
                        <Card hoverable className='about-card'>
                            <div className='about-icon about-icon-color-blue'>
                                <Icon type="book" theme="filled" />

                            </div>
                            <Title level={3} className='about-title'>
                                Создавай
                            </Title>
                            <div className='about-description'>
                                Создавай для себя заметки при каждом удобном случае.
                            </div>
                        </Card>
                    </Col>
                    <Col sm={7} md={8} lg={7} xl={7}>
                        <Card hoverable className='about-card'>
                            <div className='about-icon'>
                                <Icon type="edit" theme="filled" />
                            </div>
                            <Title level={3} className='about-title'>
                                Редактируй
                            </Title>
                            <div className='about-description'>
                                Редактируй заметки, если что-то пошло не так.
                            </div>
                        </Card>
                    </Col>
                    <Col sm={7} md={8} lg={7} xl={7}>
                        <Card hoverable className='about-card'>
                            <div className='about-icon about-icon-color-red'>
                                <Icon type="delete" theme="filled" />
                            </div>
                            <Title level={3} className='about-title'>
                                Удаляй
                            </Title>
                            <div className='about-description'>
                                Удаляй заметки, если она тебе больше не понадобиться.
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Col>
    </Fragment>
)
