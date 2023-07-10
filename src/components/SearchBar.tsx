export interface ISearchBarProps {
    searchTerm: string;
    setSearchTerm: (st: string) => void;
    selectMale: () => void;
    selectFemale: () => void;
    selectAllGenders: () => void;
    selectedGender: string;
}

export function SearchBar({
    searchTerm,
    setSearchTerm,
    selectMale,
    selectFemale,
    selectAllGenders,
    selectedGender,
}: ISearchBarProps): JSX.Element {
    return (
        <>
            <div className="controlBar">
                <input
                    placeholder="Search for a name..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
                <span className="genderButtons">
                    <div
                        title="show all names"
                        className={`chooser anyChooser ${
                            selectedGender === "a" ? "selected" : ""
                        }`}
                        onClick={selectAllGenders}
                    ></div>
                    <div
                        title="show only girls' names"
                        className={`chooser femaleChooser ${
                            selectedGender === "f" ? "selected" : ""
                        }`}
                        onClick={selectFemale}
                    ></div>
                    <div
                        title="show only boys' names"
                        className={`chooser maleChooser ${
                            selectedGender === "m" ? "selected" : ""
                        }`}
                        onClick={selectMale}
                    ></div>
                </span>
            </div>
        </>
    );
}
