import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducers/tarefas'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    // Define your reducers here
    tarefas: tarefasReducer,
    filtro: filtroReducer // Example reducer for a "filtro" slice of state.
    // (other reducers): {...},
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(/* your middleware */)
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
