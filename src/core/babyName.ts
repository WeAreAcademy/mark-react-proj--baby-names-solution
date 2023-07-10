export type BabyNameId = number;

export type Sex = "m" | "f";

export type SexFilter = Sex | "a";

export interface BabyName {
    name: string;
    sex: Sex;
    id: BabyNameId;
}

/** Return a sorted copy of the given BabyNames, sorted by name. */
export function sortNames(originalNames: BabyName[]): BabyName[] {
    return [...originalNames].sort((a, b) => a.name.localeCompare(b.name));
}
