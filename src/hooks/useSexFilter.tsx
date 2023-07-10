import { useState } from "react";
import { SexFilter } from "../core/babyName";

export function useSexFilter(defaultFilter: SexFilter) {
    const [selectedSex, setSelectedSex] = useState<SexFilter>(defaultFilter);
    const selectMale = () => setSelectedSex("m");
    const selectFemale = () => setSelectedSex("f");
    const selectAllSexes = () => setSelectedSex("a");
    return { selectedSex, selectMale, selectFemale, selectAllSexes };
}
