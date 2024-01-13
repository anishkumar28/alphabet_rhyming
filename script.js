function speak(letter){
    var audio = document.getElementById("audio")

    if(letter == "a") audio.src="sound/apple.mp3";
    else if(letter == "b") audio.src="sound/ball.mp3";
    else if(letter == "c") audio.src="sound/cat.mp3";
    else if(letter == "d") audio.src="sound/dog.mp3";
    else if(letter == "e") audio.src="sound/elephant.mp3";
    else if(letter == "f") audio.src="sound/frog.mp3";
    else if(letter == "g") audio.src="sound/giraffe.mp3";
    else if(letter == "h") audio.src="sound/hen.mp3";
    else if(letter == "i") audio.src="sound/icecream.mp3";
    else if(letter == "j") audio.src="sound/joker.mp3";
    else if(letter == "k") audio.src="sound/kites.mp3";
    else if(letter == "l") audio.src="sound/lion.mp3";
    else if(letter == "m") audio.src="sound/monkey.mp3";
        audio.play();
   
}

