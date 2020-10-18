import React, {useState} from 'react'

export const InputComponent = (props) => {

    const [goalsExist, changeGoalExists] = useState(true)

    return(
        <div>
        <input
        onChange={(e) => {
            if(e.target.value === ""){
                changeGoalExists(true)
                return 
            }
            var exists = false
            console.log(props.goals)
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
            console.log(e.target.value)
        }}></input>
        {!goalsExist && <div>Value does not exist</div>}
        </div>
    )

}