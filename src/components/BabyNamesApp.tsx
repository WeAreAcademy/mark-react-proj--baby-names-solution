//Flow diagram: https://excalidraw.com/#json=5680880538353664,5FOVmiVqJ_XfHphPRCxGCA
import { useState } from "react";
import { BabyName, sortNames } from "../core/babyName";
import { byNotInList, bySearch, bySex } from "../core/fancyFilters";
import { findAllByIdOrFail } from "../core/findAllInPoolOrFail";
import babyNamesData from "../data/babyNamesData.json";
import { useFavourites } from "../hooks/useFavourites";
import { useSexFilter } from "../hooks/useSexFilter";
import { FavouritesList } from "./FavouritesList";
import { Footer } from "./Footer";
import { MainList } from "./MainList";
import { SearchBar } from "./SearchBar";

const sortedBabyNames: BabyName[] = sortNames(babyNamesData as BabyName[]);

const BabyNamesApp = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { favouritesIds, addFavourite, removeFavourite } = useFavourites();
    const { selectedSex, selectMale, selectFemale, selectAllSexes } =
        useSexFilter("a");

    //get the corresponding names objects for the tracked ids
    const favouriteNames = findAllByIdOrFail(favouritesIds, sortedBabyNames);

    const mainNamesToShow = sortedBabyNames
        .filter(bySearch(searchTerm))
        .filter(bySex(selectedSex))
        .filter(byNotInList(favouritesIds));

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
