//Alternative (and perhaps unnecessarily complex) way to implement filters, making the main react component cleaner.
//Note: none of these know anything about React.
import { BabyName, SexFilter } from "./babyName";
export type PredicateFunction<T> = (item: T) => boolean;

/** Create a predicate function which passes if a given baby name matches the given searchTerm */
export function bySearch(searchTerm: string): PredicateFunction<BabyName> {
    return (nameData: BabyName) =>
        nameData.name.toLowerCase().includes(searchTerm.toLowerCase());
}

/** Create a predicate function which passes if a given baby name matches with the given sex filter */
export function bySex(sexFilter: SexFilter): PredicateFunction<BabyName> {
    return (nameData: BabyName) =>
        sexFilter === "a" || sexFilter === nameData.sex;
}

/** Create a predicate function which passes if a given baby name is not in the given list of favourite names. */
export function byNotInList(
    favourites: BabyName[]
): PredicateFunction<BabyName> {
    return (name: BabyName) => !favourites.find((f) => f.id === name.id);
}
