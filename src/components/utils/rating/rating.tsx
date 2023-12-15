import {Star} from './star'
import {useTranslation} from "react-i18next";
import s from './rating.module.scss'

type PropsType = {
    skillLevel: number
}
export const Rating = (props: PropsType) => {
    let itemCount = [1, 2, 3, 4, 5]
    const {t, i18n} = useTranslation()

    const skillLevelTitles = [
        t('main.levels.0_level'),
        t('main.levels.1_level'),
        t('main.levels.2_level'),
        t('main.levels.3_level'),
        t('main.levels.4_level'),
        t('main.levels.5_level')
    ]


    return (
            <div className={s.ratingWrapper}>
                <span className={s.skillLevelText}>{skillLevelTitles[props.skillLevel]}</span>
                <span>
                    {itemCount.map((item, index) => (
                        <span key={index}>
                            <Star selected={props.skillLevel >= item}/>
                        </span>
                    ))}
                </span>
            </div>
    )
}
