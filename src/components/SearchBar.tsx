export interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (st: string) => void;
    selectedSex: string;
    selectMale: () => void;
    selectFemale: () => void;
    selectAllSexes: () => void;
}

export function SearchBar({
    searchTerm,
    setSearchTerm,
    selectedSex,
    selectMale,
    selectFemale,
    selectAllSexes,
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
