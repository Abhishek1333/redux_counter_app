import { createSlice } from "@reduxjs/toolkit";


export const counterSlice=createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    //actions are created inside reducers key as objects
    reducers:{
        // logics to update state

        // function to increment number
        increment:(state,action)=>{
            state.value+=action.payload
        },
         // function to decrement number
        decrement:(state,action)=>{
            // if its an argument function then it can only be accessed by action and value in payload 
            state.value-=action.payload
        },
        reset:(state)=>{
            state.value=0
        }

    }
})
// action is required by component inorder to update state
export const{increment,decrement,reset}=counterSlice.actions

//reducer is required to change the state value

export default counterSlice.reducer