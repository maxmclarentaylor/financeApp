import { combineReducers } from 'redux'
import { HOCReducerItem, allIdsStore } from './ducks/items/individualItemHOC'
import { moneyUpdateReducer, moneyAllIdStore } from './ducks/money/updateMoney'

var individualItemsReducers = combineReducers({
    clothes: HOCReducerItem({itemName : "clothes"}),
    holiday: HOCReducerItem({itemName : "holiday"}),
    games: HOCReducerItem({itemName : "holiday"}),
    films: HOCReducerItem({itemName : "films"}),
    sports: HOCReducerItem({itemName : "sports"}),
    books: HOCReducerItem({itemName : "books"}),
    music: HOCReducerItem({itemName:"music"}),
})


const itemRootReducer = combineReducers({
    itemById: individualItemsReducers,
    itemAllId: allIdsStore.reducer
})

const moneyReducer = combineReducers({
    moneyById: moneyUpdateReducer.reducer,
    moneyAllId: moneyAllIdStore.reducer
})



export const rootReducer = combineReducers({
    item: itemRootReducer,
    money: moneyReducer
})