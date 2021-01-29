import React, {useState} from 'react'

export const InputComponent = (props) => {

    const [goalsExist, changeGoalExists] = useState(true)
    const [localValue, updateLocalValue] = useState("")
    const [correctLocalValue, upddateCorrectLocalValue] = useState("")

    return(
        <div style={{width : "10em"}}>
        <input className="inputGoalCreator"
        onChange={(e) => {
            if(e.target.value === ""){
                if(localValue){
                    updateLocalValue("")
                    let array =  JSON.parse(JSON.stringify(props.errorArray))
                    let index = array.indexOf(true)
                    array.splice(index,1)
                    props.error(array)
                    props.errorKey(false)
                    return
                }
                else{
                    let intergIndex = props.currentValues.indexOf(correctLocalValue)
                    var newArray = JSON.parse(JSON.stringify(props.currentValues))
                    newArray.splice(intergIndex,1)
                    props.update(newArray)
                    props.resetConditional(false)
                    changeGoalExists(true)
                    props.errorKey(false)
                    return 
                }
            }
            var exists = false
            props.goals.map((value, index) => {
                if(value[1] === parseInt(e.target.value)){
                    exists = true
                }
            })
            if(exists){
                var newArrayYes = props.currentValues.concat(e.target.value)
                changeGoalExists(true)
                upddateCorrectLocalValue(e.target.value)
                props.update(newArrayYes)
            }
            else{
                changeGoalExists(false)
                let array =  JSON.parse(JSON.stringify(props.errorArray))
                array.push(true)
                updateLocalValue(e.target.value)
                props.error(array)
            }}}
            value={props.value || "" || localValue}
            ></input>
         <div>Goal number</div>
        {!goalsExist && <div>Value does not exist (look into your current goals)</div>}
        </div>
    )
}

