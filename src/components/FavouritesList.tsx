import { BabyNameId, NameInfo } from "../core/nameInfo";
import { BabyName, NameClickHandler } from "./BabyName";

export interface IFavouritesListProps {
    allNames: NameInfo[];
    favouritesIds: BabyNameId[];
    clickHandler: NameClickHandler;
}

export function FavouritesList({
    allNames,
    favouritesIds,
    clickHandler,
}: IFavouritesListProps): JSX.Element {
    return (
        <div className="favourites">
            <span>Favourites: </span>
            <ul>
                {favouritesIds.length === 0 ? (
                    <span>
                        Click some names below to add to your shortlist...
                    </span>
                ) : (
                    favouritesIds
                        .map(
                            (favId) => allNames.find((obj) => obj.id === favId)!
                        )
                        .map((nameInfo) => (
                            <BabyName
                                key={nameInfo.id}
                                nameInfo={nameInfo}
                                clickHandler={clickHandler}
                            />
                        ))
                )}
            </ul>
        </div>
    );
}
