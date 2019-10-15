import './Notes.css'
import React, { useState } from 'react'
import { List, Col, Button } from 'antd'

export const Notes = ({notes}) => {

    return (
        <Col xs={23} sm={23} md={{ span: 14, offset: 10, pull: 5 }}>

            <List
                size="middle"
                header={<div>Мои заметки</div>}
                bordered
                dataSource={notes}
                renderItem={
                    item =>
                        <List.Item className='Notes-li'>
                            <div>
                                <strong>{item}</strong>&nbsp;
                                <small> {new Date().toLocaleDateString()}</small>
                            </div>
                            <Button type='danger' size='small'>&times;</Button>
                        </List.Item>
                }
            />
        </Col>
    )
}
