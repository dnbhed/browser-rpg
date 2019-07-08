import React ,{Fragment} from 'react'
import AvatarDisplay from '../Components/NewCharacterComponents/AvatarDisplay'
import StartGameButton from '../Components/NewCharacterComponents/StartGameButton'

const NewCharacterContainer = (props) => {

        return(
        <Fragment>
            <AvatarDisplay handleClick={props.handleClick}/>
            <form className="character-form" onSubmit={props.handleSubmit} >
            <label>Sprite ID</label>
            {/* <input id="Pog" type="number" value={this.state.spriteID} readOnly={true}/>
            <input id= "name" type="text" placeholder="Character name" value ={this.state.name} onChange={props.handleNameChange}/> */}
            <input type="submit" value="Create Characeter"/>
            </form>
            <StartGameButton/>
        </Fragment>
        )


}

export default NewCharacterContainer