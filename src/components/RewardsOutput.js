import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const RewardsOutput = () => {

    var goalsObject  = useSelector((state) => state.goals)
    var conditionalsObject = useSelector((state) => state.conditions.conditionsById)
    const [goalsResults, updateGoalResults] = useState([])

   useEffect(() => {
    var arrayOfGoalOutputs = []

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

   },[goalsObject,conditionalsObject])


   return(
    <div>
    <div>FJHDSFLJBFJLHSBAF</div>
   <div>{console.log(goalsResults)}</div>
   </div>
   )
}