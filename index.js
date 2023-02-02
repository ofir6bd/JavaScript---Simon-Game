
function makeSound(buttonColor){
    switch (buttonColor) {
        case "green":
            var audio = new Audio('./sounds/green.mp3');
            audio.play();
            break;
        case "red":
            var audio = new Audio('./sounds/red.mp3');
            audio.play();
            break;
        case "yellow":
            var audio = new Audio('./sounds/yellow.mp3');
            audio.play();
            break;
        case "blue":
            var audio = new Audio('./sounds/blue.mp3');
            audio.play();
            break;
        default:
            console.log(buttonColor);
            break;
    }
};

// listener on the buttons with jQuery 
$(".btn").on("click", (event)=>{     
    makeSound(event.target.id);
    lstActual.push(event.target.id);
    // console.log(`**********lstActual is ${lstActual}`);
    // console.log(`**********lstRequired is ${lstRequered}`);
    comapreReqVsAct();

});

function gameOver(){
    $("body").addClass('red');
    var audio = new Audio('./sounds/wrong.mp3');
    audio.play();
    $('h1').text('Game Over,Press Any Key to Restart');
    window.setTimeout(function (){          //wait N sec before applying the code inside
    $("body").removeClass('red'); }, 300);
    // console.log(`**********lstActual is ${lstActual}`);
    // console.log(`**********lstRequired is ${lstRequered}`);
};

function comapreReqVsAct(){
    for (let i = 0; i < lstActual.length; i++){
        // console.log(`---------------lstActual ${i} is ${lstActual},lstRequered ${i} is ${lstRequered}`);
            if (lstActual[i] != lstRequered[i]){
                gameOver();
                return
            };
        };

    if(lstActual.length===lstRequered.length){
        n+=1;
        $('h1').text('Level ' + n );
        markRandumButton();
    };
};
// function to retrive a random color
function getRandomColor(){
    lstActual = [];
    var randNum = Math.floor(Math.random()*4);
    var colorArr = ['green','red','yellow','blue'];
    return colorArr[randNum];
};

function markRandumButton(){
    var firstRandColor = getRandomColor();
    $("." + firstRandColor).addClass("pressed");
    window.setTimeout(function (){          //wait N sec before applying the code inside
        $("." + firstRandColor).removeClass("pressed"); }, 300);
    lstRequered.push(firstRandColor);
    // console.log(`**********lstRequered is ${lstRequered}`);
};

$(document).keypress(function(event){
    if(event.originalEvent.key==='a' & lstRequered.length == 0){
        n=1;
        $('h1').text('Level ' + n );
        lstRequered = [];
        lstActual = [];
        markRandumButton();
    };
    // console.log(event.target.id);
});
n = 0;
lstRequered = [];
lstActual = [];
//the code starts here
var randomColor = getRandomColor();
console.log(randomColor)

