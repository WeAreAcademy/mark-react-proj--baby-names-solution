import { useSound } from "use-sound";
import soundBubblePops from "../sounds/bubblePops.mp3";

export function useRandomPopSounds() {
    //from a single file, with time offsets
    const [playSoundPops] = useSound(soundBubblePops, {
        sprite: {
            //start time and duration of each sound in milliseconds
            //I found I had to shift these back 50ms from truth
            //(Perhaps there's a fade-in in place)
            p1: [50, 100],
            p2: [350, 100],
            p3: [741, 100],
            p4: [1050, 100],
            p5: [1400, 100],
            p6: [1650, 100],
            p7: [1875, 100],
        },
    });

    function pick<T>(arr: T[]): T {
        return arr[Math.floor(arr.length * Math.random())];
    }

    function playRandomPop() {
        return playSoundPops({
            id: pick(["p1", "p2", "p3", "p4", "p5", "p6", "p7"]),
        });
    }
    return playRandomPop;
}
