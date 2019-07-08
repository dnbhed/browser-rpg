import React, {Component, Fragment} from 'react'
import NewCharacterButton from '../Components/CreateSelectCharacterComponents/NewCharacterButton';
import HighScoreDisplay from '../Components/HighScoreDisplay';
import SelectExistingCharacterButton from '../Components/CreateSelectCharacterComponents/SelectExistingCharacterButton'
import './PlayerSelectCharacterContainer.css'

const PlayerSelectCharacterContainer = () => {

    return (
        <Fragment>
            <div id="content">
                <NewCharacterButton />
                <SelectExistingCharacterButton />
                <HighScoreDisplay />
            </div>
            
        </Fragment>
    ) 



}

export default PlayerSelectCharacterContainer