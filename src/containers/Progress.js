import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ConditionalLogicCreator } from '../components/ConditionalLogicCreator'
import { ConditionalLogicOutput } from '../components/ConditionalLogicOutput'
import { updateGoalsIds } from '../reducers/ducks/goals/goals'


export const Progress = () => {
    const [showOptions, changeShopwOptions] = useState(false)
    var  goalIds  = useSelector((state) => state.goals.goalsAllId)
   
    return(
        <div>
        {!showOptions && <div onClick={() => {
            changeShopwOptions(true)
        }}>Add a goal:</div>}
        {goalIds.map((id, index) => {
             return <ConditionalLogicOutput  key={id} id={id}/>
        })}
        {showOptions && <div onClick={() => {
            changeShopwOptions(false)
        }}>close</div>}
        {showOptions && <ConditionalLogicCreator closeAddGoals={() => changeShopwOptions(false)}/>}
        </div>
    )
}