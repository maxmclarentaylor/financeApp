import { combineReducers } from 'redux'




var individualItemsReducers = combineReducers({
    clothes:{},
    holiday: {},
    games: {},
    films: {},
    sports: {},
    books: {},
    music: {},
})



var itemRootReducer = combineReducers({
    itemById: individualItemsReducers,
    itemAllId: reducer2
})




export const rootReducer = combineReducers({
    item: itemRootReducer,
    money: moneyReducer
})