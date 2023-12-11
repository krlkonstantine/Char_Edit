import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppState} from "./store";
import {HYDRATE} from "next-redux-wrapper";
import {CharPropertyType, SkillType} from "@/state/types";
import {v1} from "uuid";

// Type for our state
export interface CharState {
    charState: boolean;
}
const basicCharParams :CharPropertyType[] = [
    {title: 'power', level: 0, id: v1()},
    {title: 'dexterity', level: 0, id: v1()},
    {title: 'inteligence', level: 0, id: v1()},
    {title: 'charisma', level: 0, id: v1()},
]
const secondaryCharParams :CharPropertyType[] = [
    {title: 'vitalForce', level: 0, id: v1()},
    {title: 'dodging', level: 0, id: v1()},
    {title: 'vigor', level: 0, id: v1()},
]

const skills: SkillType[] = [
    {title: 'strike', level: 0, id: v1()},
    {title: 'stealth', level: 0, id: v1()},
    {title: 'archery', level: 0, id: v1()},
    {title: 'trainability', level: 0, id: v1()},
    {title: 'survival', level: 0, id: v1()},
    {title: 'healing', level: 0, id: v1()},
    {title: 'harassment', level: 0, id: v1()},
    {title: 'discernment', level: 0, id: v1()},
    {title: 'appearance', level: 0, id: v1()},
    {title: 'manipulation', level: 0, id: v1()},
]


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

export const {setCharState} = charSlice.actions;

export const selectCharState = (state: AppState) => state.char.charState;

export default charSlice.reducer;
