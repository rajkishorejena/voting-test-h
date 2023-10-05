import {createSlice} from "@reduxjs/toolkit";

export interface BtnStatus{
    status:boolean
};

const initialState:BtnStatus ={
    status:true
} ;
export const BtnStatusSlice = createSlice({
    name:"BtnStatus",
    initialState:initialState,
    reducers:{
        updateBtnStatus:(state)=>{
            state.status = false;
        }
    }
});

export const {updateBtnStatus} = BtnStatusSlice.actions;
export default BtnStatusSlice