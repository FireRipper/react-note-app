import './FormCreator.css'
import { Col, Input } from 'antd'
import React, { useState, useContext } from 'react'
import { AlertContext } from '../../context/alert/alertContext'
import { FirebaseContext } from '../../context/firebase/firebaseContext'

export const FormCreator = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = e => {
        e.preventDefault()

        if(value.trim()){
            firebase.addNote(value.trim()).then(() => {
                alert.show('Заметка была создана', 'success')
            }).catch(() => {
                alert.show('Что-то пошло не так!', 'error')
            })
            setValue('')
        } else {
            alert.show('Введите название заметки!')
        }
    }

    return (
        <Col xs={23} sm={23} md={23} lg={{ span: 14, offset: 10, pull: 5 }} className='FormCreator'>
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
