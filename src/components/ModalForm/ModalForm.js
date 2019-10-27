import { Modal } from 'antd'
import React, { useContext } from 'react'
import { FormEdit } from '../FormEdit/FormEdit'
import { ModalContext } from '../../context/modal/modalContext'

export const ModalForm = () => {
    const{ modal, hideModal } = useContext(ModalContext)

    if (!modal.visible) {
        return null
    }

    return (
        <Modal
            title='Редактировать заметку'
            cancelText='Отменить'
            visible={true}
            okText='Редактировать'
            onCancel={hideModal}
            onOk={hideModal}
        >
            <FormEdit />
        </Modal>
    )
}
