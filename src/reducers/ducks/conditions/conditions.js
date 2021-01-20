import { createSlice } from '@reduxjs/toolkit'

export const updateConditions = createSlice({
    name: 'conditions',
    initialState: [],
    reducers: {
        addConditional: (state, action) => {
           state[action.payload.key] = action.payload.value
            return state
        },
        updateConditional: () => {

        },
        removeConditional1: (state, action) => {
            for(const property in state){
                    var remove = false
                    state[property].map((value, index) => {
                        if(value === action.payload){
                            remove = true
                        }
                    })
                    if(remove){
                        delete state[property]
                    }
            }
                return state
        },
        removeConditional2: (state, action) => {
                delete state[action.payload]
                return state
        }   
    }
})

export const updateConditionsId = createSlice({
    name: 'conditions',
    initialState: [],
    reducers: {
        addConditionalId: (state, action) => {
            
            state.push(action.payload)

            return state

        },
        deleteConditionalId: (state, action) => {
            action.payload.forEach((idValue, index) => {
                state.map((value, index) => {
                    if(value === idValue){
                        state.splice(index, 1)
                    }
                })
            }) 
            return state
        }
    }
})

export const newConditionalUsed = createSlice({
    name: 'conditions',
    initialState: [],
    reducers: {
        addNewUsedConditional: (state, action) => {
            
                state.push(action.payload)

            return state

        },
        deleteUsedConditionalId: (state, action) => {
            
            let number = state.indexOf(action.payload)
            state.splice(number,1)

            return state
        }
    }
})

export const { addConditional, removeConditional1, removeConditional2 } = updateConditions.actions


export const { addConditionalId, deleteConditionalId } = updateConditionsId.actions


export const { addNewUsedConditional, deleteUsedConditionalId } = newConditionalUsed.actions

