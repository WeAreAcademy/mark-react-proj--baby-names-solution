import { BabyName, BabyNameId } from "./babyName";

export function filterOutFavourites(
    names: BabyName[],
    favouritesIds: BabyNameId[]
): BabyName[] {
    return names.filter((o) => !favouritesIds.includes(o.id));
}
