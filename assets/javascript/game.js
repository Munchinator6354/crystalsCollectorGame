
// Starting global variables
// randomTargetNumber variable must be between 19-120
// Generate random number for each crystal from 1-12
var min = 19;
var max = 120;
var randomTargetNumber ;
var startingScore = 0;
var wins = 0;
var losses = 0;
var randomEmeraldNumber ;
var randomRubyNumber ;
var randomSapphireNumber ;
var randomTopazNumber ;

function startGame() {
    randomTargetNumber = getRandom(19,120);
    startingScore = 0;
    randomEmeraldNumber = getRandom(1,12);
    randomRubyNumber = getRandom(1,12);
    randomSapphireNumber = getRandom(1,12);
    randomTopazNumber = getRandom(1,12);
    $("#randomTargetNumber").text("Random Start Number: " + randomTargetNumber);
    $("#currentScore").text("Current Score: " + startingScore);
}

function getRandom(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addValue(crystal) {
    if (crystal === "emerald") {
        startingScore += randomEmeraldNumber;
    }
    else if (crystal === "ruby") {
        startingScore += randomRubyNumber;
    }
    else if (crystal === "sapphire") {
        startingScore += randomSapphireNumber;
    }
    else if (crystal === "topaz") {
        startingScore += randomTopazNumber;
    }
    $("#currentScore").text("Current Score: " + startingScore);
    checkIfWon();
}

function checkIfWon() {
    if (startingScore > randomTargetNumber) {
        losses++;
        $("#losses").text("Losses: " + losses);
        alert("Sorry, You Lost : (");
        startGame();
    }

    else if (startingScore === randomTargetNumber) {
        wins++;
        $("#wins").text("Wins: " + wins);
        alert("You Won!");
        startGame();
    } 
}

startGame();

$("#emeraldButton").click(function () {
    addValue("emerald");
});

$("#rubyButton").click(function () {
    addValue("ruby");
});

$("#sapphireButton").click(function () {
    addValue("sapphire");
});

$("#topazButton").click(function () {
    addValue("topaz");
});