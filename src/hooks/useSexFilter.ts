import { useState } from "react";
import useSound from "use-sound";
import { SexFilter } from "../core/babyName";
import soundLaugh1 from "../sounds/laugh1.mp3";
import soundLaugh2 from "../sounds/laugh2.mp3";
import soundLaugh3 from "../sounds/laugh3.mp3";
import soundLaugh4 from "../sounds/laugh4.mp3";
import soundLaugh5 from "../sounds/laugh5.mp3";
import { PlayFunction } from "use-sound/dist/types";

export function useSexFilter(defaultFilter: SexFilter) {
    const [selectedSex, setSelectedSex] = useState<SexFilter>(defaultFilter);

    const [playLaugh1] = useSound(soundLaugh1);
    const [playLaugh2] = useSound(soundLaugh2);
    const [playLaugh3] = useSound(soundLaugh3);
    const [playLaugh4] = useSound(soundLaugh4);
    const [playLaugh5] = useSound(soundLaugh5);

    function setSelectedAndPlaySound(s: SexFilter): void {
        getSoundFunctionForFilter(s)();
        setSelectedSex(s);
    }

    function getSoundFunctionForFilter(s: SexFilter): PlayFunction {
        switch (s) {
            case "a":
                return playLaugh5;
            case "m":
                return pick([playLaugh1, playLaugh2]);
            case "f":
                return pick([playLaugh3, playLaugh4]);
            default: {
                throw new UnreachableCodeError(
                    s,
                    "Unexpected value for sexfilter " + s
                );
            }
        }
    }

    function pick<T>(arr: T[]): T {
        return arr[Math.floor(arr.length * Math.random())];
    }

    return { selectedSex, setSelectedSex: setSelectedAndPlaySound };
}

class UnreachableCodeError extends Error {
    constructor(myNever: never, message: string) {
        super(message);
    }
}
