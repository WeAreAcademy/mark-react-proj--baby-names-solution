export type BabyNameId = number;

export type Sex = "m" | "f"

export interface BabyName {
    name: string;
    sex: Sex;
    id: BabyNameId;
}

export function sortNames(
    originalNames: BabyName[]
): BabyName[] {
    return [...originalNames].sort((a, b) => (a.name < b.name ? -1 : 1));
}
