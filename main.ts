input.onPinPressed(TouchPin.P0, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    count += 1
    basic.pause(100)
    basic.showNumber(count)
})
input.onButtonPressed(Button.A, function () {
    count = 0
    basic.showNumber(count)
})
let count = 0
count = 0
basic.showNumber(count)
basic.forever(function () {
    if (count > 3) {
        music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
        basic.pause(9000)
        control.reset()
    }
})
