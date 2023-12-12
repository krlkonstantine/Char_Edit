import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppState} from "./store";
import {HYDRATE} from "next-redux-wrapper";
import {CharacterType, CharPropertyType, SkillType} from "@/state/types";
import {v1} from "uuid";


export const basicCharParams: CharPropertyType[] = [
    {title: 'power', level: 0, id: v1()},
    {title: 'dexterity', level: 0, id: v1()},
    {title: 'intelligence', level: 0, id: v1()},
    {title: 'charisma', level: 0, id: v1()},
]
export const secondaryCharParams: CharPropertyType[] = [
    {title: 'vitalForce', level: basicCharParams[0].level + 3, id: v1()},
    {title: 'dodging', level: basicCharParams[1].level + 10, id: v1()},
    {title: 'vigor', level: basicCharParams[2].level + basicCharParams[3].level, id: v1()},
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

// export type CharacterType = {
//     name: string
//     //gender: "male" | 'female'
//     charParams: {
//         basicParams: CharPropertyType[]
//         secondaryParams: CharPropertyType[]
//         skills: SkillType[]
//
//     }
// }

// Initial state
const initialState: CharacterType = {
    name: '',
    charParams: {
        basicParams: {
            power: 0,
            dexterity: 0,
            intelligence: 0,
            charisma: 0
        },
        secondaryParams: {
            vitalForce: 0,
            dodging: 0,
            vigor: 0
        },
        skills: {
            strike: 0,
            stealth: 0,
            archery: 0,
            trainability: 0,
            survival: 0,
            healing: 0,
            harassment: 0,
            discernment: 0,
            appearance: 0,
            manipulation: 0
        }
    }
}


// const createInitialState = (power: number,dexterity: number,inteligence: number,charisma: number): CharacterType => {
//     return {
//         ...initialState,
//         charParams: {
//             ...initialState.charParams,
//             basicParams: {
//                 ...initialState.charParams.basicParams,
//                 power,dexterity,inteligence,charisma
//             },
//             secondaryParams: {
//                 ...initialState.charParams.secondaryParams,
//                 vitalForce: power + 3,
//                 dodging: dexterity + 10,
//                 vigor: charisma + inteligence
//             },
//         },
//     };
// };


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
        getDamage(state, action: PayloadAction<string>) {
            state.charParams.secondaryParams.vitalForce = state.charParams.secondaryParams.vitalForce - 1
        },
        upgradePower(state, action: PayloadAction<string>): void {
            let basicParams = state.charParams.basicParams
            let secondParams = state.charParams.secondaryParams
            basicParams.power += 1
            secondParams.vitalForce = basicParams.power + 3
        },
        upgradeDexterity(state, action: PayloadAction<string>): void {
            let basicParams = state.charParams.basicParams
            let secondParams = state.charParams.secondaryParams

            basicParams.dexterity += 1
            secondParams.dodging = basicParams.dexterity + 10
        },
        upgradeIntelligence(state, action: PayloadAction<string>): void {
            let basicParams = state.charParams.basicParams
            let secondParams = state.charParams.secondaryParams

            basicParams.intelligence += 1
            secondParams.vigor = basicParams.dexterity + basicParams.intelligence
        },
        upgradeCharisma(state, action: PayloadAction<string>): void {
            let basicParams = state.charParams.basicParams
            state.charParams.basicParams.charisma += 1
        },
        // upgradeBasicParam(state, action: PayloadAction<string>): void {
        //     state.charParams.basicParams.map(param => param.id === action.payload ? param.level = param.level + 1 : param)
        // },
        // upgradeSecondaryParam(state, action: PayloadAction<string>): void {
        //     state.charParams.secondaryParams.map(param => param.id === action.payload ? param.level = param.level + 1 : param)
        // },
        // upgradeSkill(state, action: PayloadAction<string>): void {
        //     state.charParams.skills.map(skill =>
        //         skill.id === action.payload
        //             ? {...skill, level: skill.level >= 4 ? 5 : skill.level + 1}
        //             //skill level can not be more than 5, so here we check if the value doesn't exceed the maximum
        //             : skill
        //     )
        // },

    },
    extraReducers: (builder) => {
        builder.addCase(hydrateAction, (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        });
    },
});

export const {setCharState, updateName, getDamage, upgradePower, upgradeDexterity, upgradeIntelligence, upgradeCharisma} = charSlice.actions;

export const selectCharState = (state: AppState) => state.char;

export default charSlice.reducer;
