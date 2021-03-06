import {HIDE_MODAL, SHOW_MODAL} from '../types'

const handlers = {
    [SHOW_MODAL] : (state, {payload}) => ({
        ...state, payload,
        visible: true}),
    [HIDE_MODAL] : (state) => ({...state, visible: false}),
    DEFAULT: state => state
}

export const modalReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}
