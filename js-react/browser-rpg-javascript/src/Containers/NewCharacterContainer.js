import React ,{Fragment} from 'react'
import AvatarDisplay from '../Components/NewCharacterComponents/AvatarDisplay'
import StartGameButton from '../Components/NewCharacterComponents/StartGameButton'

class NewCharacterContainer extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name:'',
            spriteID: 1,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
    }


    handleSubmit(event){
        const url = 'http://localhost:8080/characters'
        const newCharacter = {name: event.target.name.value, }
        const headers = {'Content-Type':'application/json'}
        fetch(url, {
            method:'POST',
            body: JSON.stringify(newCharacter),
            headers:headers
        })
        event.preventDefault();
        
    }
    handleClick(event){
        this.setState({spriteID:event.target.id})
    }

    handleNameChange(event) {
        this.setState({name: event.target.value})
      }


    render(){
        return(
        <Fragment>
            <AvatarDisplay handleClick={this.handleClick}/>
            <form className="character-form" onSubmit={this.handleSubmit} >
            <label>Sprite ID</label>
            <input id="Pog" type="number" value={this.state.spriteID} readOnly={true}/>
            <input id= "name" type="text" placeholder="Character name" value ={this.state.name} onChange={this.handleNameChange}/>
            <input type="submit" value="Create Characeter"/>
            </form>
            <StartGameButton/>
        </Fragment>
        )
    }

}

export default NewCharacterContainer