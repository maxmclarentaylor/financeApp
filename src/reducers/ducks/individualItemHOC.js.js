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

export function removeItemBuyList(itemType, removeUpdate){
    return {
        type: `${itemType}/removeItemFromBuyList`,
        payload: removeUpdate
    }
}






//HOC action creaters
export const HOCItem = ({itemName}) => {
    const itemReducer = createSlice({
        name: itemName,
        initialState: {
            itemsPurchased : [],
            itemsSaved: [],
            mostRecentSearches: [],
          },
        reducers: {
            updateItemsToBuy: (state) => {

            },
            removeItemFromBuyList: (state) => {

            },
            updateNeedLevelOfIem: (state) => {

            },
            updateMosRecentSearches: (state) => {

            },
        }
    })

}