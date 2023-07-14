import { useState } from "react";
import { BabyName, SexFilter, sortNames } from "../core/babyName";
import { byNotInList, bySearch, bySex } from "../core/fancyFilters";
import { findAllByIdOrFail } from "../core/findAllInPoolOrFail";
import babyNamesData from "../data/babyNamesData.json";
import { useFavourites } from "../hooks/useFavourites";
import { FavouritesList } from "./FavouritesList";
import { MainList } from "./MainList";
import { SearchBar } from "./SearchBar";

const sortedBabyNames: BabyName[] = sortNames(babyNamesData as BabyName[]);

const BabyNamesApp = () => {
    const { favouritesIds, addFavourite, removeFavourite } = useFavourites();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSex, setSelectedSex] = useState<SexFilter>("a");

    //Turn list of ids into list of baby names
    const favouriteNames = findAllByIdOrFail(favouritesIds, sortedBabyNames);

    const mainNamesToShow = sortedBabyNames
        .filter(bySearch(searchTerm))
        .filter(bySex(selectedSex))
        .filter(byNotInList(favouritesIds));

    return (
        <div className="main">
            <SearchBar
                {...{ searchTerm, setSearchTerm, setSelectedSex, selectedSex }}
            />
            <FavouritesList
                favourites={favouriteNames}
                clickHandler={removeFavourite}
            />
            <MainList names={mainNamesToShow} clickHandler={addFavourite} />
        </div>
    );
};

export default BabyNamesApp;
