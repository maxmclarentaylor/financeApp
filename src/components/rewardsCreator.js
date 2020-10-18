import React, { useState,  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputComponent } from './InputComponent'


export const RewardsConditional = (props) => {

    var state  =  useSelector((state) => state.goals.goalsById) 

    const [goalValues, updateGoalValues] = useState(props.goalValues)
    const [inputValues, addInputValue] = useState([])
    const [inputDecisions, addInputDecisions] = useState([])
    const [arrayOfNamesAndKeys, updateArrayOfNamesAndKeys] = useState([])
    const [arrayOfNames, updateArray] = useState([])
    const [test, updateTest] = useState(true)

   useEffect(() => {
       var currentArray = []
           for(const property in state){
               const arrayToUpdateState = [property, state[property].goalNumber]
               currentArray.push(arrayToUpdateState)
           }
           updateArray(currentArray)
   }, [state])



    return(
        <div className="customGoalContainer">
            {console.log(inputDecisions)}
            {inputValues.map((value, index) => {
                return <InputComponent currentValues={inputDecisions} update={addInputDecisions} value={value} goals={arrayOfNames} key={index + "inputComponent"}/>
            })}
            <div className="plus" onClick={() => 
                
                addInputValue(inputValues.concat(0))}>+</div>
        </div>
    )
}