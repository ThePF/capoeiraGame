let startBtn = document.getElementById('startPauseBtn');
startBtn.addEventListener('click', evt => {
  startGame();
});

let points = 0;
let health = 3;

function reduceHealth() {
  if (
    (oppMove.style.backgroundImage ==
      `url("/picsMovements/Kicks/K-Opponent/Meia_Lua_de_frente-O.png")` &&
      state.kick1 === true) ||
    state.kick2 === true ||
    state.kick3 === true ||
    state.kick4 === true ||
    state.kick5 === true ||
    state.kick6 === true ||
    state.acrobatics1 === true ||
    state.acrobatics3 === true
  ) {
    health--;
    let newHealth = document.getElementById('healthScore');
    newHealth.innerHTML = `Health = ${health}`;
  }
  if (
    (oppMove.style.backgroundImage ==
      `url("/picsMovements/Kicks/K-Opponent/Meia_Lua_de_compasso-O.png")` &&
      state.kick1 === true) ||
    state.kick2 === true ||
    state.kick3 === true ||
    state.kick4 === true ||
    state.kick5 === true ||
    state.kick6 === true ||
    state.acrobatics1 === true ||
    state.acrobatics3 === true
  ) {
    health--;
    let newHealth = document.getElementById('healthScore');
    newHealth.innerHTML = `Health = ${health}`;
  }
}

function increasePoints() {
  if (
    (oppMove.style.backgroundImage ==
      `url("/picsMovements/Kicks/K-Opponent/Meia_Lua_de_frente-O.png")` &&
      state.defense1 === true) ||
    state.defense2 === true ||
    state.defense3 === true ||
    state.defense4 === true ||
    state.defense5 === true ||
    state.acrobatics3 === true
  ) {
    points++;
    console.log(points);
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
  }
}
