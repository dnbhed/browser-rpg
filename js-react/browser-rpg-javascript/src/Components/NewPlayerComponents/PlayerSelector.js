import React from 'react'

const PlayerSelector = (props) => {

  console.log(props)
    
    const playerList = props.players.map((player, index) => {
      console.log(player);
      
       return <option key={index} id={player.id}>
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