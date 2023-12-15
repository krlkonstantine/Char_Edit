import {
  createAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { CharacterType } from "@/state/types";
import { UpgradeType } from "@/components/CharPropreties/property/property";
import {
  loadCharacter,
  saveCharacter,
} from "@/components/utils/exportImport/functions";

const initialState: CharacterType = {
  name: "Enter your name",
  gender: "male",
  charParams: {
    points: 20,
    basicParams: {
      power: 0,
      dexterity: 0,
      intelligence: 0,
      charisma: 0,
    },
    secondaryParams: {
      vitalForce: 0,
      dodging: 0,
      vigor: 0,
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
      manipulation: 0,
    },
  },
  loadedCharacterData: null,
};

const hydrateAction = createAction<Partial<CharacterType>>(HYDRATE);

export const charSlice = createSlice({
  name: "char",
  initialState,
  reducers: {
    updateName(state, action: PayloadAction<{ value: string }>) {
      return {
        ...state,
        name: action.payload.value,
      };
    },
    choseGender(state, action: PayloadAction<{ value: "male" | "female" }>) {
      return {
        ...state,
        gender: action.payload.value,
      };
    },
    resetUserData(state, action: PayloadAction<any>) {
      return initialState;
    },
    getDamage(state, action: PayloadAction<any>) {
      let secondParams = state.charParams.secondaryParams;
      secondParams.vitalForce = secondParams.vitalForce - 1;
    },
    upgradePower(
      state,
      action: PayloadAction<{
        type: UpgradeType;
      }>,
    ): void {
      let basicParams = state.charParams.basicParams;
      let secondParams = state.charParams.secondaryParams;
      let skills = state.charParams.skills;
      const updatedState = { ...state };
      //next logic will be repeatedly applied
      // for upgrade power, dexterity, intelligence and charisma
      action.payload.type === "inc"
        ? //if we received inc action, we upgrade the basic property
          //and, therefore, user pays 2 points for this upgrade
          ((basicParams.power += 1), (updatedState.charParams.points -= 2))
        : ((basicParams.power -= 1),
          (updatedState.charParams.points += 2),
          //but if we get decrease, we give back the 2 paid points
          //and check whether no skills exceed basic property
          skills["strike"] > basicParams.power
            ? //if we see that a certain skill exceeds its parent property
              //we decrease it to be equal with parent property
              //and give user back its point spent for skill training
              ((skills["strike"] = skills["strike"] - 1),
              (updatedState.charParams.points += 1))
            : void 0);
      basicParams.power === 0
        ? //we also check whether a secondary property
          //depends on the value, if yes - we make changes
          (secondParams.vitalForce = 0)
        : (secondParams.vitalForce = basicParams.power + 3);
    },
    upgradeDexterity(
      state,
      action: PayloadAction<{
        type: "dec" | "inc";
      }>,
    ): void {
      let basicParams = state.charParams.basicParams;
      let secondParams = state.charParams.secondaryParams;
      let skills = state.charParams.skills;
      const updatedState = { ...state };

      action.payload.type === "inc"
        ? ((basicParams.dexterity += 1), (updatedState.charParams.points -= 2))
        : ((basicParams.dexterity -= 1),
          (updatedState.charParams.points += 2),
          skills["archery"] > basicParams.dexterity
            ? ((skills["archery"] = skills["archery"] - 1),
              (updatedState.charParams.points += 1))
            : void 0,
          skills["stealth"] > basicParams.dexterity
            ? ((skills["stealth"] = skills["stealth"] - 1),
              (updatedState.charParams.points += 1))
            : void 0);
      basicParams.dexterity === 0
        ? (secondParams.dodging = 0)
        : (secondParams.dodging = basicParams.dexterity + 10);
      secondParams.vigor = basicParams.dexterity + basicParams.intelligence;
    },
    upgradeIntelligence(
      state,
      action: PayloadAction<{
        type: "dec" | "inc";
      }>,
    ): void {
      let basicParams = state.charParams.basicParams;
      let secondParams = state.charParams.secondaryParams;
      let skills = state.charParams.skills;
      const updatedState = { ...state };

      action.payload.type === "inc"
        ? ((basicParams.intelligence += 1),
          (updatedState.charParams.points -= 2))
        : ((basicParams.intelligence -= 1),
          (updatedState.charParams.points += 2),
          skills["trainability"] > basicParams.intelligence
            ? ((skills["trainability"] = skills["trainability"] - 1),
              (updatedState.charParams.points += 1))
            : void 0,
          skills["survival"] > basicParams.intelligence
            ? ((skills["survival"] = skills["survival"] - 1),
              (updatedState.charParams.points += 1))
            : void 0,
          skills["healing"] > basicParams.intelligence
            ? ((skills["healing"] = skills["healing"] - 1),
              (updatedState.charParams.points += 1))
            : void 0);
      secondParams.vigor = basicParams.dexterity + basicParams.intelligence;
    },
    upgradeCharisma(
      state,
      action: PayloadAction<{
        type: "dec" | "inc";
      }>,
    ): void {
      let basicParams = state.charParams.basicParams;
      let skills = state.charParams.skills;
      const updatedState = { ...state };

      action.payload.type === "inc"
        ? ((basicParams.charisma += 1), (updatedState.charParams.points -= 2))
        : ((basicParams.charisma -= 1),
          (updatedState.charParams.points += 2),
          skills["harassment"] > basicParams.charisma
            ? ((skills["harassment"] = skills["harassment"] - 1),
              (updatedState.charParams.points += 1))
            : void 0,
          skills["discernment"] > basicParams.charisma
            ? ((skills["discernment"] = skills["discernment"] - 1),
              (updatedState.charParams.points += 1))
            : void 0,
          skills["appearance"] > basicParams.charisma
            ? ((skills["appearance"] = skills["appearance"] - 1),
              (updatedState.charParams.points += 1))
            : void 0,
          skills["manipulation"] > basicParams.charisma
            ? ((skills["manipulation"] = skills["manipulation"] - 1),
              (updatedState.charParams.points += 1))
            : void 0);
    },
    upgradeSkill(
      state,
      action: PayloadAction<{
        id?: string;
        type: "dec" | "inc";
      }>,
    ): void {
      debugger;
      let skills = state.charParams.skills;
      const skillName = action.payload.id;
      const updatedState = { ...state };

      if (skillName && skillName in skills) {
        action.payload.type === "inc"
          ? ((skills[skillName] += 1), (updatedState.charParams.points -= 1))
          : ((skills[skillName] -= 1), (updatedState.charParams.points += 1));
      }
    },
    loadCharacterFulfilled(
      state,
      action: PayloadAction<{ data: CharacterType }>,
    ) {
      return {
        ...state,
        ...(action.payload.data as CharacterType),
        loadedCharacterData: action.payload.data,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hydrateAction, (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      })
      .addCase(loadCharacter.fulfilled, (state, action) => {
        // @ts-ignore
        return charSlice.caseReducers.loadCharacterFulfilled(state, action);
      })
      .addCase(saveCharacter.fulfilled, (state, action) => {
        console.log("Character saved:", action.payload);
        return {
          ...state,
          lastSavedCharacter: action.payload,
        };
      })
      .addCase(saveCharacter.rejected, (state, action) => {
        console.error("Failed to save character:", action.error);
        return state;
      });
  },
});

export const {
  resetUserData,
  choseGender,
  upgradeSkill,
  updateName,
  getDamage,
  upgradePower,
  upgradeDexterity,
  upgradeIntelligence,
  upgradeCharisma,
} = charSlice.actions;

export default charSlice.reducer;
