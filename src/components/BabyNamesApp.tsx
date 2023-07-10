//Flow diagram: https://excalidraw.com/#json=5680880538353664,5FOVmiVqJ_XfHphPRCxGCA
import { useState } from "react";
import { BabyName, BabyNameId, sortNames } from "../core/babyName";
import { SexFilter, filterBySex } from "../core/filterBySex";
import babyNamesData from "../data/babyNamesData.json";
import { FavouritesList } from "./FavouritesList";
import { Footer } from "./Footer";
import { MainList } from "./MainList";
import { SearchBar } from "./SearchBar";
import { filterOutFavourites } from "../core/filterOutFavourites";
import { filterBySearch } from "../core/filterBySearch";

const sortedBabyNames: BabyName[] = sortNames(babyNamesData as BabyName[]);

const BabyNamesApp = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [favouritesIds, setFavouritesIds] = useState<BabyNameId[]>([]);
    const [selectedSex, setSelectedSex] = useState<SexFilter>("a");

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

    const selectMale = () => setSelectedSex("m");
    const selectFemale = () => setSelectedSex("f");
    const selectAllSexes = () => setSelectedSex("a");

    const favouriteNames = favouritesIds.map(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        (favId) => sortedBabyNames.find((name) => name.id === favId)!
    );

    const mainNamesToShow = filterOutFavourites(
        filterBySex(filterBySearch(sortedBabyNames, searchTerm), selectedSex),
        favouritesIds
    );

    // const filterBySearchSexAndNotFaves = makeFilterPipeline([
    //     bySearch(searchTerm),
    //     bySex(selectedSex),
    //     byNotFavourites(favouritesIds),
    // ]);
    // const mainNamesToShow = filterBySearchSexAndNotFaves(sortedBabyNames);

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
            <MainList names={mainNamesToShow} clickHandler={addFavourite} />
            <Footer />
        </div>
    );
};

export default BabyNamesApp;
