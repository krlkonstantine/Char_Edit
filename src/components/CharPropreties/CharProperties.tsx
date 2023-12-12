import React from 'react';

import s from './charPropreties.module.scss'
import {Property} from "@/components/CharPropreties/property/property";
import {useSelector} from "react-redux";
import {AppState} from "@/state/store";
export const CharProperties = () => {

    const charParams = useSelector((state: AppState) => state.char.charParams);

    return (
        <div className={s.skillsandPropertiesWrapper}>
            <div className={s.propertiesWrapper}>
                <div className={s.mainPropertiesWrapper}>
                    {charParams.basicParams.map(param => <Property key={param.id} propertyTitle={param.title} propertyValue={param.level}/>)}
                </div>
                <div className={s.secondaryPropertiesWrapper}>
                    {charParams.secondaryParams.map(param => <Property key={param.id} propertyTitle={param.title} propertyValue={param.level}/>)}
                </div>
            </div>

          <div className={s.skillsWrapper}>
              {charParams.skills.map(skill => <Property key={skill.id} propertyTitle={skill.title} propertyValue={skill.level}/>)}
          </div>
        </div>
    );
}

