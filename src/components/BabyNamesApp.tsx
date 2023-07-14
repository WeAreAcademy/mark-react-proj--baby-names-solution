import { useState } from "react";
import { BabyName, sortNames } from "../core/babyName";
import { byNotInList, bySearch, bySex } from "../core/fancyFilters";
import unsortedBabyNamesData from "../data/babyNamesData.json";
import { useFavourites } from "../hooks/useFavourites";
import { FavouritesList } from "./FavouritesList";
import { BabyNameList } from "./MainList";
import { SearchBar } from "./SearchBar";

import { useSexFilter } from "../hooks/useSexFilter";
import { Footer } from "./Footer";

const sortedBabyNames: BabyName[] = sortNames(
    unsortedBabyNamesData as BabyName[]
);

// This version demos sound effects with the useSound hook
// https://joshwcomeau.com/react/announcing-use-sound-react-hook/
//
const BabyNamesApp = () => {
    const { favourites, addFavourite, removeFavourite } = useFavourites();
    const { selectedSex, setSelectedSex } = useSexFilter("a");
    const [searchTerm, setSearchTerm] = useState("");

    const mainNamesToShow = sortedBabyNames
        .filter(bySearch(searchTerm))
        .filter(bySex(selectedSex))
        .filter(byNotInList(favourites));

    return (
        <div className="main">
            <SearchBar
                {...{ searchTerm, setSearchTerm, setSelectedSex, selectedSex }}
            />
            <FavouritesList names={favourites} clickHandler={removeFavourite} />
            <BabyNameList names={mainNamesToShow} clickHandler={addFavourite} />
            <Footer />
        </div>
    );
};
export default BabyNamesApp;
