import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const chatSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {
       
        addChat: (state, action) =>{
            return action.payload;
        }
    }
});

export const {addChat} = chatSlice.actions;
export default chatSlice.reducer;