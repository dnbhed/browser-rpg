import React from 'react'
import { Link } from 'react-router-dom'

const SelectPlayerButton = () => {

   //OnClick brings you to Player Screen to Create New Player or Select existing Player

    return (
      <div className="start-game-button">
      <Link className="button-link" to="/select-player"><button id="select-player-button" >Start Game</button></Link>
      </div>
    )
}

export default SelectPlayerButton;


