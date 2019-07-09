import React from 'react'
import { Link } from 'react-router-dom'

const SelectPlayerButton = () => {

   //OnClick brings you to Player Screen to Create New Player or Select existing Player

    return (
      <div className="start-game-button">
      <button className="select-player-button" ><Link to="/select-player">Start Game</Link></button>
      </div>
    )
}

export default SelectPlayerButton;