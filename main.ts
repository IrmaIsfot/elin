input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        RingbitCar.running_distance(RingbitCar.Direction_run.forward, 60)
        RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 98)
    }
    RingbitCar.running_distance(RingbitCar.Direction_run.forward, 60)
})
input.onButtonPressed(Button.B, function () {
    music.ringTone(262)
    basic.pause(1000)
    music.stopAllSounds()
    RingbitCar.running_distance(RingbitCar.Direction_run.forward, 10)
    for (let index = 0; index < 2; index++) {
        range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(1000)
        range2.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(1000)
        range2.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(1000)
        range2.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(1000)
    }
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 180)
    RingbitCar.running_distance(RingbitCar.Direction_run.forward, 10)
    basic.showString("Bye")
})
let range2: neopixel.Strip = null
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.showString("Hello!")
let strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
let range = strip.range(0, 1)
range2 = strip.range(1, 1)
