const startButton = document.querySelector("#startButton");
const backButton = document.querySelector("#backButton");
const startScreen = document.querySelector("#startScreen");
const gameScreen = document.querySelector("#gameScreen");

function showScreen(screenToShow, screenToHide) {
  screenToHide.hidden = true;
  screenToShow.hidden = false;
  screenToShow.querySelector("h1, h2")?.focus?.({ preventScroll: true });
}

startButton.addEventListener("click", () => {
  showScreen(gameScreen, startScreen);
  document.title = "Time Dungeon — Game";
});

backButton.addEventListener("click", () => {
  showScreen(startScreen, gameScreen);
  document.title = "Time Dungeon";
  startButton.focus();
});
