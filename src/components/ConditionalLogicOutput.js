import React, { useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'react-dropdown/style.css';
import {  deleteGoal, updateGoalsSuccess } from '../reducers/ducks/goals/goals'
import { decreaseSpendingAllowanceGoalRemoval } from '../reducers/ducks/money/updateMoney'
import {  removeConditional1, deleteConditionalIdGoalRemove, deleteUsedConditionalId } from '../reducers/ducks/conditions/conditions'
import { conditionalsSuccess } from '../functions/conditionalsSuccess'


export const ConditionalLogicOutput = (props) => {

    var  goalObject  = useSelector((state) => state.goals.goalsById.allGoalObjects[props.id])
    const [key, updateKeys] = useState(props.id)
    const dispatch  =  useDispatch()
    const [goalName, UpdateGoalName] = useState(goalObject.goalName)
    const [metricName, UpdateMetric] = useState(goalObject.metric)
    const [higherLower, UpdateHigherLower] = useState(goalObject.target)
    const [amountToAchieve, UpdateamountToAchieve] = useState(goalObject.amountToAchieve)
    const [userAchievement, UpdateuserAchievement] = useState(goalObject.amountComplete)
    const [pass, updatePass] = useState("incomplete")
    const [pass2, updatePass2] = useState(goalObject.successString)

    return(
        <div className="goalCreatorYes">
           <div className="goalDiv2">{props.index}.</div>
            <div className="goalDiv2">
                <p>Name of goal: {goalName}, </p>
            </div>
            <div className="goalDiv2">
    <p>{higherLower} than: {amountToAchieve} {metricName}</p>
            </div>
            <div className="goalDiv2">
                <p>Your result</p>
            <input className="inputLength3" type="number" placeholder="Amount you achieved" onChange={(props) => {
            var success = ""
            
           

            const valueReturn = conditionalsSuccess(props.target.value, higherLower, amountToAchieve, success)
            

            updatePass(valueReturn)
              UpdateuserAchievement(props.target.value)
            }} value={userAchievement}></input>
            </div>
            <div className="goalDiv2">
                <p onClick={() => {
                    if(pass === pass2){

                    }
                    else{
                        var successObjectToSend = {}
                        successObjectToSend["success"] = pass
                        successObjectToSend["key"] = key
                        successObjectToSend["amountComplete"] = userAchievement
                        dispatch(updateGoalsSuccess(successObjectToSend))
                        updatePass2(pass)
                    }
                }}>Save result</p>
            </div>
            <div className="goalDiv2">
                <p>Success</p>
                 <div>{pass2}</div>
            </div>
            <div className="goalDiv2">
                <p onClick={() => {
                    dispatch(removeConditional1(props.id))
                    dispatch(deleteGoal(props.id))
                    dispatch(deleteConditionalIdGoalRemove(props.id))
                    dispatch(deleteUsedConditionalId(props.id))
                    dispatch(decreaseSpendingAllowanceGoalRemoval(props.id))
                }}>Remove goal</p>
                
            </div>
        </div>
    )
}
