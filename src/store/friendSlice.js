
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const friendSlice = createSlice({
    name: "friends",
    initialState,
    reducers: {
       
        addfriends: (state, action) =>{
            return action.payload;
        }
    }
});

export const {addfriends} = friendSlice.actions;
export default friendSlice.reducer;