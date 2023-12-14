import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { charSlice } from "./character.slice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
    configureStore({
        reducer: {
            [charSlice.name]: charSlice.reducer,
        },
            middleware: getDefaultMiddleware => getDefaultMiddleware(),
        devTools: true,
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
