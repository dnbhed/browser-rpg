import React, {Component, Fragment} from 'react'
import NewCharacterButton from '../Components/StartScreenComponents/NewCharacterButton';
import HighScoreDisplay from '../Components/HighScoreDisplay';

const StartScreenContainer = () => {

    return (
        <Fragment>
            <h1>The Game</h1>
            <NewCharacterButton />
            <HighScoreDisplay />
        </Fragment>
    ) 



}

export default StartScreenContainer