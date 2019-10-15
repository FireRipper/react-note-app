import './Notes.css'
import React from 'react'
import { List, Col, Button, Icon } from 'antd'

export const Notes = ({ notes, onRemove }) => (
    <Col xs={23} sm={23} md={{ span: 14, offset: 10, pull: 5 }}>
        {notes.length === 0
            ? <List
                size="middle"
                header={<div>Мои заметки</div>}
                bordered
                locale />
            : <List
                size="middle"
                header={<div>Мои заметки</div>}
                bordered
            >
                {notes.map(note => (
                    <List.Item
                        className='Notes-li'
                        key={note.id}>
                        <div>
                            <Icon type="flag" theme="twoTone" twoToneColor="#eb2f96" />&nbsp;
                            <strong>{note.title}</strong>&nbsp;
                            <small>{note.date}</small>
                        </div>
                        <Button
                            type='danger'
                            size='small'
                            onClick={() => onRemove(note.id)}
                        ><Icon type="delete" theme="filled" /></Button>
                    </List.Item>
                ))}
            </List>
        }

    </Col>
)
