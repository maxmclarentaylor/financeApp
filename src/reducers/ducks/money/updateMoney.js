import { createSlice } from '@reduxjs/toolkit'


export const moneyUpdateReducer = createSlice({
    name: "money",
    initialState: {
        monthlyIncome: 0,
        currentSpendingAllowance: 0,
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
           if(state["currentSpendingAllowance"] < action.payload){
            state["currentSpendingAllowance"] = action.payload;
           }

           return state

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

export const { increaseSpendingAllowance } = moneyUpdateReducer.actions