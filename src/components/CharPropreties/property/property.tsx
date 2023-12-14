import React from 'react';
import s from "./property.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "@/state/store";
import {BasicCharParams} from "@/state/types";
import {PayloadAction} from '@reduxjs/toolkit';
import {useTranslation} from "react-i18next";

export type UpgradeType = 'dec' | 'inc';

type PropertyType = {
    propertyTitle: string
    propertyValue: number
    upgradeFnc?: (params: { id?: string; type: UpgradeType }) => PayloadAction<{ id?: string; type: UpgradeType }>;
    isSkill?: boolean
    skillKey?: string
    isVitalForce?: boolean
}
export const Property = (props: PropertyType) => {
    const {t, i18n} = useTranslation()


    const basicParams = useSelector((state: AppState) => state.char.charParams.basicParams);
    const dispatch = useDispatch()
    const points = useSelector((state: AppState) => state.char.charParams.points);

    const upgradeProperty = (type: 'dec' | 'inc') => {
        if (props.upgradeFnc && props.skillKey) {
            dispatch(props.upgradeFnc({id: props.skillKey, type}));
        } else if (props.upgradeFnc) {
            dispatch(props.upgradeFnc({type}));
        }
    }

    function disableTrainBtn(skillTitle: string, propertyValue: number, basicParams: BasicCharParams): boolean {
        if (points === 0) {
            return true;
        }
        //this is to disable increase buttons. Here we also
        // can see which skill corresponds to which basic parameter
        switch (skillTitle) {
            case 'strike':
                return propertyValue >= basicParams.power;
            case 'stealth':
                return propertyValue >= basicParams.dexterity;
            case 'archery':
                return propertyValue >= basicParams.dexterity;
            case 'trainability':
                return propertyValue >= basicParams.intelligence;
            case 'survival':
                return propertyValue >= basicParams.intelligence;
            case 'healing':
                return propertyValue >= basicParams.intelligence;
            case 'harassment':
                return propertyValue >= basicParams.charisma;
            case 'discernment':
                return propertyValue >= basicParams.charisma;
            case 'appearance':
                return propertyValue >= basicParams.charisma;
            case 'manipulation':
                return propertyValue >= basicParams.charisma;
            default:
                return false;
        }
    }

    const isDisabledForDecrease = props.propertyValue <= 0
    //we cant decrease progress less than 0, because it will
    //be possible for users to gain points for decrease
    const isDisabledForUpgrade =
        (props.isSkill
            ? disableTrainBtn(props.skillKey || '', props.propertyValue, basicParams)
            : props.propertyValue >= 5) || (!props.isSkill && points <=1)
    //and we cant upgrade more than 5 steps, that's the limit.
    //This check is placed here as in future it can be necessary
    //to increase the limit. In such case reducer can not be modified
    //and this is the only palace we should make changes. Note that
    //changing limit here will change limits for both skills and basic properties


    return (
        <div className={s.propertyWrapper}>
            <span className={s.propertyTitle}>{`${props.propertyTitle}:`}</span>
            <div className={s.infoWrapper}>
                {props.isVitalForce &&
                    <button className={s.getDamageBtn} onClick={() => upgradeProperty('dec')}
                            disabled={props.propertyValue <= 0}>
                        {t('main.damage')}

                    </button>}
                {props.upgradeFnc && !props.isVitalForce &&
                    <button onClick={() => upgradeProperty('dec')} disabled={isDisabledForDecrease}
                            className={s.changeProperty}>
                        ▼
                    </button>}
                <span className={s.propertyValue}>{props.propertyValue}</span>
                {props.upgradeFnc && !props.isVitalForce &&
                    <button onClick={() => upgradeProperty('inc')} disabled={isDisabledForUpgrade}
                            className={s.changeProperty}>
                        ▲
                    </button>}
            </div>

        </div>
    );
};
