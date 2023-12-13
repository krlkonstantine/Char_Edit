import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppState} from "./store";
import {HYDRATE} from "next-redux-wrapper";
import {CharacterType} from "@/state/types";
import {UpgradeType} from "@/components/CharPropreties/property/property";


// export const basicCharParams: CharPropertyType[] = [
//     {title: 'power', level: 0, id: v1()},
//     {title: 'dexterity', level: 0, id: v1()},
//     {title: 'intelligence', level: 0, id: v1()},
//     {title: 'charisma', level: 0, id: v1()},
// ]
// export const secondaryCharParams: CharPropertyType[] = [
//     {title: 'vitalForce', level: basicCharParams[0].level + 3, id: v1()},
//     {title: 'dodging', level: basicCharParams[1].level + 10, id: v1()},
//     {title: 'vigor', level: basicCharParams[2].level + basicCharParams[3].level, id: v1()},
// ]
//
// export const charSkills: SkillType[] = [
//     {title: 'strike', level: 0, id: v1()},
//     {title: 'stealth', level: 0, id: v1()},
//     {title: 'archery', level: 0, id: v1()},
//     {title: 'trainability', level: 0, id: v1()},
//     {title: 'survival', level: 0, id: v1()},
//     {title: 'healing', level: 0, id: v1()},
//     {title: 'harassment', level: 0, id: v1()},
//     {title: 'discernment', level: 0, id: v1()},
//     {title: 'appearance', level: 0, id: v1()},
//     {title: 'manipulation', level: 0, id: v1()},
// ]


const initialState: CharacterType = {
    name: 'Enter your name',
    gender: 'male',
    charParams: {
        points: 17,
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

const hydrateAction = createAction<Partial<CharacterType>>(HYDRATE);

export const charSlice = createSlice({
    name: "char",
    initialState,
    reducers: {
        updateName(state, action: PayloadAction<{value:string}>) {
            debugger
            return {
                ...state,
                name: action.payload.value
            }
        },
        choseGender(state, action: PayloadAction<{value: 'male' | 'female'}>) {
            return {
                ...state,
                gender: action.payload.value
            }
        },
        resetUserData(state, action: PayloadAction<any>) {
            return initialState;
        },
        getDamage(state, action: PayloadAction<any>) {
            let secondParams = state.charParams.secondaryParams
            secondParams.vitalForce = secondParams.vitalForce - 1
        },
        upgradePower(state, action: PayloadAction<{
            type: UpgradeType
        }>): void {
            debugger
            let basicParams = state.charParams.basicParams
            let secondParams = state.charParams.secondaryParams
            let skills = state.charParams.skills
            const updatedState = {...state}

            action.payload.type === 'inc'
                ? (basicParams.power += 1,
                    updatedState.charParams.points -= 2)
                : (basicParams.power -= 1,
                        updatedState.charParams.points += 2,
                        skills['strike'] > basicParams.power
                            ? (skills['strike'] = skills['strike'] - 1,
                                updatedState.charParams.points += 1)
                            : void 0
                )
            basicParams.power === 0
                ? secondParams.vitalForce = 0
                : secondParams.vitalForce = basicParams.power + 3
        },
        upgradeDexterity(state, action: PayloadAction<{
            type: 'dec' | 'inc'
        }>): void {
            let basicParams = state.charParams.basicParams
            let secondParams = state.charParams.secondaryParams
            let skills = state.charParams.skills
            const updatedState = {...state}

            action.payload.type === 'inc'
                ? (basicParams.dexterity += 1,
                    updatedState.charParams.points -= 2)
                : (basicParams.dexterity -= 1,
                        updatedState.charParams.points += 2,
                        skills['archery'] > basicParams.dexterity
                            ? (skills['archery'] = skills['archery'] - 1,
                                updatedState.charParams.points += 1)
                            : void 0,
                        skills['stealth'] > basicParams.dexterity
                            ? (skills['stealth'] = skills['stealth'] - 1,
                                updatedState.charParams.points += 1)
                            : void 0
                )
            basicParams.dexterity === 0
                ? secondParams.dodging = 0
                : secondParams.dodging = basicParams.dexterity + 10
            secondParams.vigor = basicParams.dexterity + basicParams.intelligence

        },
        upgradeIntelligence(state, action: PayloadAction<{
            type: 'dec' | 'inc'
        }>): void {
            let basicParams = state.charParams.basicParams
            let secondParams = state.charParams.secondaryParams
            let skills = state.charParams.skills
            const updatedState = {...state}

            action.payload.type === 'inc'
                ? (basicParams.intelligence += 1,
                    updatedState.charParams.points -= 2)
                : (basicParams.intelligence -= 1,
                        updatedState.charParams.points += 2,
                        skills['trainability'] > basicParams.intelligence
                            ? (skills['trainability'] = skills['trainability'] - 1,
                                updatedState.charParams.points += 1)
                            : void 0,
                        skills['survival'] > basicParams.intelligence
                            ? (skills['survival'] = skills['survival'] - 1,
                                updatedState.charParams.points += 1)
                            : void 0,
                        skills['healing'] > basicParams.intelligence
                            ? (skills['healing'] = skills['healing'] - 1,
                                updatedState.charParams.points += 1)
                            : void 0
                )
            secondParams.vigor = basicParams.dexterity + basicParams.intelligence
        },
        upgradeCharisma(state, action: PayloadAction<{
            type: 'dec' | 'inc'
        }>): void {
            let basicParams = state.charParams.basicParams
            let skills = state.charParams.skills
            const updatedState = {...state}

            action.payload.type === 'inc'
                ? (basicParams.charisma += 1,
                    updatedState.charParams.points -= 2)
                : (basicParams.charisma -= 1,
                        updatedState.charParams.points += 2,
                        skills['harassment'] > basicParams.charisma
                            ? (skills['harassment'] = skills['harassment'] - 1,
                                updatedState.charParams.points += 1)
                            : void 0,
                        skills['discernment'] > basicParams.charisma
                            ? (skills['discernment'] = skills['discernment'] - 1,
                                updatedState.charParams.points += 1)
                            : void 0,
                        skills['appearance'] > basicParams.charisma
                            ? (skills['appearance'] = skills['appearance'] - 1,
                                updatedState.charParams.points += 1)
                            : void 0,
                        skills['manipulation'] > basicParams.charisma
                            ? (skills['manipulation'] = skills['manipulation'] - 1,
                                updatedState.charParams.points += 1)
                            : void 0
                )
        },
        upgradeSkill(state, action: PayloadAction<{
            id?: string,
            type: 'dec' | 'inc'
        }>): void {
            debugger
            let skills = state.charParams.skills
            const skillName = action.payload.id
            const updatedState = {...state}

            if (skillName && skillName in skills) {
                action.payload.type === 'inc'
                    ? (skills[skillName] += 1, updatedState.charParams.points -= 1)
                    : (skills[skillName] -= 1, updatedState.charParams.points += 1)
            }
        },

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

export const {resetUserData,choseGender, upgradeSkill, updateName, getDamage, upgradePower, upgradeDexterity, upgradeIntelligence, upgradeCharisma} = charSlice.actions;

export const selectCharState = (state: AppState) => state.char;

export default charSlice.reducer;
