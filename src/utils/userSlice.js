import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        // login: (state, action) => {
        //     state.user = action.payload;
        // },
        // logout: (state) => {
        //     state.user = null;
        // },
        addUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = null;
        },   
    },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;