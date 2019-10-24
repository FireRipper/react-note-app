import React, { useReducer } from 'react'
import { modalReducer } from './modalReducer'
import { ModalContext } from './modalContext'
import { SHOW_MODAL, HIDE_MODAL } from '../types'

export const ModalState = ({ children }) => {
    const [state, dispatch] = useReducer(modalReducer, { visible: false })

    const showModal = () => {
        dispatch({ type: SHOW_MODAL })
    }

    const hideModal = () => {
        dispatch({ type: HIDE_MODAL })
    }

    return (
        <ModalContext.Provider value={
            {
                showModal, hideModal,
                modal: state
            }
        }>
            {children}
        </ModalContext.Provider>
    )
}
