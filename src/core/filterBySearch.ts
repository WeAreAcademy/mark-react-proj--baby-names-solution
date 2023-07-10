import { BabyName } from "./babyName";

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
