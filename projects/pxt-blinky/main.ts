/**
 * Custom blocks to Blink the world
 */
//% weight=100 color=#0f33fb icon=""
namespace blinky {
    /**
     * Blink upper left led
     * 
     */    
    //% block
    export function blinkCustom(): void {
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