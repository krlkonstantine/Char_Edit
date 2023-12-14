import {Star} from './star'
import {useTranslation} from "react-i18next";

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
        <div style={{ display: 'flex' }}>
            {itemCount.map((item, index) => (
                <div key={index} >
                    <Star selected={props.skillLevel >= item} />
                </div>
            ))}
            <span>{skillLevelTitles[props.skillLevel]}</span>
        </div>
    )
}
