//Flow diagram: https://excalidraw.com/#json=5680880538353664,5FOVmiVqJ_XfHphPRCxGCA
import { useState } from "react";
import { BabyName, sortNames } from "../core/babyName";
import {
    byNotFavourites,
    bySearch,
    bySex,
    makeFilterPipeline,
} from "../core/fancyFilters";
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

    const favouriteNames = findAllByIdOrFail(favouritesIds, sortedBabyNames);

    const filterBySearchSexAndNotFaves = makeFilterPipeline([
        bySearch(searchTerm),
        bySex(selectedSex),
        byNotFavourites(favouritesIds),
    ]);

    const mainNamesToShow = filterBySearchSexAndNotFaves(sortedBabyNames);

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
