input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    radio.sendString("Start!")
    for (let index = 0; index <= 10; index++) {
        basic.showNumber(index)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    soundExpression.sad.play()
})
music.setBuiltInSpeakerEnabled(true)
basic.showString("Boom!")
soundExpression.hello.play()
