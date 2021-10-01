const userClickedPattern = [];

$(".btn").click(function () {
  // alert("I've been clicked!");
  const userChosenColour = this.id;

  userClickedPattern.push(userChosenColour);

  console.log(userClickedPattern);

  playSound(userChosenColour);
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
}

function playSound(name) {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).click(function () {
    $("#" + currentColor).addClass("pressed");
    setTimeout(() => {}, timeout);
  });
}
