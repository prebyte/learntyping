var gameProgressCounter = 1;
var previousAlphabet;
var secCount = 300;
var  totalCharacter= 0;
var totalWordCount = $(".wordCountCenter");
var typingSpeed = $(".tSpeed");
var input = document.getElementsByClassName("typeWord")[0];


function raiseWordCount() {
    totalCharacter++;
    console.log("rightWord=",totalCharacter);
    totalWordCount.text("Total Character : "+ totalCharacter);
    typingSpeed.text("Typing Speed :" +(totalCharacter / 300).toFixed(2) + " character/ second");
    runGame();
}

function timeCount() {
    secCount--;
    console.log("secCount=",secCount);
    $(".timer").text(" Remaining Time : "+ secCount + " second");

    if (secCount === 0) {
        clearInterval(timeCountHandler);

        $(".currentAlphabet").text("");
        $(".gameOver").removeClass("hidden");
        $(".gameOver .gameOverIndicator").text("Game Over!");

        $(".gameOver .scoreIndicator").text("Your typing Speed :" +
            (totalCharacter / 300).toFixed(2) + " character/ second");
        document.removeEventListener("keyup",checkKeyPress);
        secCount = 300;
        console.log("secCount",secCount);
        document.addEventListener("keyup",resetGame);

    }
}

function runGame() {
    console.log(gameProgressCounter);
    if (previousAlphabet) {
        $(".currentAlphabet").removeClass("showRed");
    }
    var x = Math.floor(Math.random() * 20);
    var str =  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";


    y = str.charAt(x);
    console.log("y=",y);
    $(".currentAlphabet").text(y);

    input.value = "";

    gameProgressCounter++;
    console.log(gameProgressCounter);

}


function checkKeyPress(event) {
    console.log(event.keyCode);
    var k = event.keyCode;
    console.log("k=", k)
    if (k === 32) {
        console.log("pressed the enter key");
        checkWord();
    }
}
function checkWord() {
    console.log("input=",input.value+'a');
    if (input.value === y+" ") {
        raiseWordCount();
        console.log("in if condition");
    }
    else {
        $(".currentAlphabet").addClass("showRed");
        previousAlphabet = y ;
    }
}

function resetGame() {
    if (event.keyCode === 13) {
        gameProgressCounter = 1;
        $(".gameOver").addClass("hidden");

        typingSpeed.text("");
        totalCharacter = 0;
        totalWordCount.text("");


        loadGame();
        document.removeEventListener("keyup", resetGame);
    }
}




function loadGame(){
    console.log("in the readyGame");
    document.removeEventListener("keyup",myEvent);

    $(".stgame").addClass("hidden");
    input.focus();


    document.addEventListener("keyup",checkKeyPress);

    timeCount();
    timeCountHandler = setInterval(timeCount, 1000);
    runGame();
    console.log("enter");
}
function myEvent() {
    if (event.keyCode === 13) {
        console.log("pressed key is Enter");
        loadGame();
    }
}
document.addEventListener("keyup",myEvent);
