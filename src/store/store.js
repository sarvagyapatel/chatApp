import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice';
import chatSlice from "./chatSlice";
import friendSlice from "./friendSlice";
const store = configureStore ({
    reducer: {
        auth : authSlice,
        chats : chatSlice,
        friends :friendSlice,
    } 
})

export default store;