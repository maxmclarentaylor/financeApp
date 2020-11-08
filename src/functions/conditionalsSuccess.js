import React from 'react';

export const conditionalsSuccess = (value, higherLower, amountToAchieve, success ) => {
    if(value === ""){
        success = "incomplete"
        return success
    }
    else{
        const inputNumber = parseInt(value)

    if(higherLower === "Higher"){
        if(inputNumber > amountToAchieve){
            success = 'passed'
            return success
        }
        else{
            success = "failed"
            return success
        }
    }
    else{
        if(inputNumber < amountToAchieve){
            success = "passed"
            return success
        }
        else{
            success = "failed"
            return success
        }
    }
}
}