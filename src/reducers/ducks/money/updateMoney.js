import { createSlice } from '@reduxjs/toolkit'


export const moneyUpdateReducer = createSlice({
    name: "money",
    initialState: {
        monthlyIncome: 0,
        currentSpendingAllowance: 0,
        allConditionalValues: [],
        highSpend : 0,
        mediumSpend: 0,
        lowSpend: 0
    },
    reducers: {
        // this may never be used - more it is a place to store the ids we so can
        // access them within the application
        updateItemName: (state) => {

        },
        increaseSpendingAllowance: (state, action) => {
            if(state["allConditionalValues"].indexOf(action.payload) !== -1){

            }
            else{
                state["allConditionalValues"].push(action.payload)
            }
           
            let value = 0
            state["allConditionalValues"].forEach((number,index)=> {
                if(number > value){
                    value = number
                }
            })

            state["currentSpendingAllowance"] = value

           return state

        },
        decreaseSpendingAllowance: (state, action) => {
           let index = state["allConditionalValues"].indexOf(action.payload)
           state["allConditionalValues"].splice(index,1)
           let value = 0
           state["allConditionalValues"].forEach((number, index)=> {
               if(parseInt(number) > value){
                   value = number
               }
           })
           state["currentSpendingAllowance"] = value

           return state
           
        },

        highSpend: (state, action) => {

        },
        mediumSpend: (state, action) => {

        },
        lowSpend: (state, action) => {

        }
    }
})


export const moneyAllIdStore = createSlice({
    name: "itemAllId",
    initialState: [],
    reducers: {
        // this may never be used - more it is a place to store the ids we so can
        // access them within the application
        updateItemName: (state) => {

        },
    }
})

export const { increaseSpendingAllowance, decreaseSpendingAllowance, highSpend, mediumSpend, lowSpend } = moneyUpdateReducer.actions