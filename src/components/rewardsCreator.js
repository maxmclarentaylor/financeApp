import React, { useState,  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputComponent } from './InputComponent'
import { v4 as uuidv4 } from 'uuid';
import { addConditional, addConditionalId} from '../reducers/ducks/conditions/conditions'


export const RewardsConditional = (props) => {

    var state  =  useSelector((state) => state.goals.goalsById) 

    const [goalValues, updateGoalValues] = useState(props.goalValues)
    const [inputValues, addInputValue] = useState([])
    const [inputDecisions, addInputDecisions] = useState([])
    const [arrayOfNamesAndKeys, updateArrayOfNamesAndKeys] = useState([])
    const [arrayOfNames, updateArray] = useState([])
    const [test, updateTest] = useState(true)
    const [rewardValue, RewardValueUpdate] = useState("")

   useEffect(() => {
       var currentArray = []
           for(const property in state){
               const arrayToUpdateState = [property, state[property].goalNumber]
               currentArray.push(arrayToUpdateState)
           }
           updateArray(currentArray)
   }, [state])

   const dispatch = useDispatch()

    return(
        <div className="customGoalContainer">
            {inputValues.map((value, index) => {
                return <InputComponent currentValues={inputDecisions} update={addInputDecisions} value={value} goals={arrayOfNames} key={index + "inputComponent"}/>
            })}
            <div className="plus" onClick={() => 
                addInputValue(inputValues.concat(0))}>+</div>
                {inputValues.length > 0 && <div className="plus" onClick={() => {
                const array = inputValues.slice(0, inputValues.length - 1)
                addInputValue(array)
                const array2 = inputDecisions.slice(0, inputDecisions.length - 1)
                addInputDecisions(array2)
            }}>-</div>}
                {inputValues.length > 0 && 
                <div className="equalsClass">
                    <div>= £</div>
                    <input onChange={(e) => {
                    RewardValueUpdate(e.target.value)
                    }}></input>
                    <div onClick={() => {

                        const uuid = uuidv4()
                        var array = []

                        inputDecisions.forEach((value1,index) => {
                            arrayOfNames.forEach((value2,index) => {
                                console.log(value1)
                                console.log(value2)
                                if(parseInt(value1) === value2[1])
                                array.push(value2[0])
                            })
                        })
                      
                        array.push(rewardValue)
                        
                        var objectToSend = {}

                        objectToSend.key = uuid
                        objectToSend.value = array
                    
                        dispatch(addConditionalId(uuid))
                        dispatch(addConditional(objectToSend))

                        addInputValue([])
                        addInputDecisions([])
                        

                    }} >Save value</div>
                </div>}
        </div>
    )
}