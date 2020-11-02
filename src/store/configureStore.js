import { configureStore} from '@reduxjs/toolkit'
import { rootReducer } from '../reducers/rootReducer'
import { asyncMoneyUpdate } from '../middleware/updateMoney'


export default function createOurStore(preloadedState){
    const store = configureStore({
        reducer: rootReducer,
        middleware: [asyncMoneyUpdate],
        preloadedState
    })
    return store
}
