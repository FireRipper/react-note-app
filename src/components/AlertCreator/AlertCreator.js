import { Alert, Col } from 'antd'
import React, {useContext} from 'react'
import { AlertContext } from '../../context/alert/alertContext'

export const AlertCreator = () => {
    const {alert, hide} = useContext(AlertContext)

    if(!alert.visible) {
        return null
    }

    return (
        <Col xs={23} sm={23} md={{ span: 8, offset: 16, pull: 8 }}>
            <Alert
                message={alert.text}
                type={alert.type}
                showIcon
                closable
                afterClose={hide}/>
        </Col>
    )
}
