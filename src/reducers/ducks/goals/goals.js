import { createSlice } from '@reduxjs/toolkit'


export const updateGoals = createSlice({
    name: 'goals',
    initialState: {
        previousValuesArray: {},
        allGoalObjects: {}
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
            state.allGoalObjects[action.payload.key] = newGoal
            return state
        },
        deleteGoal: (state, action) => {
            delete state.previousValuesArray[state[action.payload].goalNumber]
            delete state.allGoalObjects[action.payload]
            return state

        },
        updateGoalsSuccess: (state,action) => {
            if(state.previousValuesArray[state.allGoalObjects[action.payload.key].goalNumber]){
                state.previousValuesArray[state.allGoalObjects[action.payload.key].goalNumber] = state.allGoalObjects[action.payload.key].success
            }
            else{
                state.previousValuesArray[state.allGoalObjects[action.payload.key].goalNumber] = state.allGoalObjects[action.payload.key].success
            }
                var success = ""
                    if(action.payload.success === "passed"){
                        success = true
                    }
                    else if(action.payload.success === "incomplete"){
                        success = "incomplete"
                    }
                    else{
                        success = false
                    }
                state.allGoalObjects[action.payload.key]["success"] = success
                return state
        },
        updatePreviousValuesArrayOnly: (state, action) => {
            action.payload.forEach((array,index) => {
                    if(state.previousValuesArray[array[0]]){
                        state.previousValuesArray[array[0]] = array[1]
                    }
                    else{
                        state.previousValuesArray[array[0]] = array[1]
                    }
            })
            return state
        },
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

export const { addGoal, deleteGoal, updateGoalsSuccess, updatePreviousValuesArrayOnly } = updateGoals.actions