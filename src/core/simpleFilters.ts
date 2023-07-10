import { BabyName, BabyNameId, SexFilter } from "./babyName";

export function filterBySearch(
    names: BabyName[],
    searchTerm: string
): BabyName[] {
    return searchTerm.trim().length > 0
        ? names.filter((o) =>
              o.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : names;
}

export function filterOutFavourites(
    names: BabyName[],
    favouritesIds: BabyNameId[]
): BabyName[] {
    return names.filter((o) => !favouritesIds.includes(o.id));
}

export function filterBySex(
    names: BabyName[],
    selectedSex: SexFilter
): BabyName[] {
    return names.filter((o) => selectedSex === "a" || selectedSex === o.sex);
}
