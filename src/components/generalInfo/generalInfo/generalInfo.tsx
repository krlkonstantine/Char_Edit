import React from 'react';


import s from './generalInfo.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "@/state/store";
import {ToggleGender} from "@/components/tabSwitcher/tabSwitcher";
import {EditableSpan} from "@/components/editableSpan/EditableSpan";
import {resetUserData, updateName} from "@/state/character.slice";
import CharacterManagement from "@/components/exportImport/exportImport";
import {useTranslation} from "react-i18next";

export const GeneralInfo = () => {
    const dispatch = useDispatch();
    const generalInfo = useSelector((state: AppState) => state.char);
    const {t, i18n} = useTranslation()


    const onNameChangeHandler = (value: string) => {
        dispatch(updateName({value}));
    }
    const resetHandler = () => {
        dispatch(resetUserData(''))
    }
    return (
        <div className={s.characterWrapper}>
            <div className={s.nameWrapper}>
                <span className={s.categoryTitle}>{t('main.name')}</span>
                <EditableSpan value={generalInfo.name} onChange={onNameChangeHandler}/>
            </div>
            <div className={s.nameWrapper}>
                <span className={s.categoryTitle}>{t('main.gender')}</span>
                <ToggleGender maleText={t('main.male')} femaleText={t('main.female')}/>
            </div>

            <CharacterManagement importText={t('main.importChar')} exportText={t('main.exportChar')} character={generalInfo}/>
            <button className={s.charOptionsBtn} onClick={resetHandler}>{t('main.reset')}</button>
        </div>
    );
}

