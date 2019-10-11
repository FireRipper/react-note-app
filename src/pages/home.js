import React, {Fragment} from 'react'
import { Notes } from '../components/Notes/Notes'
import { FormCreator } from '../components/FormCreator/FormCreator'
import { AlertCreator } from '../components/AlertCreator/AlertCreator'

export const Home = () => {
    return (
        <Fragment>
            <AlertCreator/>
            <FormCreator />
            <Notes/>
        </Fragment>
    )
}
