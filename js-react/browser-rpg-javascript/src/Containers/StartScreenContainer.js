import React, {Fragment} from 'react'
import SelectPlayerButton from '../Components/StartScreenComponents/SelectPlayerButton'
import './StartScreenContainer.css'

const StartScreenContainer = () => {

    return (
        <Fragment>
            <h1>The game</h1>
            <SelectPlayerButton/>
        </Fragment>
    )
}

export default StartScreenContainer