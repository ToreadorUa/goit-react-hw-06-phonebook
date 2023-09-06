import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  formReducer from "./sliceForm";
import filterReducer from "./sliceFilter";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistCongig = {
    key: "contacts",
    storage,
    blacklist: ["filter"]
}

const reducer = combineReducers({
    contacts: formReducer,
    filter: filterReducer
})

const persistedReducer= persistReducer(persistCongig, reducer)

export const store = configureStore({ reducer: persistedReducer })

export const persistor = persistStore(store)




