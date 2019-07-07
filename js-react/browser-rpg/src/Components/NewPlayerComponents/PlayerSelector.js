import React from 'react'

const PlayerSelector = () => {

    return (
       <select id="player-select" defaultValue="default">
         <option disabled value="default">
         Select Player
         </option>
       </select> 
    )
}

export default PlayerSelector