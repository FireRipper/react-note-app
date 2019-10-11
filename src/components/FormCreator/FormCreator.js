import React, { useState, useContext } from 'react'
import './FormCreator.css'
import { Col, Input } from 'antd'
import { AlertContext } from '../../context/alert/alertContext'

export const FormCreator = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)

    const submitHandler = e => {
        e.preventDefault()

        if(value.trim()){
            alert.show('Заметка была создана', 'success')
            setValue('')
        } else {
            alert.show('Введите название заметки!')

        }
    }

    return (
        <Col xs={23} sm={23} md={{ span: 14, offset: 10, pull: 5 }} className='FormCreator'>
            <form onSubmit={submitHandler}>
                <Input
                    placeholder='Введите название заметки'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </form>
        </Col>
    )
}
