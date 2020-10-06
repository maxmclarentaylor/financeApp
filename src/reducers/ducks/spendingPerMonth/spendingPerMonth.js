import { createSlice } from '@reduxjs/toolkit'

export const updateMonthlySpend = createSlice({
    name: "monthlyUpdate",
    initialState: {
        "Jan": [],
        "Feb": [],
        "Mar": [],
        "Apr": [],
        "May": [],
        "Jun": [],
        "Jul": [],
        "Aug": [],
        "Sep": [],
        "Oct": [],
        "Nov": [],
        "Dec": []
    },
    reducers: {
        updateMonthlySpend: () => {

        },
        removeOutdatedMonths: () => {

        },
        updateMoneySaved: () => {

        },
    }
})

export const updateMonthlySpendAllIdStore = createSlice({
    name: "monthlyUpdateAllId",
    initialState: [],
    reducers: {
        // this may never be used - more it is a place to store the ids we so can
        // access them within the application
        updateMonthOrder: (state) => {

        },
    }
})