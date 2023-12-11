import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface CharState {
    charState: boolean;
}

// Initial state
const initialState: CharState = {
    charState: false,
};

// Define HYDRATE action
const hydrateAction = createAction<Partial<CharState>>(HYDRATE);

// Actual Slice
export const charSlice = createSlice({
    name: "char",
    initialState,
    reducers: {
        setCharState(state, action: PayloadAction<boolean>) {
            state.charState = action.payload;
        },
    },
    // Using the createAction to handle HYDRATE
    extraReducers: (builder) => {
        builder.addCase(hydrateAction, (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        });
    },
});

export const { setCharState } = charSlice.actions;

export const selectCharState = (state: AppState) => state.char.charState;

export default charSlice.reducer;
