import React, {Fragment} from 'react'
import EndGameCharacterScoreDisplay from '../Components/EndGameComponents/EndGameCharacterScoreDisplay';
import EndGameContinueGame from '../Components/EndGameComponents/EndGameContinueGame';
import EndGameSaveButton from '../Components/EndGameComponents/EndGameSaveButton';

const EndGameContainer = () => {


    return (
        <Fragment>
           <EndGameCharacterScoreDisplay />
           <EndGameSaveButton />
           <EndGameContinueGame />
        </Fragment>
    )
}

export default EndGameContainer