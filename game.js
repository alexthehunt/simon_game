const userClickedPattern = [];
let level = 0;

$(".btn").click(function () {
  // alert("I've been clicked!");
  const userChosenColour = this.id;

  userClickedPattern.push(userChosenColour);

  console.log(userClickedPattern);

  playSound(userChosenColour);

  animatePress(userChosenColour);
});

function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const buttonColors = ["red", "blue", "green", "yellow"];
  const randomChosenColor = buttonColors[randomNumber];
  const gamePattern = [];


  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);

  document.querySelector("h1").textContent = `Level ${level}`
}

function playSound(name) {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed")
    }, 100)
  };

  function checkAnswer(currentLevel) {

  }


document.addEventListener("keydown", function() {
  if (level === 0) {
    nextSequedssnce();
    level++;
  } else {
    level++;
  }});