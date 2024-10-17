import { createSlice } from "@reduxjs/toolkit";




//createslice()- returns automatically reducer as well as action
export const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    // Actions given in reducers
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },
        reset:(state)=>{
            state.value=0
        },
        changerange:(state , action)=>{
            state.value+=action.payload
        }
    }

})
// actions are need to component
export const {increment,decrement,reset,changerange} = counterSlice.actions
//reducers are need to store to update state
export default counterSlice.reducer


//reducer is a action which can change a state