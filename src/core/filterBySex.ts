import { BabyName, Sex } from "./babyName";

export type SexFilter = Sex | "a";

export function filterBySex(
    names: BabyName[],
    selectedSex: SexFilter
): BabyName[] {
    return names.filter(
        (o) => selectedSex === "a" || selectedSex === o.sex
    );
}
