import {configureStore} from "@reduxjs/toolkit";
import BtnStatusSliceReducer from "../Slice/BtnStatusSlice";
export const store = configureStore({
    reducer:{
        btnStatus:BtnStatusSliceReducer.reducer
    }
}) ;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch ;