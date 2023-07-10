import { BabyName } from "../core/babyName";
import { BabyNameView, NameClickHandler } from "./BabyNameView";

export interface FavouritesListProps {
    favourites: BabyName[];
    clickHandler: NameClickHandler;
}

export function FavouritesList({
    favourites,
    clickHandler,
}: FavouritesListProps): JSX.Element {
    return (
        <div className="favourites">
            <span>Favourites: </span>
            {favourites.length === 0 ? (
                <span>Click some names below to add to your shortlist...</span>
            ) : (
                <ul>
                    {favourites.map((babyName) => (
                        <BabyNameView
                            key={babyName.id}
                            babyName={babyName}
                            clickHandler={clickHandler}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}
