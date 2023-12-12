import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppState} from "./store";
import {HYDRATE} from "next-redux-wrapper";
import {CharPropertyType, SkillType} from "@/state/types";
import {v1} from "uuid";


export const basicCharParams: CharPropertyType[] = [
    {title: 'power', level: 0, id: v1()},
    {title: 'dexterity', level: 0, id: v1()},
    {title: 'inteligence', level: 0, id: v1()},
    {title: 'charisma', level: 0, id: v1()},
]
export const secondaryCharParams: CharPropertyType[] = [
    {title: 'vitalForce', level: 0, id: v1()},
    {title: 'dodging', level: 0, id: v1()},
    {title: 'vigor', level: 0, id: v1()},
]

export const charSkills: SkillType[] = [
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

export type CharacterType = {
    name: string
    //gender: "male" | 'female'
    charParams: {
        basicParams: CharPropertyType[]
        secondaryParams: CharPropertyType[]
        skills: SkillType[]

    }
}

// Initial state
const initialState: CharacterType = {
    name: '',
    charParams: {
        basicParams: basicCharParams,
        secondaryParams: secondaryCharParams,
        skills: charSkills
    }

};

// Define HYDRATE action
const hydrateAction = createAction<Partial<CharacterType>>(HYDRATE);

// Actual Slice
export const charSlice = createSlice({
    name: "char",
    initialState,
    reducers: {
        setCharState(state, action: PayloadAction<boolean>) {
            //state.charParams = action.payload;
        },
        updateName(state, action: PayloadAction<string>) {
            state.name = action.payload
        },
        upgradeBasicParam(state, action: PayloadAction<string>): void {
            state.charParams.basicParams.map(param => param.id === action.payload ? param.level = param.level + 1 : param)
        },
        upgradeSecondaryParam(state, action: PayloadAction<string>): void {
            state.charParams.basicParams.map(param => param.id === action.payload ? param.level = param.level + 1 : param)
        },
        upgradeSkill(state, action: PayloadAction<string>): void {
            state.charParams.basicParams.map(skill => skill.id === action.payload ? skill.level = skill.level + 1 : skill)
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

export const {setCharState, updateName, upgradeBasicParam, upgradeSecondaryParam, upgradeSkill} = charSlice.actions;

export const selectCharState = (state: AppState) => state.char;

export default charSlice.reducer;
