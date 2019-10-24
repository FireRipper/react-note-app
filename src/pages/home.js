import { Notes } from '../components/Notes/Notes'
import { Loader } from '../components/Loader/Loader'
import { ModalContext } from '../context/modal/modalContext'
import { ModalForm } from '../components/ModalForm/ModalForm'
import React, { Fragment, useContext, useEffect } from 'react'
import { FormCreator } from '../components/FormCreator/FormCreator'
import { AlertCreator } from '../components/AlertCreator/AlertCreator'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Home = () => {

    const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext)
    const { showModal } = useContext(ModalContext)

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <AlertCreator />
            <FormCreator />
            <ModalForm />

            {loading
                ? <Loader />
                : <Notes notes={notes} onRemove={removeNote} onShow={showModal} />}
        </Fragment>
    )
}
