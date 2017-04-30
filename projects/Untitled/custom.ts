/**
 * Custom blocks to Blink the world
 */
//% weight=100 color=#553344 icon=""
namespace blinky {
    //% block
    export function blinkOne(): void {
        basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `);
        basic.pause(200);
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `);
    }
}

