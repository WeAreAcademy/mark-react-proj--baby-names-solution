import { useState } from "react";
import { BabyName, BabyNameId } from "../core/babyName";
/** custom react hook to keep track of a list of baby name ids as favourites, offering also add and remove convenience functions.  */
export function useFavourites() {
    const [favouritesIds, setFavouritesIds] = useState<BabyNameId[]>([]);

    function addFavourite(nameToAdd: BabyName): void {
        if (!favouritesIds.includes(nameToAdd.id)) {
            setFavouritesIds((prevIds) => [...prevIds, nameToAdd.id]);
        }
    }

    function removeFavourite(nameToRemove: BabyName): void {
        setFavouritesIds((prevIds) =>
            prevIds.filter((id) => id !== nameToRemove.id)
        );
    }
    return { favouritesIds, addFavourite, removeFavourite };
}
