
// Starting global variables

// randomTargetNumber variable must be between 19-120
var randomTargetNumber = Math.floor(Math.random() * 121);
var startingScore = 0;
var wins = 0;
var losses = 0;


// Select HTML elements by ID and add the associated starting variables
$("#randomTargetNumber").append(randomTargetNumber);
$("#currentScore").append(startingScore);
$("#wins").append(wins);
$("#losses").append(losses);


// Generate random number for each crystal from 1-12
var randomEmeraldNumber = Math.floor(Math.random() * 13);
var randomRubyNumber = Math.floor(Math.random() * 13);
var randomSapphireNumber = Math.floor(Math.random() * 13);
var randomTopazNumber = Math.floor(Math.random() * 13);









