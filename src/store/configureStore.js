import { configureStore} from '@reduxjs/toolkit'
import { rootReducer } from '../reducers/rootReducer'


export default function createOurStore(preloadedState){
    const store = configureStore({
        reducer: rootReducer,
        preloadedState
    })
    return store
}
