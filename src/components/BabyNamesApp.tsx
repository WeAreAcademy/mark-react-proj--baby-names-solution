import { useState } from "react";
import { BabyName, SexFilter, sortNames } from "../core/babyName";
import { byNotInList, bySearch, bySex } from "../core/fancyFilters";
import unsortedBabyNamesData from "../data/babyNamesData.json";
import { useFavourites } from "../hooks/useFavourites";
import { FavouritesList } from "./FavouritesList";
import { BabyNameList } from "./MainList";
import { SearchBar } from "./SearchBar";

const sortedBabyNames: BabyName[] = sortNames(
    unsortedBabyNamesData as BabyName[]
);

const BabyNamesApp = () => {
    const { favourites, addFavourite, removeFavourite } = useFavourites();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSex, setSelectedSex] = useState<SexFilter>("a");

    const mainNamesToShow = sortedBabyNames
        .filter(bySearch(searchTerm))
        .filter(bySex(selectedSex))
        .filter(byNotInList(favourites));

    return (
        <div className="main">
            <SearchBar
                {...{ searchTerm, setSearchTerm, setSelectedSex, selectedSex }}
            />
            <FavouritesList names={favourites}>
                <BabyNameList
                    names={favourites}
                    clickHandler={removeFavourite}
                />
            </FavouritesList>
            <BabyNameList names={mainNamesToShow} clickHandler={addFavourite} />
        </div>
    );
};

export default BabyNamesApp;
