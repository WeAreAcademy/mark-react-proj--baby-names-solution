import { BabyName } from "../core/babyName";
import { BabyNameView, NameClickHandler } from "./BabyName";

interface MainListProps {
    names: BabyName[];
    clickHandler: NameClickHandler;
}
export function MainList({ names, clickHandler }: MainListProps) {
    return (
        <div>
            <ul>
                {names.map((nameObj) => (
                    <BabyNameView
                        key={nameObj.id}
                        clickHandler={clickHandler}
                        babyName={nameObj}
                    />
                ))}
            </ul>
        </div>
    );
}
