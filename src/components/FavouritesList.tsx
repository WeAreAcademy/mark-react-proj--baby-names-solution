import { BabyName } from "../core/babyName";

export interface FavouritesListProps {
    names: BabyName[];
    children: JSX.Element;
}

export function FavouritesList({
    names,
    children,
}: FavouritesListProps): JSX.Element {
    return (
        <div className="favourites">
            <span>Favourites: </span>
            {names.length === 0 ? (
                <span>Click some names below to add to your shortlist...</span>
            ) : (
                children
            )}
        </div>
    );
}
