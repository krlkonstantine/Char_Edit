
import s from './pointsInfo.module.scss';
type PropsType = {
    points: number
}
export const PointsInfo = ( props:PropsType ) => {

    return (
        <div className={s.pointsInfo}>
            {`${props.points} points available`}
            {props.points === 0 && <span className={s.noPointsInfo}>You have no points left</span>}
        </div>
    );
};
