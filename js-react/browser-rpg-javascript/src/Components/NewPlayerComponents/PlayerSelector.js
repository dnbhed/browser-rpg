import React from 'react'

const PlayerSelector = (props) => {

    const playerList = props.players.map((player, index) => {
       return <option key={index} value={player.id} >
          {player.name}
        </option>
    })

    return (
       <select id="player-select" defaultValue="default" onChange={props.changePlayer}>
         <option disabled value="default">
         Select Player
         </option>
         {playerList}
       </select> 
    )
}

export default PlayerSelector