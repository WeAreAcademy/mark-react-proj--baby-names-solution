import { IBabyNameProps, classForName } from "./BabyNamesApp";

export function BabyName({
    nameObj,
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
