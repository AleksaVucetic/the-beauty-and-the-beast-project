/* _function 'addEventListener()' calls the method for the target object, which in this case is 'document.querrySelector("button")' or the first button; */
/* _this function takes 2 parameters!; */

/* _this 'for' loop goes through all the classes with 'class' '.drum' and adds event listeners to them (all HTML elements with '.drum' 'class'); */

/* ---------- Detecting Button Press ---------- */

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() {

        /* _'this' lets us know which event listener (of which HTML element) has been trigered; */
        /* _console.log(this.innerHTML); */

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

}

/* ---------- Detecting Keyboard Press ---------- */

document.addEventListener("keypress", function(event) {
    
    makeSound(event.key);

    buttonAnimation(event.key);

})

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:
            console.log(innerHTML)
            break;
    }

}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}