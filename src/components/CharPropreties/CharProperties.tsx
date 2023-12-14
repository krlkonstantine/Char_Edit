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
import {useTranslation} from "react-i18next";

export const CharProperties = () => {

    const basicParams = useSelector((state: AppState) => state.char.charParams.basicParams);
    const secondParams = useSelector((state: AppState) => state.char.charParams.secondaryParams);
    const skills = useSelector((state: AppState) => state.char.charParams.skills);
    const points = useSelector((state: AppState) => state.char.charParams.points);

    const {t, i18n} = useTranslation()


    return (
        <div className={s.skillsandPropertiesWrapper}>
            <div className={s.propertiesWrapper}>
                <div className={s.mainPropertiesWrapper}>
                    <PointsInfo points={points} displayText={t('main.pointsChar')} noPointsText={t('main.noPoints')} />
                    <Property propertyTitle={t('main.basicParam.power')} propertyValue={basicParams.power} upgradeFnc={upgradePower} />
                    <Property propertyTitle={t('main.basicParam.dexterity')} propertyValue={basicParams.dexterity} upgradeFnc={upgradeDexterity} />
                    <Property propertyTitle={t('main.basicParam.intelligence')} propertyValue={basicParams.intelligence} upgradeFnc={upgradeIntelligence} />
                    <Property propertyTitle={t('main.basicParam.charisma')} propertyValue={basicParams.charisma} upgradeFnc={upgradeCharisma} />
                </div>
                <div className={s.secondaryPropertiesWrapper}>
                    <Property propertyTitle={t('main.secondParam.vitalForce')} propertyValue={secondParams.vitalForce} isVitalForce={true} upgradeFnc={getDamage} />
                    <Property propertyTitle={t('main.secondParam.dodging')} propertyValue={secondParams.dodging} />
                    <Property propertyTitle={t('main.secondParam.vigor')} propertyValue={secondParams.vigor} />
                </div>
            </div>

            <div className={s.skillsWrapper}>
                <Property propertyTitle={t('main.skills.strike')} propertyValue={skills.strike} skillKey={'strike'} upgradeFnc={upgradeSkill} isSkill={true} />
                <Property propertyTitle={t('main.skills.stealth')} propertyValue={skills.stealth} skillKey={'stealth'} upgradeFnc={upgradeSkill} isSkill={true}/>
                <Property propertyTitle={t('main.skills.archery')} propertyValue={skills.archery} skillKey={'archery'} upgradeFnc={upgradeSkill} isSkill={true}/>
                <Property propertyTitle={t('main.skills.trainability')} propertyValue={skills.trainability} skillKey={'trainability'} upgradeFnc={upgradeSkill} isSkill={true}/>
                <Property propertyTitle={t('main.skills.survival')} propertyValue={skills.survival} skillKey={'survival'} upgradeFnc={upgradeSkill} isSkill={true}/>
                <Property propertyTitle={t('main.skills.healing')} propertyValue={skills.healing} skillKey={'healing'} upgradeFnc={upgradeSkill} isSkill={true}/>
                <Property propertyTitle={t('main.skills.harassment')} propertyValue={skills.harassment} skillKey={'harassment'} upgradeFnc={upgradeSkill} isSkill={true}/>
                <Property propertyTitle={t('main.skills.discernment')} propertyValue={skills.discernment} skillKey={'discernment'} upgradeFnc={upgradeSkill} isSkill={true}/>
                <Property propertyTitle={t('main.skills.appearance')} propertyValue={skills.appearance} skillKey={'appearance'} upgradeFnc={upgradeSkill} isSkill={true}/>
                <Property propertyTitle={t('main.skills.manipulation')} propertyValue={skills.manipulation} skillKey={'manipulation'} upgradeFnc={upgradeSkill} isSkill={true}/>
            </div>
        </div>
    );
}

