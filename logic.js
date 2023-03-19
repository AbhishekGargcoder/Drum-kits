// debugger;
let drum1 = document.querySelectorAll(".drum");
// detect button press
let buttoninnerHTML;
for (let i = 0; i < drum1.length; i++) {
    console.log("\n" + i);
    drum1[i].addEventListener("click", function () {
        console.log(this);
        buttoninnerHTML = this.innerHTML;
        makesound(buttoninnerHTML);
    })
}
// detect key press
addEventListener("keypress", function (key) {
    console.log("key " + key);
    console.log("key.key " + key.key);
    buttoninnerHTML = key.key;
    makesound();
})
// this method shared among above 2 event listeners
const makesound = () => {
    switch (buttoninnerHTML) {
        case 'w':
            // debugger;
            var audio = new Audio("style/tom1.mp3");
            audio.play();
            animation(0,"w");
            break;
        case 'a':
            var audio = new Audio("style/tom2.mp3");
            audio.play();
            animation(1,"a");
            break;
        case 's':
            var audio = new Audio("style/tom3.mp3");
            audio.play();
            animation(2,"s");
            break;
        case 'd':
            var audio = new Audio("style/tom4.mp3");
            audio.play();
            animation(3,"d");
            break;
        case 'j':
            var audio = new Audio("style/snare.mp3");
            audio.play();
            animation(4,"j");
            break;
        case 'k':
            var audio = new Audio("style/crash.mp3");
            audio.play();
            animation(5,"k");
            break;
        case 'l':
            var audio = new Audio("style/kick-bass.mp3");
            audio.play();
            animation(6,"l");
            break;
        default:
            console.log(buttoninnerHTML);
    }
}
function animation(i, classname) {
    drum1[i].classList.remove(`${classname}`);  // first remove class
    let timer_id = setTimeout(() => {
    drum1[i].classList.add(`${classname}`);  // then add class after 1 ms
    console.log(i);
    }, 1);
}
