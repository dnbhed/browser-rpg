import React ,{Fragment} from 'react'
import AvatarSelector from '../Components/NewCharacterComponents/AvatarSelector'
import AvatarDisplay from '../Components/NewCharacterComponents/AvatarDisplay'
import StartGameButton from '../Components/NewCharacterComponents/StartGameButton'
import NameInput from '../Components/NewCharacterComponents/NameInput'

const NewCharacterContainer = () => {

    return(
        <Fragment>
            <AvatarSelector/>
            <AvatarDisplay/>
            <StartGameButton/>
            <NameInput/>
        </Fragment>
    )

}

export default NewCharacterContainer