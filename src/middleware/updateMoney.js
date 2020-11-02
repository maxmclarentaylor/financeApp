import React from 'react'

export const asyncMoneyUpdate = storeAPI => next => action => {
        if(action.type === "money/increaseSpendingAllowance"){
           setTimeout(() => {
               next(action)
           }, 1000)
        }
        else{
            next(action)
        }
}