//Flow diagram: https://excalidraw.com/#json=5680880538353664,5FOVmiVqJ_XfHphPRCxGCA

import { useState } from "react";
import BabyNamesData from "../data/babyNamesData.json";
import { FavouritesList } from "./FavouritesList";
import { Footer } from "./Footer";
import { MainList } from "./MainList";
import { SearchBar } from "./SearchBar";
import { BabyNameId, NameInfo } from "../core/nameInfo";

export type NameClickHandler = (nameObj: NameInfo) => void;

BabyNamesData.sort((a, b) => (a.name < b.name ? -1 : 1));

const BabyNamesApp = () => {
    //HOOKS------------------------------------------------
    const [searchTerm, setSearchTerm] = useState("");
    const [favouritesIds, setFavouritesIds] = useState<BabyNameId[]>([]);
    const [selectedGender, setSelectedGender] = useState("a");
    //-----------------------------------------------------

    const addFavourite = (nameObj: NameInfo): void => {
        setFavouritesIds(favouritesIds.concat([nameObj.id]));
    };

    const removeFavourite = (nameObj: NameInfo): void => {
        console.log("removing", nameObj.name);
        const newIds = favouritesIds.filter((id) => id !== nameObj.id);
        setFavouritesIds(newIds);
    };

    const filterForSearch = (names: NameInfo[]) => {
        return searchTerm.trim().length > 0
            ? names.filter((o) =>
                  o.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
            : names;
    };

    const filterByGender = (names: NameInfo[]) => {
        return names.filter(
            (o) => selectedGender === "a" || selectedGender === o.sex
        );
    };
    const filterOutFavourites = (names: NameInfo[]) => {
        return names.filter((o) => !favouritesIds.includes(o.id));
    };
    const selectMale = () => setSelectedGender("m");
    const selectFemale = () => setSelectedGender("f");
    const selectAllGenders = () => setSelectedGender("a");

    return (
        <div className="main">
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectMale={selectMale}
                selectFemale={selectFemale}
                selectAllGenders={selectAllGenders}
                selectedGender={selectedGender}
            />
            <FavouritesList
                allNames={BabyNamesData}
                favouritesIds={favouritesIds}
                clickHandler={removeFavourite}
            />
            <MainList
                names={filterOutFavourites(
                    filterByGender(filterForSearch(BabyNamesData))
                )}
                clickHandler={addFavourite}
            />
            <Footer />
        </div>
    );
};

export const classForName = ({ sex }: { sex: string }) =>
    sex === "m" ? "male" : "female";

export interface IBabyNameProps {
    nameObj: NameInfo;
    clickHandler: NameClickHandler;
}

export default BabyNamesApp;
