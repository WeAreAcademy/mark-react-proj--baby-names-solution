export type BabyNameId = number;
export interface NameInfo {
    name: string;
    sex: string;
    id: BabyNameId;
}

export function sortNames(
    originalNames: NameInfo[]
): NameInfo[] {
    return [...originalNames].sort((a, b) => (a.name < b.name ? -1 : 1));
}
