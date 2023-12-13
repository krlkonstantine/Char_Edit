import React from 'react';


import s from './generalInfo.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "@/state/store";
import {ToggleGroupDemo} from "@/components/tabSwitcher/tabSwitcher";
import {EditableSpan} from "@/components/editableSpan/EditableSpan";
import {resetUserData, updateName} from "@/state/character.slice";

export const GeneralInfo = () => {
    const dispatch = useDispatch();
    const generalInfo = useSelector((state: AppState) => state.char);

    const onNameChangeHandler = (value: string) => {
        dispatch(updateName({value}));
    }
    const resetHandler = () => {
        dispatch(resetUserData(''))
    }
    return (
        <div className={s.characterWrapper}>
            <EditableSpan value={generalInfo.name} onChange={onNameChangeHandler}/>
            <ToggleGroupDemo/>
            <button onClick={resetHandler}>Reset User</button>
        </div>
    );
}

