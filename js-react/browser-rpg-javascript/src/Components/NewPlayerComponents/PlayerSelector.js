import React from 'react'

const PlayerSelector = ({players}) => {

  console.log(players)
    
    const playerList = players.map((player, index) => {
       return <option key={index} value={player.id}>
          {player.name}
        </option>
    })

    return (
       <select id="player-select" defaultValue="default">
         <option disabled value="default">
         Select Player
         </option>
         {playerList}
       </select> 
    )
}

export default PlayerSelector