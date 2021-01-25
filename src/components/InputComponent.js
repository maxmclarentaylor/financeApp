import React, {useState} from 'react'

export const InputComponent = (props) => {

    const [goalsExist, changeGoalExists] = useState(true)
    const [localValue, updateLocalValue] = useState("")

    

    return(
        <div style={{width : "10em"}}>
        <input className="inputGoalCreator"
        onChange={(e) => {
            if(e.target.value === ""){
                if(localValue){
                    updateLocalValue("")
                }
                else{
                    let intergIndex = props.currentValues.indexOf(localValue)
                    var newArray = JSON.parse(JSON.stringify(props.currentValues))
                    newArray.splice(intergIndex,1)
                    props.update(newArray)
                    props.resetConditional(false)
                    let array =  JSON.parse(JSON.stringify(props.errorArray))
                    array.splice(1, props.errorArray.indexOf(true))
                    props.error(array)
                    updateLocalValue("")
                    changeGoalExists(true)
                    return 
                }
              
            }
            var exists = false
            props.goals.map((value, index) => {
                console.log(value)
                if(value[1] === parseInt(e.target.value)){
                    exists = true
                }
            })
            if(exists){
                var newArray = props.currentValues.concat(e.target.value)
                changeGoalExists(true)
                props.update(newArray)
                
              
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