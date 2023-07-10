import { BabyName } from "../core/babyName";
import { BabyNameView, NameClickHandler } from "./BabyNameView";

interface MainListProps {
    names: BabyName[];
    clickHandler: NameClickHandler;
}
export function MainList({ names, clickHandler }: MainListProps) {
    return (
        <div>
            <ul>
                {names.map((name) => (
                    <BabyNameView
                        key={name.id}
                        babyName={name}
                        clickHandler={clickHandler}
                    />
                ))}
            </ul>
        </div>
    );
}
