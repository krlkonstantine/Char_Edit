import React from 'react';
import s from "./property.module.scss"

type PropertyType = {
    propertyTitle:string
    propertyValue:number

}
export const Property = (props: PropertyType) => {

    return (
        <div className={s.propertyWrapper}>
            <span className={s.propertyTitle}>{`${props.propertyTitle}:`}</span>
            <span className={s.propertyValue}>{props.propertyValue}</span>
        </div>
    );
};
