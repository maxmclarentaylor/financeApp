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
           
            
                state["allConditionalValues"].push(action.payload)
            
           
            let value = 0
            state["allConditionalValues"].forEach((number,index)=> {
                if(number[1][0] > value){
                    value = number[1][0]
                }
            })

            state["currentSpendingAllowance"] = value

           return state

        },
        decreaseSpendingAllowance: (state, action) => {
            let remove = false
            state["allConditionalValues"].forEach((number,index)=> {
                let found =  true
              action.payload[0].map((value, index2) => {
                    let result = number[0].indexOf(value)
                    console.log(result)
                    if(result === -1){
                        found = false
                    }
              })
              if(found){
                  remove = index
              }
            })
            if(remove !== false){
                console.log(remove)
                state["allConditionalValues"].splice(remove,1)
            }
           
           let value = 0
           state["allConditionalValues"].forEach((number,index)=> {
            if(number[1][0] > value){
                value = number[1][0]
            }
        })
           state["currentSpendingAllowance"] = value

           return state
           
        },
        decreaseSpendingAllowanceGoalRemoval: (state, action) => {
            let remove = []
            state["allConditionalValues"].forEach((number,index)=> {
                
                var find = number[0].indexOf(action.payload)
                if(find !== -1){
                    remove.push(index)
                }
              
            
            })
            if(remove.length > 0){
                remove.map((integer, index) => {
                    console.log(integer)
                    state["allConditionalValues"].splice(integer,1)
                })
                
            }
           
           let value = 0
           state["allConditionalValues"].forEach((number,index)=> {
            if(number[1][0] > value){
                value = number[1][0]
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

export const { increaseSpendingAllowance, decreaseSpendingAllowance, decreaseSpendingAllowanceGoalRemoval,highSpend, mediumSpend, lowSpend } = moneyUpdateReducer.actions