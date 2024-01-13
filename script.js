function speak(letter){
    var audio = document.getElementById("audio")
    var speaker = document.getElementById("speaker")

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
    else if(letter == "n") audio.src="sound/nest.mp3";
    else if(letter == "o") audio.src="sound/orange.mp3";
    else if(letter == "p") audio.src="sound/pen.mp3";
    else if(letter == "q") audio.src="sound/queen.mp3";
    else if(letter == "r") audio.src="sound/rat.mp3";
    else if(letter == "s") audio.src="sound/sun.mp3";
    else if(letter == "t") audio.src="sound/tree.mp3";
    else if(letter == "u") audio.src="sound/umbrella.mp3";
    else if(letter == "v") audio.src="sound/voilin.mp3";
    else if(letter == "w") audio.src="sound/watch.mp3";
    else if(letter == "x") audio.src="sound/x-ray.mp3";
    else if(letter == "y") audio.src="sound/yak.mp3";
    else if(letter == "z") audio.src="sound/zebra.mp3";
    speaker.style.color = "black";
    audio.play();
    setTimeout(function(){
        speaker.style.color="#ddd"
    },700)
   
}

