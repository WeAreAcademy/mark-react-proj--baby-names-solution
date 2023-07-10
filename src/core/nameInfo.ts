export type BabyNameId = number;

export type Sex = "m" | "f"

export interface NameInfo {
    name: string;
    sex: Sex;
    id: BabyNameId;
}

export function sortNames(
    originalNames: NameInfo[]
): NameInfo[] {
    return [...originalNames].sort((a, b) => (a.name < b.name ? -1 : 1));
}
