
import s from './pointsInfo.module.scss';
type PropsType = {
    points: number
    displayText: string
    noPointsText: string
}
export const PointsInfo = ( props:PropsType ) => {

    return (
        <div className={s.pointsInfo}>
            {`${props.points} ${props.displayText}`}
            {props.points === 0 && <span className={s.noPointsInfo}>{props.noPointsText}</span>}
        </div>
    );
};
