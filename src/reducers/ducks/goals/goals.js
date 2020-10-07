import { createSlice } from '@reduxjs/toolkit'


export const updateGoals = createSlice({
    name: 'goals',
    initialState: {

    },
    reducers: {
        addGoal: (state, action)=>{
            var newGoal ={
            }
            newGoal.goalName = action.payload.goalName
            newGoal.target = action.payload.target
            newGoal.metric = action.payload.metric
            newGoal.amountToAchieve = action.payload.amountToAchieve

            state[action.payload.key] = newGoal

            return state
        },
        deleteGoal: () => {

        },
        updateGoals: () => {

        }
    }
})

export const updateGoalsIds = createSlice({
    name: 'goals',
    initialState: [],
    reducers: {
        addGoal: (state, action) => {
            state.push(action.payload.key)
        }
    }
})

export const { addGoal } = updateGoals.actions