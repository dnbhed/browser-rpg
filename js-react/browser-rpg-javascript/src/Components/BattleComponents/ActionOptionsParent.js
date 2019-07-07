import React, { Fragment } from 'react'
import AttackButton from './ActionOptions/AttackButton'
import DefendButton from './ActionOptions/DefendButton'

const ActionOptionsParent = () => {
    return(
        <Fragment>
            <AttackButton />
            <DefendButton />
        </Fragment>
    )
}

export default ActionOptionsParent