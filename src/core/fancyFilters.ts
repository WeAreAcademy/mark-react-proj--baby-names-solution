import { BabyName, BabyNameId } from "./babyName";
import { SexFilter } from "./filterBySex";
export type FilterFn<T> = (items: T[]) => T[];

export function bySearch(searchTerm: string): FilterFn<BabyName> {
    return function (names: BabyName[]): BabyName[] {
        return names.filter((nameData) =>
            nameData.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };
}

export function bySex(sexFilter: SexFilter): FilterFn<BabyName> {
    return function (names: BabyName[]): BabyName[] {
        return names.filter((o) => sexFilter === "a" || sexFilter === o.sex);
    };
}

export function byNotFavourites(
    favouritesIds: BabyNameId[]
): FilterFn<BabyName> {
    return function (names: BabyName[]): BabyName[] {
        return names.filter((o) => !favouritesIds.includes(o.id));
    };
}

/** Takes an array of filtering functions and returns a new function which applies those filters in turn to its input.
 *
 * This allows clear, declarative statement of pipelines.
 */
export function makeFilterPipeline<T>(filters: FilterFn<T>[]): FilterFn<T> {
    const filtersCopy = [...filters];

    function f(originalItems: T[]): T[] {
        let itemsToKeep: T[] = originalItems;
        while (filtersCopy.length > 0) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const filterFn = filtersCopy.pop()!;
            itemsToKeep = filterFn(itemsToKeep);
        }
        return itemsToKeep;
    }
    return f;
}
