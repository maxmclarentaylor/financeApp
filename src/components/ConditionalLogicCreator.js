import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { v4 as uuidv4 } from 'uuid';
import { addGoal } from '../reducers/ducks/goals/goals'

export const ConditionalLogicCreator = (props) => {


const arrayOfOptions = ["Higher", "Lower"]
const [goalName, UpdateGoalName] = useState("")
const [metricName, UpdateMetric] = useState("")
const [higherLower, UpdateHigherLower] = useState("")
const [amountToAchieve, UpdateamountToAchieve] = useState("")
const [errors, updateErrors] = useState(false)

const dispatch = useDispatch()

    return(
        <div className="goalCreator">
            <div>Create your goal</div>
            <div>
                <p>Name of goal</p>
            <input className="inputLength" type="text" placeholder="Name of Goal, e.g. Running" onChange={(props) => {
              UpdateGoalName(props.target.value)
            }} value={goalName}></input>
            </div>
            <div className="goalDiv">
                <p>Higher or lower</p>
            <Dropdown options={arrayOfOptions} onChange={(value) => {
                UpdateHigherLower(value.value)
            }} value={""}  />
            </div>
            <div className="goalDiv">
                <p>Amount to achieve</p>
            <input className="inputLength2" type="number" placeholder="Amount to achieve" onChange={(props) => {
                const number = parseInt(props.target.value)
                UpdateamountToAchieve(number)
            }} value={amountToAchieve}></input>
            </div>
            <div className="goalDiv">
                <p>Metric</p>
            <input className="inputLength3" type="text" placeholder="Metric type e.g. miles" onChange={(props) => {
              UpdateMetric(props.target.value)
            }} value={metricName}></input>
            </div>
            <div className="goalDiv">
            <p onClick={() => {
                var objectToSend ={   
                }
                objectToSend.key = uuidv4()
                objectToSend.goalName = goalName
                objectToSend.target = higherLower
                objectToSend.metric = metricName
                objectToSend.amountToAchieve = amountToAchieve
                objectToSend.goalNumber = props.number
                if(goalName !== "" && higherLower !== "" && metricName !== "" && amountToAchieve !== "") {
                    dispatch(addGoal(objectToSend))
                    updateErrors(false)
                    UpdateGoalName("")
                    UpdateMetric("")
                    UpdateHigherLower("")
                    UpdateamountToAchieve("")
                    props.closeAddGoals()

                }
                else{
                    updateErrors(true)
                }

            }}>Save goal</p>
            {errors && <div>You must fill out all options before you send</div>}
            </div>
        </div>
    )
}