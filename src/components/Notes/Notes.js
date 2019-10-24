import './Notes.css'
import React from 'react'
import { List, Col, Icon } from 'antd'
import { convertDate } from '../../functions/convertDate'
import { TooltipCreator } from '../TooltipCreator/TooltipCreator'

export const Notes = ({ notes, onRemove, onShow }) => (
    <Col xs={23} sm={23} md={23} lg={{ span: 14, offset: 10, pull: 5 }}>
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
                            <small>{convertDate(note.date)}</small>
                        </div>
                        <div>
                            {TooltipCreator(
                                'Редактировать',
                                'primary',
                                'edit', 'left',
                                'filled', 'Notes-btn', onShow
                            )}
                            {TooltipCreator(
                                'Удалить заметку',
                                'danger', 'delete',
                                'rightTop', 'filled',
                                '', () => onRemove(note.id))}
                        </div>
                    </List.Item>
                ))}
            </List>
        }
    </Col>
)
