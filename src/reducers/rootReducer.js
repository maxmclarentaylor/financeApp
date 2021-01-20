import { combineReducers } from 'redux'
import { HOFReducerItem, allIdsStore } from './ducks/items/individualItemHOC'
import { moneyUpdateReducer, moneyAllIdStore } from './ducks/money/updateMoney'
import { updateMonthlySpend, updateMonthlySpendAllIdStore } from './ducks/spendingPerMonth/spendingPerMonth'
import { updateGoals, updateGoalsIds } from './ducks/goals/goals'
import { updateConditions, updateConditionsId, newConditionalUsed} from './ducks/conditions/conditions'


var individualItemsReducers = combineReducers({
    clothes: HOFReducerItem({itemName : "clothes"}),
    holiday: HOFReducerItem({itemName : "holiday"}),
    games: HOFReducerItem({itemName : "holiday"}),
    films: HOFReducerItem({itemName : "films"}),
    sports: HOFReducerItem({itemName : "sports"}),
    books: HOFReducerItem({itemName : "books"}),
    music: HOFReducerItem({itemName:"music"}),
})


const itemRootReducer = combineReducers({
    itemById: individualItemsReducers,
    itemAllId: allIdsStore.reducer
})

const moneyReducer = combineReducers({
    moneyById: moneyUpdateReducer.reducer,
    moneyAllId: moneyAllIdStore.reducer
})

const spendingPerMonthReducer = combineReducers({
    spendingMonthById: updateMonthlySpend.reducer,
    spendingMonthAllId: updateMonthlySpendAllIdStore.reducer
})

const goalsReducer = combineReducers({
    goalsById: updateGoals.reducer,
    goalsAllId: updateGoalsIds.reducer
})

const conditionsReducer = combineReducers({
    conditionsById: updateConditions.reducer,
    conditionsAllIds: updateConditionsId.reducer,
    newConditionalUsed: newConditionalUsed.reducer
})

export const rootReducer = combineReducers({
    item: itemRootReducer,
    money: moneyReducer,
    spendingPerMonth: spendingPerMonthReducer,
    goals: goalsReducer,
    conditions: conditionsReducer,

})