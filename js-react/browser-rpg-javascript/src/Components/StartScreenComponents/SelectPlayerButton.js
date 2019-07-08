import React from 'react'
import { Link } from 'react-router-dom'

const SelectPlayerButton = () => {

   //OnClick brings you to Player Screen to Create New Player or Select existing Player

    return (
      <h1 id="select-player-button" ><Link to="/select-player">Select Player</Link></h1>
    )
}

export default SelectPlayerButton;