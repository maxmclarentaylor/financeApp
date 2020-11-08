import React, {useState} from 'react'

export const InputComponent = (props) => {

    const [goalsExist, changeGoalExists] = useState(true)

    return(
        <div>
        <input
        onChange={(e) => {
            if(e.target.value === ""){
                console.log(props.currentValues)
                var newArray = props.currentValues.slice(0,props.currentValues.length - 1)
                console.log(newArray)
                props.update(newArray)
                changeGoalExists(true)
                return 
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
            }
        }}></input>
        {!goalsExist && <div>Value does not exist (look at your Goal Numbers)</div>}
        </div>
    )

}