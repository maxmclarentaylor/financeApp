import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteConditionalId, removeConditional2 } from '../reducers/ducks/conditions/conditions'
import { increaseSpendingAllowance } from '../reducers/ducks/money/updateMoney'
import { v4 as uuidv4 } from 'uuid';
import { rewardsTester } from '../functions/rewardsTester'


export const RewardsOutput = () => {

    var goalsObject  = useSelector((state) => state.goals)
    var conditionalsObject = useSelector((state) => state.conditions.conditionsById)
    var conditionalsObjectId = useSelector((state) => state.conditions.conditionsAllIds)
    const [goalsResults, updateGoalResults] = useState([])
    const [numberToSend, updateNumberToSend] = useState([])
    const dispatch = useDispatch()
   useEffect(() => {

    updateGoalResults([])
    var arrayOfGoalOutputs = []
    var idsToBeRemoved = []

    conditionalsObjectId.map((value, index) => {
            if(!conditionalsObject[value]){
                idsToBeRemoved.push(value)
            }
    })
        for(const property in conditionalsObject){
            var conditionalArray = []
           
           const goalArray = conditionalsObject[property]
            var success = true
            var incomplete = false
           goalArray.forEach((value, index) => {
               if(index === goalArray.length - 1){
                conditionalArray.push(value)
               }
               else{
                conditionalArray.push([goalsObject.goalsById[value[0]].goalName, value[1]])
                if(goalsObject.goalsById[value[0]].success === "incomplete"){
                    incomplete = true
                }
                else if(goalsObject.goalsById[value[0]].success === false){
                    success = false
                }
               }
           })

           rewardsTester(incomplete,success,conditionalArray)
            conditionalArray.push(property)
            arrayOfGoalOutputs.push(conditionalArray)
        }
        updateGoalResults(arrayOfGoalOutputs)
        if(idsToBeRemoved.length > 0){
        dispatch(deleteConditionalId(idsToBeRemoved))
        }

   },[goalsObject,conditionalsObject, conditionalsObjectId])

   return(
    <div>
    <div>FJHDSFLJBFJLHSBAF</div>
    {goalsResults.map((value, index) => {
      return <div className="goalsResultsContainer" key={value[value.length - 1]}>
            {value.map((condValues, index) => {
                if(typeof condValues[0] === "number"){
                    return <div key={condValues[1]}> {"=" + " " + condValues[0].toString()}</div>
                }
                else if(condValues === true || condValues === false || condValues === "incomplete"){
                    if(condValues){
                        dispatch(increaseSpendingAllowance(value[index - 1]))
                    }
                    var valueString = ""
                    if(condValues === true){
                        valueString = "pass"
                    }
                    else if(condValues === "incomplete"){
                        valueString = "incomplete" 
                    }
                    else{
                        valueString = "fail"
                    }
                    return <div key={valueString + value[index - 1][1]}>{valueString}</div>
                }
                else if(index === (value.length - 1)){
                    return <div 
                    key={condValues}
                    onClick={
                        () => {
                            dispatch(deleteConditionalId([condValues]))
                            dispatch(removeConditional2(condValues))
                        }
                    }
                    >Remove Condition</div>
                }
                else{
                    return <div key={condValues[1]}>{condValues[0]}</div>
                }
            })}

        </div>
    })}
   <div>{}</div>
   </div>
   )
}

