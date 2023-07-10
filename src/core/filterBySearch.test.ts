import { BabyName } from "./babyName";
import { filterBySearch } from "./filterBySearch";

/** helper function to make a list of BabyName objects for a list of raw names */
function makeNamesFor(ns: string[]): BabyName[] {
    return ns.map((n, ix) => ({
        id: ix,
        name: n,
        sex: Math.random() < 0.5 ? "m" : "f",
    }));
}

test("filter by search", () => {
    const exampleNames: BabyName[] = makeNamesFor([
        "Cezar",
        "Zamir",
        "Mostafa",
        "Yasin",
        "Zaki",
        "Ammar",
        "Kwanza",
    ]);
    expect(filterBySearch(exampleNames, "za").map((bn) => bn.name)).toEqual([
        "Cezar",
        "Zamir",
        "Zaki",
        "Kwanza",
    ]);

    //searching for "" gets all hits
    expect(filterBySearch(exampleNames, "").map((bn) => bn.name)).toEqual(
        exampleNames.map((bn) => bn.name)
    );
});
