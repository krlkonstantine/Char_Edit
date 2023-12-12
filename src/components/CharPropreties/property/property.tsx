import React from 'react';
import s from "./property.module.scss"
import {useDispatch} from "react-redux";

type PropertyType = {
    propertyTitle: string
    propertyValue: number
    //propertyId: string
    upgradeFnc?: (id: string) => { type: string, payload: string }
    isSkill?: boolean
}
export const Property = (props: PropertyType) => {

    const dispatch = useDispatch()

    const upgradeProperty = () => {
        if (props.upgradeFnc) {
            dispatch(props.upgradeFnc('props.propertyId'));
        }
    }

    return (
        <div className={s.propertyWrapper}>
            <div className={s.infoWrapper}>
                <span className={s.propertyTitle}>{`${props.propertyTitle}:`}</span>
                <span className={s.propertyValue}>{props.propertyValue}</span>
            </div>
            {props.upgradeFnc &&
                <button onClick={upgradeProperty} disabled={props.isSkill ? props.propertyValue === 5 : false}>upgrade
                </button>}

        </div>
    );
};
