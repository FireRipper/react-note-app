import React, {Fragment, useContext, useEffect} from 'react'
import { Notes } from '../components/Notes/Notes'
import { FormCreator } from '../components/FormCreator/FormCreator'
import { AlertCreator } from '../components/AlertCreator/AlertCreator'
import { FirebaseContext } from '../context/firebase/firebaseContext'
import { Loader } from '../components/Loader/Loader'

export const Home = () => {
    const {loading, notes, fetchNotes} = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <AlertCreator/>
            <FormCreator />

            {loading
            ? <Loader />
            : <Notes/> }
        </Fragment>
    )
}
