import {FullStar} from "@/assets/img/rating-icon/full-star";
import {EmptyStar} from "@/assets/img/rating-icon/empty-star";


export const Star: React.FC<{ selected: boolean }> = ({ selected }) => {
  return selected ? <FullStar /> : <EmptyStar />
}
