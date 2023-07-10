import { NameInfo } from "../core/nameInfo";
import { BabyName, NameClickHandler } from "./BabyName";

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
                        nameInfo={nameObj}
                    />
                ))}
            </ul>
        </div>
    );
}
