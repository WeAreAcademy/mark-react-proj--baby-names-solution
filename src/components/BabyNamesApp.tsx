//Flow diagram: https://excalidraw.com/#json=5680880538353664,5FOVmiVqJ_XfHphPRCxGCA
import { useState } from "react";
import babyNamesData from "../data/babyNamesData.json";
import { FavouritesList } from "./FavouritesList";
import { Footer } from "./Footer";
import { MainList } from "./MainList";
import { SearchBar } from "./SearchBar";
import { BabyNameId, NameInfo, Sex, sortNames } from "../core/nameInfo";

const sortedBabyNames: NameInfo[] = sortNames(babyNamesData as NameInfo[]);

const BabyNamesApp = () => {
    type SexFilter = Sex | "a";

    //HOOKS------------------------------------------------
    const [searchTerm, setSearchTerm] = useState("");
    const [favouritesIds, setFavouritesIds] = useState<BabyNameId[]>([]);
    const [selectedSex, setSelectedSex] = useState<SexFilter>("a");
    //-----------------------------------------------------

    function addFavourite(nameToAdd: NameInfo): void {
        if (!favouritesIds.includes(nameToAdd.id)) {
            setFavouritesIds((prevIds) => [...prevIds, nameToAdd.id]);
        }
    }

    function removeFavourite(nameToRemove: NameInfo): void {
        const newIds = favouritesIds.filter((id) => id !== nameToRemove.id);
        setFavouritesIds(newIds);
    }

    function filterForSearch(names: NameInfo[]): NameInfo[] {
        return searchTerm.trim().length > 0
            ? names.filter((o) =>
                  o.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
            : names;
    }

    function filterBySex(names: NameInfo[]): NameInfo[] {
        return names.filter(
            (o) => selectedSex === "a" || selectedSex === o.sex
        );
    }
    function filterOutFavourites(names: NameInfo[]): NameInfo[] {
        return names.filter((o) => !favouritesIds.includes(o.id));
    }

    const selectMale = () => setSelectedSex("m");
    const selectFemale = () => setSelectedSex("f");
    const selectAllSexes = () => setSelectedSex("a");

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
                allNames={sortedBabyNames}
                favouritesIds={favouritesIds}
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
