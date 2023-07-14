import { SexFilter } from "../core/babyName";
import { useRandomPopSounds } from "../hooks/useRandomPopSounds";

export interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (st: string) => void;
    selectedSex: string;
    setSelectedSex: (sex: SexFilter) => void;
}

export function SearchBar({
    searchTerm,
    setSearchTerm,
    selectedSex,
    setSelectedSex,
}: SearchBarProps): JSX.Element {
    const playRandomPop = useRandomPopSounds();
    return (
        <>
            <div className="controlBar">
                <input
                    placeholder="Search for a name..."
                    onChange={(e) => {
                        playRandomPop();
                        setSearchTerm(e.target.value);
                    }}
                    value={searchTerm}
                />
                <span className="sexButtons">
                    <div
                        title="show all names"
                        className={`chooser anyChooser ${
                            selectedSex === "a" ? "selected" : ""
                        }`}
                        onClick={() => setSelectedSex("a")}
                    ></div>
                    <div
                        title="show only girls' names"
                        className={`chooser femaleChooser ${
                            selectedSex === "f" ? "selected" : ""
                        }`}
                        onClick={() => setSelectedSex("f")}
                    ></div>
                    <div
                        title="show only boys' names"
                        className={`chooser maleChooser ${
                            selectedSex === "m" ? "selected" : ""
                        }`}
                        onClick={() => setSelectedSex("m")}
                    ></div>
                </span>
            </div>
        </>
    );
}
