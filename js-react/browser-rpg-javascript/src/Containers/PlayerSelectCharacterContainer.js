import React, {Component, Fragment} from 'react'
import NewCharacterButton from '../Components/CreateSelectCharacterComponents/NewCharacterButton';
import HighScoreDisplay from '../Components/HighScoreDisplay';
import SelectExistingCharacterButton from '../Components/CreateSelectCharacterComponents/SelectExistingCharacterButton'

const PlayerSelectCharacterContainer = () => {

    return (
        <Fragment>
            <NewCharacterButton />
            <SelectExistingCharacterButton />
            <HighScoreDisplay />
        </Fragment>
    ) 



}

export default PlayerSelectCharacterContainer