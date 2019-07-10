import React, {Fragment} from 'react'
import SelectPlayerButton from '../Components/StartScreenComponents/SelectPlayerButton'
import './StartScreenContainer.css'
import startScreenBGM from '../sounds/StartScreen.mp3'

const StartScreenContainer = () => {

    return (
        <div className="game-head">
            <audio src={startScreenBGM} autoPlay loop={true} />
            <h1>The game</h1>
            <SelectPlayerButton/>
        </div>
    ) 
}

export default StartScreenContainer