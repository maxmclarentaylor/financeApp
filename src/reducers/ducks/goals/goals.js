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
            newGoal.success = "incomplete"
            newGoal.goalNumber = action.payload.goalNumber
            state[action.payload.key] = newGoal
            return state
        },
        deleteGoal: (state, action) => {
            delete state[action.payload]
            return state

        },
        updateGoalsSuccess: (state,action) => {
                var success = ""
                    if(action.payload.success === "passed"){
                        success = true
                    }
                    else{
                        success = false
                    }
                state[action.payload.key]["success"] = success
                return state
        }
    }
})

export const updateGoalsIds = createSlice({
    name: 'goals',
    initialState: [],
    reducers: {
        addGoal: (state, action) => {
            state.push(action.payload.key)
        },
        deleteGoal: (state, action) => {
                var index = state.indexOf(action.payload)
                state.splice(index,1)
                return state
        },

    }
})

export const { addGoal, deleteGoal, updateGoalsSuccess } = updateGoals.actions