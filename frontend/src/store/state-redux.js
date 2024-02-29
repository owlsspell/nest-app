import { configureStore } from '@reduxjs/toolkit'
import doctorsSlice from './slices/doctorsSlice'

export const store = configureStore({
    reducer: {
        doctors: doctorsSlice,
    }
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))

