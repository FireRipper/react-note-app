import './Notes.css'
import React from 'react'
import { List, Col, Icon } from 'antd'
import { convertDate } from '../../functions/convertDate'
import { TooltipDanger } from '../TooltipButtons/TooltipDanger'
import { TooltipPrimary } from '../TooltipButtons/TooltipPrimary'

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
                pagination={{
                    pageSize: 5,
                    size: 'small'
                }}
                className='Notes-list'
                dataSource={notes}
                renderItem={item => (
                    <List.Item
                        className='Notes-li'
                        key={item.id}>
                        <div>
                            <Icon type="pushpin"  theme="twoTone" twoToneColor="#eb2f96" />&nbsp;
                            <strong>{item.title}</strong>&nbsp;
                            <small>{convertDate(item.date)}</small>
                        </div>
                        <div>
                            {TooltipPrimary('заметку','Notes-btn',() => onShow(item.id, item.title))}
                            {TooltipDanger('заметку','',() => onRemove(item.id))}
                        </div>
                    </List.Item>
                )}
            />
        }
    </Col>
)
