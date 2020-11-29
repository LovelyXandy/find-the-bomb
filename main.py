

def on_button_pressed_a():
    music.start_melody(music.built_in_melody(Melodies.DADADADUM),
        MelodyOptions.ONCE)
    radio.send_string("Start!")
    for value in range(60,0,-1):
        pass
    for value  in range(1,10):
        pass   
input.on_button_pressed(Button.A, on_button_pressed_a)

music.set_built_in_speaker_enabled(True)
basic.show_string("Boom!")
soundExpression.hello.play()