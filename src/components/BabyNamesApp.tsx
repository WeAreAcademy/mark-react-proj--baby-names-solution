//Flow diagram: https://excalidraw.com/#json=5680880538353664,5FOVmiVqJ_XfHphPRCxGCA
import { useState } from "react";
import babyNamesData from "../data/babyNamesData.json";
import { FavouritesList } from "./FavouritesList";
import { Footer } from "./Footer";
import { MainList } from "./MainList";
import { SearchBar } from "./SearchBar";
import { BabyNameId, BabyName, Sex, sortNames } from "../core/babyName";

const sortedBabyNames: BabyName[] = sortNames(babyNamesData as BabyName[]);

const BabyNamesApp = () => {
    type SexFilter = Sex | "a";

    //HOOKS------------------------------------------------
    const [searchTerm, setSearchTerm] = useState("");
    const [favouritesIds, setFavouritesIds] = useState<BabyNameId[]>([]);
    const [selectedSex, setSelectedSex] = useState<SexFilter>("a");
    //-----------------------------------------------------

    function addFavourite(nameToAdd: BabyName): void {
        if (!favouritesIds.includes(nameToAdd.id)) {
            setFavouritesIds((prevIds) => [...prevIds, nameToAdd.id]);
        }
    }

    function removeFavourite(nameToRemove: BabyName): void {
        const newIds = favouritesIds.filter((id) => id !== nameToRemove.id);
        setFavouritesIds(newIds);
    }

    function filterForSearch(names: BabyName[]): BabyName[] {
        return searchTerm.trim().length > 0
            ? names.filter((o) =>
                  o.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
            : names;
    }

    function filterBySex(names: BabyName[]): BabyName[] {
        return names.filter(
            (o) => selectedSex === "a" || selectedSex === o.sex
        );
    }
    function filterOutFavourites(names: BabyName[]): BabyName[] {
        return names.filter((o) => !favouritesIds.includes(o.id));
    }

    const selectMale = () => setSelectedSex("m");
    const selectFemale = () => setSelectedSex("f");
    const selectAllSexes = () => setSelectedSex("a");

    const favouriteNames = favouritesIds.map(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        (favId) => sortedBabyNames.find((name) => name.id === favId)!
    );

    return (
        <div className="main">
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectMale={selectMale}
                selectFemale={selectFemale}
                selectAllSexes={selectAllSexes}
                selectedSex={selectedSex}
            />
            <FavouritesList
                favourites={favouriteNames}
                clickHandler={removeFavourite}
            />
            <MainList
                names={filterOutFavourites(
                    filterBySex(filterForSearch(sortedBabyNames))
                )}
                clickHandler={addFavourite}
            />
            <Footer />
        </div>
    );
};

export default BabyNamesApp;
