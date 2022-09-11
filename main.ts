input.onPinPressed(TouchPin.P0, function () {
    if (演奏中 == 0) {
        タッチ = 1
    }
})
let 演奏中 = 0
let タッチ = 0
タッチ = 0
演奏中 = 0
basic.forever(function () {
    if (タッチ == 1) {
        演奏中 = 1
        タッチ = 0
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
        basic.pause(18000)
        演奏中 = 0
    }
})
