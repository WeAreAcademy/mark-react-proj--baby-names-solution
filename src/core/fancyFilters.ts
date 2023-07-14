//Alternative, and perhaps unnecessarily complex way to implement filters, making the main react component cleaner.
//Note: none of these know anything about React.
import { BabyName, SexFilter } from "./babyName";
export type PredFn<T> = (item: T) => boolean;

export function bySearch(searchTerm: string): PredFn<BabyName> {
    return (nameData: BabyName) =>
        nameData.name.toLowerCase().includes(searchTerm.toLowerCase());
}

export function bySex(sexFilter: SexFilter): PredFn<BabyName> {
    return (nameData: BabyName) =>
        sexFilter === "a" || sexFilter === nameData.sex;
}

export function byNotInList(favourites: BabyName[]): PredFn<BabyName> {
    return (name: BabyName) => !favourites.find((f) => f.id === name.id);
}
