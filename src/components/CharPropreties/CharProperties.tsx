import React from 'react';

import s from './charPropreties.module.scss'
import {Property} from "@/components/CharPropreties/property/property";
import {useSelector} from "react-redux";
import {AppState} from "@/state/store";
import {upgradeCharisma, upgradeDexterity, upgradeIntelligence, upgradePower} from "@/state/character.slice";

export const CharProperties = () => {

    const basicParams = useSelector((state: AppState) => state.char.charParams.basicParams);
    const secondParams = useSelector((state: AppState) => state.char.charParams.secondaryParams);
    const skills = useSelector((state: AppState) => state.char.charParams);
    console.log(basicParams)
    return (
        <div className={s.skillsandPropertiesWrapper}>
            <div className={s.propertiesWrapper}>
                <div className={s.mainPropertiesWrapper}>
                    {/*{charParams.basicParams.map(param => <Property key={param.id} upgradeFnc={upgradeBasicParam}*/}
                    {/*                                               propertyId={param.id} propertyTitle={param.title}*/}
                    {/*                                               propertyValue={param.level}/>)}*/}
                    <Property propertyTitle={'Power'} propertyValue={basicParams.power} upgradeFnc={upgradePower} />
                    <Property propertyTitle={'Dexterity'} propertyValue={basicParams.dexterity} upgradeFnc={upgradeDexterity} />
                    <Property propertyTitle={'Intelligence'} propertyValue={basicParams.intelligence} upgradeFnc={upgradeIntelligence} />
                    <Property propertyTitle={'Charisma'} propertyValue={basicParams.charisma} upgradeFnc={upgradeCharisma} />
                </div>
                <div className={s.secondaryPropertiesWrapper}>
                    <Property propertyTitle={'Vital Force'} propertyValue={secondParams.vitalForce} />
                    <Property propertyTitle={'Dodging'} propertyValue={secondParams.dodging} />
                    <Property propertyTitle={'Vigor'} propertyValue={secondParams.vigor} />
                </div>
            </div>

            <div className={s.skillsWrapper}>
                {/*{charParams.skills.map(skill => <Property key={skill.id} isSkill={true} propertyId={skill.id}*/}
                {/*                                          upgradeFnc={upgradeSkill}*/}
                {/*                                          propertyTitle={skill.title} propertyValue={skill.level}/>)}*/}
                <h1>skill</h1>
                <h1>skill</h1>
                <h1>skill</h1>
                <h1>skill</h1>
                <h1>skill</h1>
                <h1>skill</h1>
            </div>
        </div>
    );
}

