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
    export function blinkIt(): void {
         if (led.point(0, 0)) {
            led.unplot(0, 0);
        } else {
            led.plot(0, 0);
        }
        basic.pause(200);
    }
}