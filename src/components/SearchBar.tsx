export interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (st: string) => void;
    selectMale: () => void;
    selectFemale: () => void;
    selectAllSexes: () => void;
    selectedSex: string;
}

export function SearchBar({
    searchTerm,
    setSearchTerm,
    selectMale,
    selectFemale,
    selectAllSexes,
    selectedSex,
}: SearchBarProps): JSX.Element {
    return (
        <>
            <div className="controlBar">
                <input
                    placeholder="Search for a name..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
                <span className="sexButtons">
                    <div
                        title="show all names"
                        className={`chooser anyChooser ${
                            selectedSex === "a" ? "selected" : ""
                        }`}
                        onClick={selectAllSexes}
                    ></div>
                    <div
                        title="show only girls' names"
                        className={`chooser femaleChooser ${
                            selectedSex === "f" ? "selected" : ""
                        }`}
                        onClick={selectFemale}
                    ></div>
                    <div
                        title="show only boys' names"
                        className={`chooser maleChooser ${
                            selectedSex === "m" ? "selected" : ""
                        }`}
                        onClick={selectMale}
                    ></div>
                </span>
            </div>
        </>
    );
}
