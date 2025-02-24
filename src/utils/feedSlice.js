import {createSlice} from "@reduxjs/toolkit";

const feedslice = createSlice({
    name: "feed",
    initialState: {
        feed: null,
    },
    reducers: {
        addFeed: (state, action) => {
            state.feed = action.payload;
        },
        removeFeed: (state) => {
            state.feed = null;
        },
    },
});

export const {addFeed} = feedslice.actions;

export default feedslice.reducer;