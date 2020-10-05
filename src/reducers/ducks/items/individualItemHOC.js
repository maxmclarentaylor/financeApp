import { createSlice } from '@reduxjs/toolkit'

// actions

export function updateItemsToBuy(itemType, itemUpdate){
    return {
        type: `${itemType}/updateItemsToBuy`,
        payload: itemUpdate
    }
}

export function removeItemBuyList(itemType, removeUpdate){
    return {
        type: `${itemType}/removeItemFromBuyList`,
        payload: removeUpdate
    }
}

export function updateNeedLevel(itemType, updateNeedLevel){
    return {
        type: `${itemType}/updateNeedLevelOfItem`,
        payload: updateNeedLevel
    }
}

export function updateMostRecentSearch(itemType, updateSearchLevel){
    return {
        type: `${itemType}/updateMosRecentSearches`,
        payload: updateSearchLevel
    }
}






//HOC reducer creaters
export const HOCReducerItem = ({itemName}) => {
    const itemReducer = createSlice({
        name: itemName,
        initialState: {
            itemsPurchased : [],
            itemsSaved: [],
            mostRecentSearches: [],
            api: ""
          },
        reducers: {
            updateItemsToBuy: (state) => {

            },
            removeItemFromBuyList: (state) => {

            },
            updateNeedLevelOfItem: (state) => {

            },
            updateMosRecentSearches: (state) => {

            },
        }
    })

    return itemReducer.reducer

}

export const allIdsStore = createSlice({
    name: "itemAllId",
    initialState: [],
    reducers: {
        // this may never be used - more it is a place to store the ids we so can
        // access them within the application
        updateItemName: (state) => {

        },
    }
})