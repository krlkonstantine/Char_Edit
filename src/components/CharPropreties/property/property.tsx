import React from 'react';
import s from "./property.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "@/state/store";
import {BasicCharParams} from "@/state/types";

type PropertyType = {
    propertyTitle: string
    propertyValue: number
    upgradeFnc?: (id: string) => { type: string, payload: string }
    isSkill?: boolean
    skillKey?: string
    isVitalForce?: boolean
}
export const Property = (props: PropertyType) => {
    const basicParams = useSelector((state: AppState) => state.char.charParams.basicParams);
    const dispatch = useDispatch()

    const upgradeProperty = () => {
        if (props.upgradeFnc && props.skillKey) {
            dispatch(props.upgradeFnc(props.skillKey));
        } else if (props.upgradeFnc) {
            dispatch(props.upgradeFnc(''));
        }
    }

    function disableTrainBtn(skillTitle: string, propertyValue: number, basicParams: BasicCharParams): boolean {
        if (propertyValue >= 5) {
            return true;
        }
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

    const isDisabled = props.isSkill
        ? disableTrainBtn(props.skillKey || '', props.propertyValue, basicParams)
        : false;


    return (
        <div className={s.propertyWrapper}>
            <div className={s.infoWrapper}>
                <span className={s.propertyTitle}>{`${props.propertyTitle}:`}</span>
                <span className={s.propertyValue}>{props.propertyValue}</span>
            </div>
            {props.upgradeFnc &&
                <button onClick={upgradeProperty} disabled={isDisabled}>
                    {props.isSkill
                        ? 'train'
                        : (props.isVitalForce ? 'get damage' : 'upgrade')}
                </button>}

        </div>
    );
};
