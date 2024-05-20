import { combineReducers, legacy_createStore } from "redux";
import { cakeReducer } from "./CakeReducer";
import { iceCreamReducer } from "./IceCreamReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export const rootStore = legacy_createStore(rootReducer)
