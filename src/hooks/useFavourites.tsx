import { useState } from "react";
import { BabyName } from "../core/babyName";
/** React custom hook to keep track of a list of baby names as favourites, offering also add and remove convenience functions.  */
export function useFavourites() {
    const [favourites, setFavourites] = useState<BabyName[]>([]);

    function addFavourite(nameToAdd: BabyName): void {
        if (!favourites.find((f) => f.id === nameToAdd.id)) {
            setFavourites((prevFavs) => [...prevFavs, nameToAdd]);
        }
    }

    function removeFavourite(nameToRemove: BabyName): void {
        setFavourites((prevFavs) =>
            prevFavs.filter((f) => f.id !== nameToRemove.id)
        );
    }
    return { favourites, addFavourite, removeFavourite };
}
