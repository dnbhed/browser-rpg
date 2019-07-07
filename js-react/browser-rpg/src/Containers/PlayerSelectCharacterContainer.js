import React, {Component, Fragment} from 'react'
import NewCharacterButton from '../Components/StartScreenComponents/NewCharacterButton';
import HighScoreDisplay from '../Components/HighScoreDisplay';

const PlayerSelectCharacterContainer = () => {

    return (
        <Fragment>
            <NewCharacterButton />
            <HighScoreDisplay />
        </Fragment>
    ) 



}

export default PlayerSelectCharacterContainer