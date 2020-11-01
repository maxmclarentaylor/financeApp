import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteConditionalId } from '../reducers/ducks/conditions/conditions'

export const RewardsOutput = () => {

    var goalsObject  = useSelector((state) => state.goals)
    var conditionalsObject = useSelector((state) => state.conditions.conditionsById)
    var conditionalsObjectId = useSelector((state) => state.conditions.conditionsAllIds)
    const [goalsResults, updateGoalResults] = useState([])
    const dispatch = useDispatch()
   useEffect(() => {

    updateGoalResults([])
    var arrayOfGoalOutputs = []
    var idsToBeRemoved = []

    conditionalsObjectId.map((value, index) => {
        console.log("1")
            if(!conditionalsObject[value]){
                console.log("2")
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
                conditionalArray.push(goalsObject.goalsById[value].goalName)
                if(goalsObject.goalsById[value].success === "incomplete"){
                    incomplete = true
                }
                else if(goalsObject.goalsById[value].success === false){
                    success = false
                }
               }
           })
           if(incomplete){
            conditionalArray.push("incomplete")
           }
           else{
           if(success){
            conditionalArray.push(true)
           }
           else{
            conditionalArray.push(false)
           }
            }
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
   <div>{console.log(goalsResults)}</div>
   </div>
   )
}