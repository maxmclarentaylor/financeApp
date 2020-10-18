import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ConditionalLogicCreator } from '../components/ConditionalLogicCreator'
import { ConditionalLogicOutput } from '../components/ConditionalLogicOutput'
import { updateGoalsIds } from '../reducers/ducks/goals/goals'
import { MoneyContainer } from './money'
import { Conditionals } from './conditionals'

export const Progress = () => {
    const [showOptions, changeShopwOptions] = useState(false)
    var  goalIds  = useSelector((state) => state.goals.goalsAllId)
   
    return(
        <div>
            <div className="moneyContainer">
                <MoneyContainer />
            </div>
        {!showOptions && <div onClick={() => {
            changeShopwOptions(true)
        }}>Add a goal:</div>}
        <div>Your current goals:</div>
        {goalIds.map((id, index) => {
             return <ConditionalLogicOutput  key={id} id={id} index={index + 1}/>
        })}
        {showOptions && <div onClick={() => {
            changeShopwOptions(false)
        }}>close</div>}
        {showOptions && <ConditionalLogicCreator number={goalIds.length + 1} closeAddGoals={() => changeShopwOptions(false)}/>}
        <div className="moneyContainer">
            <Conditionals ids={goalIds}/>
        </div>
        </div>
    )
}