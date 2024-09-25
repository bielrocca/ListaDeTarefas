import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducers/tarefas'

const store = configureStore({
  reducer: {
    // Define your reducers here
    tarefas: tarefasReducer
    // (other reducers): {...},
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(/* your middleware */)
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
