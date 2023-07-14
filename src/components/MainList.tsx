import { BabyName } from "../core/babyName";
import { BabyNameView, NameClickHandler } from "./BabyNameView";

interface BabyNameListProps {
    names: BabyName[];
    clickHandler: NameClickHandler;
}
export function BabyNameList({ names, clickHandler }: BabyNameListProps) {
    return (
        <ul>
            {names.map((name) => (
                <BabyNameView
                    key={name.id}
                    babyName={name}
                    clickHandler={clickHandler}
                />
            ))}
        </ul>
    );
}
