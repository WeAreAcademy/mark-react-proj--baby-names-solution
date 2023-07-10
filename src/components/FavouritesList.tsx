import { BabyNameId, NameInfo } from "../core/nameInfo";
import { BabyName } from "./BabyName";
import { NameClickHandler } from "./BabyNamesApp";

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
                        .map((favId) =>
                            allNames.find((obj) => obj.id === favId)
                        )
                        .map(
                            (nameObj) =>
                                nameObj && ( //TODO: deal correctly with missing favourites
                                    <BabyName
                                        key={nameObj.id}
                                        nameObj={nameObj}
                                        clickHandler={clickHandler}
                                    />
                                )
                        )
                )}
            </ul>
        </div>
    );
}
