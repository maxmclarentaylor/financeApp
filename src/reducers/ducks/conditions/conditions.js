import { createSlice } from '@reduxjs/toolkit'

export const updateConditions = createSlice({
    name: 'conditions',
    initialState: {

    },
    reducers: {
        addConditional: (state, action) => {
           state[action.payload.key] = action.payload.value
            return state
        },
        updateConditional: () => {

        },
    }
})

export const updateConditionsId = createSlice({
    name: 'conditions',
    initialState: {

    },
    reducers: {
        addConditionalId: (state, action) => {

            state.push(action.payload)

            return state

        },
        deleteConditionalId: () => {
            
        }
    }
})

export const { addConditional } = updateConditions.actions


export const { addConditionalId } = updateConditionsId.actions

