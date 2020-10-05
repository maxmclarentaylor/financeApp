import { configureStore} from '@reduxjs/toolkit'


export default function createOurStore(data){
    const store = configureStore({
        reducer: rootReducer,
        preloadedState: data
    })
    return store
}
