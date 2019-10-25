import axios from 'axios'
import { message } from 'antd'
import React, { useReducer } from 'react'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'
import { ADD_NOTE, FETCH_NOTES, HIDE_LOADER, REMOVE_NOTE, SHOW_LOADER } from '../types'

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({ children }) => {
    const initialState = {
        notes: [],
        loading: false
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const showLoader = () => dispatch({ type: SHOW_LOADER })
    const hideLoader = () => dispatch({ type: HIDE_LOADER })
    const deleteMessage = () => {
        message.success('Заметка успешно удалена!', 2)
    }

    const fetchNotes = async () => {
        showLoader()
        const res = await axios.get(`${url}/notes.json`)

        if (!res.data) {
            hideLoader()
        } else {
            const payload = Object.keys(res.data).map(key => {
                return {
                    ...res.data[key],
                    id: key
                }
            })

            dispatch({
                type: FETCH_NOTES,
                payload
            })
        }
    }

    const addNote = async title => {

        const note = {
            title, date: new Date().toJSON()
        }
        try {
            const res = await axios.post(`${url}/notes.json`, note)
            const payload = {
                ...note,
                id: res.data.name
            }

            dispatch({
                type: ADD_NOTE,
                payload
            })
        } catch (e) {
            throw new Error(e.message)
        }

    }

    const editNote = async id => {
        await axios.put(`${url}/notes/${id}.json`)
    }

    const removeNote = async id => {
        await axios.delete(`${url}/notes/${id}.json`)

        dispatch({
            type: REMOVE_NOTE,
            payload: id
        })
        deleteMessage()
    }

    return (
        <FirebaseContext.Provider value={{
            showLoader, fetchNotes, addNote,
            removeNote, editNote,
            loading: state.loading,
            notes: state.notes
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}
