import React from 'react'

const PlayerSelector = ({players, changePlayer}) => {

   
    const playerList = players.map((player, index) => {
       return <option key={index} value={player.id} >
          {player.name}
        </option>
    })

    return (
       <div className="select-container">
       <select className="player-select" defaultValue="default" onChange={changePlayer}>
         <option disabled value="default">
         Select Player
         </option>
         {playerList}
       </select> 
       </div>
    )
}

export default PlayerSelector