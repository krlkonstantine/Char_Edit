import React from 'react';

import s from './charPropreties.module.scss'
import {Property} from "@/components/CharPropreties/property/property";
import {useSelector} from "react-redux";
import {AppState} from "@/state/store";
import {
    upgradeCharisma,
    upgradeDexterity,
    upgradeIntelligence,
    upgradePower,
    upgradeSkill,
    getDamage
} from "@/state/character.slice";
import {PointsInfo} from "@/components/CharPropreties/PointsInfo/PointsInfo";

export const CharProperties = () => {

    const basicParams = useSelector((state: AppState) => state.char.charParams.basicParams);
    const secondParams = useSelector((state: AppState) => state.char.charParams.secondaryParams);
    const skills = useSelector((state: AppState) => state.char.charParams.skills);
    const points = useSelector((state: AppState) => state.char.charParams.points);

    return (
        <div className={s.skillsandPropertiesWrapper}>
            <div className={s.propertiesWrapper}>
                <div className={s.mainPropertiesWrapper}>
                    <PointsInfo points={points} />
                    <Property propertyTitle={'Power'} propertyValue={basicParams.power} upgradeFnc={upgradePower} />
                    <Property propertyTitle={'Dexterity'} propertyValue={basicParams.dexterity} upgradeFnc={upgradeDexterity} />
                    <Property propertyTitle={'Intelligence'} propertyValue={basicParams.intelligence} upgradeFnc={upgradeIntelligence} />
                    <Property propertyTitle={'Charisma'} propertyValue={basicParams.charisma} upgradeFnc={upgradeCharisma} />
                </div>
                <div className={s.secondaryPropertiesWrapper}>
                    <Property propertyTitle={'Vital Force'} propertyValue={secondParams.vitalForce} isVitalForce={true} upgradeFnc={getDamage} />
                    <Property propertyTitle={'Dodging'} propertyValue={secondParams.dodging} />
                    <Property propertyTitle={'Vigor'} propertyValue={secondParams.vigor} />
                </div>
            </div>

            <div className={s.skillsWrapper}>
                <Property propertyTitle={'Strike'} propertyValue={skills.strike} skillKey={'strike'} upgradeFnc={upgradeSkill} isSkill={true} />
                <Property propertyTitle={'Stealth'} propertyValue={skills.stealth} skillKey={'stealth'} upgradeFnc={upgradeSkill} isSkill={true}/>
                <Property propertyTitle={'Archery'} propertyValue={skills.archery} skillKey={'archery'} upgradeFnc={upgradeSkill} isSkill={true}/>
                <Property propertyTitle={'Trainability'} propertyValue={skills.trainability} skillKey={'trainability'} upgradeFnc={upgradeSkill} isSkill={true}/>
                <Property propertyTitle={'Survival'} propertyValue={skills.survival} skillKey={'survival'} upgradeFnc={upgradeSkill} isSkill={true}/>
                <Property propertyTitle={'Healing'} propertyValue={skills.healing} skillKey={'healing'} upgradeFnc={upgradeSkill} isSkill={true}/>
                <Property propertyTitle={'Harassment'} propertyValue={skills.harassment} skillKey={'harassment'} upgradeFnc={upgradeSkill} isSkill={true}/>
                <Property propertyTitle={'Discernment'} propertyValue={skills.discernment} skillKey={'discernment'} upgradeFnc={upgradeSkill} isSkill={true}/>
                <Property propertyTitle={'Appearance'} propertyValue={skills.appearance} skillKey={'appearance'} upgradeFnc={upgradeSkill} isSkill={true}/>
                <Property propertyTitle={'Manipulation'} propertyValue={skills.manipulation} skillKey={'manipulation'} upgradeFnc={upgradeSkill} isSkill={true}/>
            </div>
        </div>
    );
}

