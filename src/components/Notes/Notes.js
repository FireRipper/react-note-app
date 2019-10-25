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
                pagination={{
                    pageSize: 5
                }}
                dataSource={notes}
                renderItem={item => (
                    <List.Item
                        className='Notes-li'
                        key={item.id}>
                        <div>
                            <Icon type="flag" theme="twoTone" twoToneColor="#eb2f96" />&nbsp;
                            <strong>{item.title}</strong>&nbsp;
                            <small>{convertDate(item.date)}</small>
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
                                '', () => onRemove(item.id))}
                        </div>
                    </List.Item>
                )}
            />
        }
    </Col>
)
