import { configureStore } from "@reduxjs/toolkit";
import { counterSlice  } from "./CounterSlice";

export const toolKitStore = configureStore({
    reducer: {
        counter: counterSlice.reducer 
    }    
})