import { NameInfo } from "../core/nameInfo";
import { BabyName } from "./BabyName";
import { NameClickHandler } from "./BabyNamesApp";

interface IMainListProps {
    names: NameInfo[];
    clickHandler: NameClickHandler;
}
export function MainList({ names, clickHandler }: IMainListProps) {
    return (
        <div>
            <ul>
                {names.map((nameObj) => (
                    <BabyName
                        key={nameObj.id}
                        clickHandler={clickHandler}
                        nameObj={nameObj}
                    />
                ))}
            </ul>
        </div>
    );
}
