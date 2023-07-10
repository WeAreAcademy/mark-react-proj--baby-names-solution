import { BabyName } from "../core/babyName";

export type NameClickHandler = (nameObj: BabyName) => void;

export const classForName = ({ sex }: { sex: string }) =>
    sex === "m" ? "male" : "female";

export interface BabyNameViewProps {
    babyName: BabyName;
    clickHandler: NameClickHandler;
}

export function BabyNameView({
    babyName,
    clickHandler,
}: BabyNameViewProps): JSX.Element {
    return (
        <li
            className={"name " + classForName(babyName)}
            onClick={(e) => clickHandler(babyName)}
        >
            {babyName.name}
        </li>
    );
}
