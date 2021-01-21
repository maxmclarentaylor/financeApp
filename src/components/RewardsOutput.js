import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteConditionalId, removeConditional2, addNewUsedConditional, deleteUsedConditionalId } from '../reducers/ducks/conditions/conditions'
import { increaseSpendingAllowance, decreaseSpendingAllowance } from '../reducers/ducks/money/updateMoney'
import { updatePreviousValuesArrayOnly } from '../reducers/ducks/goals/goals'

import { v4 as uuidv4 } from 'uuid';
import { rewardsTester } from '../functions/rewardsTester'


export const RewardsOutput = React.memo((props) => {

    var goalsObject  = useSelector((state) => state.goals)
    var conditionalsObject = useSelector((state) => state.conditions.conditionsById)
    var conditionalsObjectId = useSelector((state) => state.conditions.conditionsAllIds)
    var conditionalsUsedSofar = useSelector((state) => state.conditions.newConditionalUsed)
    const [goalsResults, updateGoalResults] = useState([])
    
    const [currentConditionals, updateCurrentConditionals] = useState(conditionalsUsedSofar)
    const dispatch = useDispatch()

    useEffect(() => {
        updateCurrentConditionals(conditionalsUsedSofar)
    },[conditionalsUsedSofar])
  
    useEffect(() => {
        console.log(currentConditionals)
        updateGoalResults([])

    var arrayOfGoalOutputs = []
    var idsToBeRemoved = []
    let passValuesOfGoals = []

    conditionalsObjectId.map((value, index) => {
            if(!conditionalsObject[value]){
                idsToBeRemoved.push(value)
            }
    })
        for(const property in conditionalsObject){
            var conditionalArray = []
            let newConditional = ""

           
           var key = currentConditionals.find(x => x === property)
           if(key){
            newConditional = false
           }
           else{
                newConditional = true
           }
           const goalArray = conditionalsObject[property]
            var success = true
            var incomplete = false
            var numberArrayYes = []
           goalArray.forEach((value, index) => {
               if(index === goalArray.length - 1){
                conditionalArray.push(value)
               }
               else{
                conditionalArray.push([goalsObject.goalsById.allGoalObjects[value[0]].goalName, value[1], value[0]])
                numberArrayYes.push(goalsObject.goalsById.previousValuesArray[goalsObject.goalsById.allGoalObjects[value[0]].goalNumber])
                passValuesOfGoals.push([goalsObject.goalsById.allGoalObjects[value[0]].goalNumber, goalsObject.goalsById.allGoalObjects[value[0]].success])

                if(goalsObject.goalsById.allGoalObjects[value[0]].success === "incomplete" ){
                    incomplete = true
                    success = false
                }
                else if(goalsObject.goalsById.allGoalObjects[value[0]].success === false){
                    success = false
                }
               }
           })

           let goalKeys = []
           goalArray.forEach((array, index) => {
               if(index === goalArray.length - 1){

               }
               else{
                    goalKeys.push(array[0])
               }
           })
         
           if(success){
            

               if(newConditional){
                   
               dispatch(increaseSpendingAllowance([goalKeys,[goalArray[goalArray.length - 1][0]]]))
                dispatch(addNewUsedConditional(property))

               }
               else{ 
                   if(numberArrayYes.indexOf(false) !== -1 || numberArrayYes.indexOf("incomplete") !== -1){
                    dispatch(increaseSpendingAllowance([goalKeys,[goalArray[goalArray.length - 1][0]]]))
                }
            }
           }
           else{
               if(newConditional){

               }
           else{ if(numberArrayYes.indexOf(false) === -1 && numberArrayYes.indexOf("incomplete") === -1){
                dispatch(decreaseSpendingAllowance([goalKeys,[goalArray[goalArray.length - 1][0]]]))
            }
                }
           }
           rewardsTester(incomplete,success,conditionalArray)
            conditionalArray.push(property)
            arrayOfGoalOutputs.push(conditionalArray)
        }
        if(arrayOfGoalOutputs.length > 0){
            updateGoalResults(arrayOfGoalOutputs)
        }
   
        if(idsToBeRemoved.length > 0){
        dispatch(deleteConditionalId(idsToBeRemoved))
        }

        if(passValuesOfGoals.length > 0){
            dispatch(updatePreviousValuesArrayOnly(passValuesOfGoals))
        }

   },[goalsObject.goalsById.allGoalObjects, conditionalsObjectId, conditionalsObject])

   return(
    <div>
        {console.log(goalsResults)}
    {goalsResults.map((value, index) => {
        let integer = 0
        let completionMark = true
        let arrayForDecrease = []
      return <div className="goalsResultsContainer" key={value[value.length - 1]}>
            {value.map((condValues, index) => {
              
                if(typeof condValues[0] === "number"){
                    integer = condValues[0]
                    return <div className="goalTypeName" key={condValues[1]}> {"=" + " " + "reward of" + " " +  "£" + condValues[0].toString()}</div>
                }
                else if(condValues === true || condValues === false || condValues === "incomplete"){
                    if(condValues === true){
                    }
                    var valueString = ""
                    if(condValues === true){
                        valueString = "pass"
                    }
                    else if(condValues === "incomplete"){
                        valueString = "incomplete" 
                        completionMark = false
                    }
                    else if (condValues === false){
                        valueString = "fail"
                        completionMark = false
                    }
                    return <div  className="goalTypeName" key={valueString + value[index - 1][1]}>{valueString}</div>
                }
                else if(index === (value.length - 1)){
                    return <div 
                    className="goalTypeName"
                    key={condValues}
                    onClick={
                        () => {
                            dispatch(deleteConditionalId([condValues]))
                            dispatch(removeConditional2(condValues))
                            //dispatch(deleteUsedConditionalId(value[value.length - 1]))
                            console.log(completionMark)
                            if(completionMark){
                                dispatch(decreaseSpendingAllowance([arrayForDecrease,integer]))
                                
                            }
                            else{

                            }
                          

                        }
                    }
                    >Remove Condition</div>
                }
                else{
                    arrayForDecrease.push(condValues[2])
                    return <div className="goalTypeName" key={condValues[1]}>{condValues[0] + " "}</div>
                }
            })}

        </div>
    })
    
    }
   <div>{}</div>
   </div>
   )
})

