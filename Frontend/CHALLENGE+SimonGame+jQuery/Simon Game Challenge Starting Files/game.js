var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor;

var gamePattern = [];
var userClickedPattern = [];

var inGame = false;
var level = 0;

$(document).on("keydown", function () {
  if (!inGame) {
    $("#level-title").text("Level " + level);

    nextSequence();
    inGame = true;
  }
});

$(".btn").on("click", function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("Wrong");
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");

    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;

  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
}

function playSound(inputColor) {
  switch (inputColor) {
    case "red":
      var redAudio = new Audio("./sounds/red.mp3");
      redAudio.play();
      break;

    case "blue":
      var blueAudio = new Audio("./sounds/blue.mp3");
      blueAudio.play();
      break;

    case "green":
      var greenAudio = new Audio("./sounds/green.mp3");
      greenAudio.play();
      break;

    case "yellow":
      var yellowAudio = new Audio("./sounds/yellow.mp3");
      yellowAudio.play();
      break;

    case "wrong":
      var wrongAudio = new Audio("./sounds/wrong.mp3");
      wrongAudio.play();
      break;
  }
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function startOver() {
  gamePattern = [];
  level = 0;
  inGame = false;
}
