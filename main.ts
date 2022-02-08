let b = 0
let y = 0
let x = 0
led.enable(true)
pins.analogWritePin(AnalogPin.P0, 1)
basic.forever(function () {
    x = pins.analogReadPin(AnalogPin.P1)
    y = pins.analogReadPin(AnalogPin.P0)
    b = pins.digitalReadPin(DigitalPin.P2)
    serial.writeValue("x", x)
    serial.writeValue("y", y)
    serial.writeValue("b", b)
    if (x == 1) {
        basic.showArrow(ArrowNames.South)
    }
    if (x > 800) {
        basic.showArrow(ArrowNames.North)
    }
    if (b == 1) {
        basic.showIcon(IconNames.Diamond)
    }
    if (y == 1) {
        basic.showArrow(ArrowNames.East)
    }
    if (y > 800) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
