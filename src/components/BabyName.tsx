import { NameInfo } from "../core/nameInfo";

export type NameClickHandler = (nameObj: NameInfo) => void;

export const classForName = ({ sex }: { sex: string }) =>
    sex === "m" ? "male" : "female";

export interface IBabyNameProps {
    nameInfo: NameInfo;
    clickHandler: NameClickHandler;
}

export function BabyName({
    nameInfo: nameObj,
    clickHandler,
}: IBabyNameProps): JSX.Element {
    return (
        <li
            className={"name " + classForName(nameObj)}
            onClick={(e) => clickHandler(nameObj)}
        >
            {nameObj.name}
        </li>
    );
}
