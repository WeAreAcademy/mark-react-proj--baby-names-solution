import { BabyName } from "../core/babyName";
import { NameClickHandler } from "./BabyNameView";
import { BabyNameList } from "./MainList";

export interface FavouritesListProps {
    names: BabyName[];
    clickHandler: NameClickHandler;
}

export function FavouritesList({
    names,
    clickHandler,
}: FavouritesListProps): JSX.Element {
    return (
        <div className="favourites">
            <span>Favourites: </span>
            {names.length === 0 ? (
                <span>Click some names below to add to your shortlist...</span>
            ) : (
                <BabyNameList names={names} clickHandler={clickHandler} />
            )}
        </div>
    );
}
