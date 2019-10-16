import { Notes } from '../components/Notes/Notes'
import { Loader } from '../components/Loader/Loader'
import React, { Fragment, useContext, useEffect } from 'react'
import { FormCreator } from '../components/FormCreator/FormCreator'
import { AlertCreator } from '../components/AlertCreator/AlertCreator'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Home = () => {

    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <AlertCreator/>
            <FormCreator />

            { loading
            ? <Loader />
            : <Notes notes={notes} onRemove={removeNote} /> }
        </Fragment>
    )
}
