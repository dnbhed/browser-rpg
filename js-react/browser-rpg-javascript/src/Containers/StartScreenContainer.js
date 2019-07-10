import React, {Fragment} from 'react'
import SelectPlayerButton from '../Components/StartScreenComponents/SelectPlayerButton'
import './StartScreenContainer.css'

const StartScreenContainer = () => {

    return (
        <div className="game-head">
            <h1>The game</h1>
            <SelectPlayerButton/>
        </div>
    ) 
}

export default StartScreenContainer