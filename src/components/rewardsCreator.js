import React, { useState,  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputComponent } from './InputComponent'
import { v4 as uuidv4 } from 'uuid';
import { addConditional, addConditionalId} from '../reducers/ducks/conditions/conditions'


export const RewardsConditional = (props) => {

    var state  =  useSelector((state) => state.goals.goalsById.allGoalObjects) 
    var conditions = useSelector((state) => state.conditions.conditionsById) 

    const [inputValues, addInputValue] = useState([])
    const [inputDecisions, addInputDecisions] = useState([])
    const [arrayOfNamesAndKeys, updateArrayOfNamesAndKeys] = useState([])
    const [arrayOfNames, updateArray] = useState([])
    const [test, updateTest] = useState(true)
    const [rewardValue, RewardValueUpdate] = useState("")
    const [errorShow, errorShowUpdate] = useState([])
    const [alreadyConditional, upateAlreadyConditional] = useState(false)
    const [showErrorMessage, showErrorMessageUpdate ] = useState(false)
    const [noValueMade, upateNoValueMade] = useState(false)


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
                return <InputComponent errorKey={showErrorMessageUpdate} error={errorShowUpdate} errorArray={errorShow} index={index} currentValues={inputDecisions} update={addInputDecisions} value={inputDecisions[index]} goals={arrayOfNames} resetConditional={upateAlreadyConditional} key={index + "inputComponent"}/>
            })}
            <div className="plus" onClick={() => {
                if(inputDecisions.length !== inputValues.length){
                    upateNoValueMade(true)
                }
                else{
                    upateNoValueMade(false)
                    upateAlreadyConditional(false)
                    addInputValue(inputValues.concat(0))
                }
                }}>+</div>
                {noValueMade && <div>Please add in a value or remove error</div>}
                {inputValues.length > 0 && <div className="plus" onClick={() => {
                const array = inputValues.slice(0, inputValues.length - 1)
                addInputValue(array)
                errorShowUpdate([])
                if(inputDecisions.length > array.length){
                const array2 = inputDecisions.slice(0, inputDecisions.length - 1)
                addInputDecisions(array2)
                }
                if(array.length === 0){
                    RewardValueUpdate("")
                }
                upateNoValueMade(false)
                upateAlreadyConditional(false)
                showErrorMessageUpdate(false)
            }}>-</div>}
                {inputValues.length > 0 && 
                <div className="equalsClass">
                    <div className="equalsClassSymbols">= £</div>
                    <input className="inputForEqualsSymbol" onChange={(e) => {
                          RewardValueUpdate(e.target.value)
                    }}></input>
                    <div className="equalsSaveValue" onClick={() => {

                        console.log(inputDecisions)
                        console.log(rewardValue)
                        console.log(alreadyConditional)
                        console.log(errorShow)

                        if(inputDecisions.length !== 0 && rewardValue !== "" && !alreadyConditional && errorShow.indexOf(true) === -1){
                            const uuid = uuidv4()
                            var array = []
                            var justIdArray = []
                            inputDecisions.forEach((value1,index) => {
                                arrayOfNames.forEach((value2,index) => {
                                    if(parseInt(value1) === value2[1]){
                                    array.push([value2[0], uuidv4()])
                                    justIdArray.push(value2[0])
                                    }
                                })
                            })

                           let cont = true

                           for(const key in conditions){
                             let value = conditions[key]
                                let individualFind = false
                                let miniArray = []
                                value.map((value2,index2) => {
                                    if(index2 !== value.length -1){
                                        miniArray.push(value2[0])
                                    }
                                })
                               
                               if(miniArray.length === justIdArray.length){
                                justIdArray.map((v,i) => {
                                    let iNumber = miniArray.indexOf(v)
                                    if(iNumber === -1){
                                        individualFind = true
                                    }
                                })
                               }
                               else{
                                individualFind = true
                               }
                             if(!individualFind){
                                cont = false
                                upateAlreadyConditional(true)
                             }
                            }
                            
                            if(cont){
                            array.push([parseInt(rewardValue), uuidv4()])
                            
                            var objectToSend = {}
    
                            objectToSend.key = uuid
                            objectToSend.value = array
                        
                            dispatch(addConditionalId(uuid))
                            dispatch(addConditional(objectToSend))
    
                            addInputValue([])
                            addInputDecisions([])
                            errorShowUpdate([])
                            showErrorMessageUpdate(false)
                            }
                        }
                        else{
                          if(alreadyConditional){

                          }
                          else{
                            showErrorMessageUpdate(true)
                          }
                           
                        }

                    }} >Save value</div>
                    {alreadyConditional && <div className="equalsFilledIn">This is already an conditional</div>}
                    {showErrorMessage && <div className="equalsFilledIn">Each option must be properly filled in</div>}
                </div>}
        </div>
    )
}