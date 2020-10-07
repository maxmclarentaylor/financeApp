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
export const HOFReducerItem = ({itemName}) => {
    const itemReducer = createSlice({
        name: itemName,
        initialState: {
            itemsPurchased : {},
            itemsSaved: [],
            mostRecentSearches: [],
            api: ""
          },
        reducers: {
            updateItemsToBuy: (state, action) => {
                    state.itemsPurchased.push(action.payload)
                    return state

            },
            removeItemFromBuyList: (state, action) => {
                var indexOfItemToRemove = ""
                state.itemsPurchased.map((item, index) => {
                        if(item.name === action.payload){
                            indexOfItemToRemove = index
                        }
                })
                state.itemsPurchased.splice(indexOfItemToRemove, 1)
                return state
            },
            updateNeedLevelOfItem: (state, action) => {
                state.itemsPurchased.map((item, index) => {
                    if(item.name === action.payload.name){
                        item.wantLevel = action.payload.wantLevel
                    }
                    })
                return state
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
        removeItemFromKeys: (state, action) => {
                state.forEach((array) => {
                    if(array[0] === action.payload[0]){
                        array[1] = action.payload[1]
                    }
                })
                return state
        },
        addItemToKeys: (state, action) =>{
            state.forEach((array) => {
                if(array[0] === action.payload[0]){
                    array[1] = action.payload[1]
                }
            })
            return state
        }
    }
})

export const { removeItemFromKeys, addItemToKeys } = allIdsStore.actions