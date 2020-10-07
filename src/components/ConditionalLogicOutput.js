import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';



export const ConditionalLogicOutput = (props) => {

    console.log(props.id)
    var  goalObject  = useSelector((state) => state.goals.goalsById[props.id])

    const arrayOfOptions = ["Higher", "Lower"]
    const [goalName, UpdateGoalName] = useState(goalObject.goalName)
    const [metricName, UpdateMetric] = useState(goalObject.metric)
    const [higherLower, UpdateHigherLower] = useState(goalObject.target)
    const [amountToAchieve, UpdateamountToAchieve] = useState(goalObject.amountToAchieve)
    const [userAchievement, UpdateuserAchievement] = useState("")
    const [pass, updatePass] = useState("")


    return(
        <div className="goalCreator">
            <div>Your current goals</div>
            <div>
                <p>Name of goal</p>
            <input className="inputLength" type="text" placeholder="Name of Goal, e.g. miles run" onChange={(props) => {
            }} value={goalName}></input>
            </div>
            <div className="goalDiv">
                 <p>{higherLower} than:</p>
            </div>
            <div className="goalDiv">
                <p>Amount to achieve</p>
            <input className="inputLength2" type="number" placeholder="Amount to achieve" onChange={(props) => {
                const number = parseInt(props.target.value)

              
            }} value={amountToAchieve}></input>
            </div>
            <div className="goalDiv">
                <p>Metric</p>
            <input className="inputLength3" type="text" placeholder="Metric type" onChange={(props) => {
            }} value={metricName}></input>
            </div>
            <div className="goalDiv">
                <p>Your result</p>
            <input className="inputLength3" type="number" placeholder="Amount to achieve" onChange={(props) => {
                var success = ""

                if(props.target.value === ""){

                }
                else{
                    const inputNumber = parseInt(props.target.value)

                if(higherLower === "Higher"){
                    console.log(typeof amountToAchieve)
                    if(inputNumber > amountToAchieve){
                        success = 'passed'
                    }
                    else{
                        success = "failed"
                    }
                }
                else{
                    if(inputNumber < amountToAchieve){
                        success = "passed"
                    }
                    else{
                        success = "failed"
                    }
                }
            }

            updatePass(success)
              UpdateuserAchievement(props.target.value)
            }} value={userAchievement}></input>
            </div>
            <div className="goalDiv">
                <p>Success</p>
                 <div>{pass}</div>
            </div>
        </div>
    )
}
