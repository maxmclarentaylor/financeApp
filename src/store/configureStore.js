import { configureStore} from '@reduxjs/toolkit'
import { rootReducer } from '../reducers/rootReducer'


export default function createOurStore(data){
    const store = configureStore({
        reducer: rootReducer,
        preloadedState: data
    })
    return store
}
