let startBtn = document.getElementById('startPauseBtn');
startBtn.addEventListener('click', evt => {
  startGame();
});

let points = 0;
let health = 3;

var chosenMove = document.querySelector('.opponent');

/*Points functions*/

function score() {
  if (health === 0) return;
  if (
    chosenMove.style.backgroundImage ==
    `url("https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Kicks/kopponent/meialuadefrenteo.png")`
  ) {
    if (
      state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics3 === true
    ) {
      points++;
      let newPoints = document.getElementById('pointsScore');
      newPoints.innerHTML = `Score = ${points}`;
    } else {
      --health;
      let newHealth = document.getElementById('healthScore');
      newHealth.innerHTML = `Health = ${health}`;
    }
  }

  if (
    chosenMove.style.backgroundImage ==
    `url("https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Kicks/kopponent/meialuadecompassoo.png")`
  ) {
    if (
      state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics3 === true
    ) {
      points++;
      let newPoints = document.getElementById('pointsScore');
      newPoints.innerHTML = `Score = ${points}`;
    } else {
      health -= 1;
      let newHealth = document.getElementById('healthScore');
      newHealth.innerHTML = `Health = ${health}`;
    }
  }

  if (
    chosenMove.style.backgroundImage ==
    `url("https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Kicks/kopponent/martelo2o.png")`
  ) {
    if (
      state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics3 === true
    ) {
      points++;

      let newPoints = document.getElementById('pointsScore');
      newPoints.innerHTML = `Score = ${points}`;
    } else {
      --health;
      let newHealth = document.getElementById('healthScore');
      newHealth.innerHTML = `Health = ${health}`;
    }
  }

  if (
    chosenMove.style.backgroundImage ==
    `url("https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Kicks/kopponent/macacoo.png")`
  ) {
    if (
      state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics3 === true
    ) {
      points++;
      let newPoints = document.getElementById('pointsScore');
      newPoints.innerHTML = `Score = ${points}`;
    } else {
      --health;
      let newHealth = document.getElementById('healthScore');
      newHealth.innerHTML = `Health = ${health}`;
    }
  }

  if (
    chosenMove.style.backgroundImage ==
    `url("https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Kicks/kopponent/cartwheelkicko.png")`
  ) {
    if (
      state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics3 === true
    ) {
      points++;
      let newPoints = document.getElementById('pointsScore');
      newPoints.innerHTML = `Score = ${points}`;
    } else {
      --health;
      let newHealth = document.getElementById('healthScore');
      newHealth.innerHTML = `Health = ${health}`;
    }
  }

  if (
    chosenMove.style.backgroundImage ==
    `url("https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Defense/dopponent/rasterao.png")`
  ) {
    if (
      state.kick1 === true ||
      state.kick2 === true ||
      state.kick3 === true ||
      state.kick4 === true ||
      state.kick5 === true ||
      state.kick6 === true ||
      state.acrobatics1 === true ||
      state.acrobatics2 === true ||
      state.acrobatics3 === true
    ) {
      points++;
      let newPoints = document.getElementById('pointsScore');
      newPoints.innerHTML = `Score = ${points}`;
    } else {
      --health;
      let newHealth = document.getElementById('healthScore');
      newHealth.innerHTML = `Health = ${health}`;
    }
  }

  if (
    chosenMove.style.backgroundImage ==
    `url("https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Defense/dopponent/quedadequatroo.png")`
  ) {
    if (
      state.kick1 === true ||
      state.kick2 === true ||
      state.kick3 === true ||
      state.kick4 === true ||
      state.kick5 === true ||
      state.kick6 === true ||
      state.acrobatics1 === true ||
      state.acrobatics2 === true
    ) {
      points++;
      let newPoints = document.getElementById('pointsScore');
      newPoints.innerHTML = `Score = ${points}`;
    } else {
      --health;
      let newHealth = document.getElementById('healthScore');
      newHealth.innerHTML = `Health = ${health}`;
    }
  }

  if (
    chosenMove.style.backgroundImage ==
    `url("https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Defense/dopponent/negativao.png")`
  ) {
    if (
      state.kick1 === true ||
      state.kick2 === true ||
      state.kick3 === true ||
      state.kick4 === true ||
      state.kick5 === true ||
      state.kick6 === true ||
      state.acrobatics1 === true ||
      state.acrobatics2 === true ||
      state.acrobatics3 === true
    ) {
      points++;
      let newPoints = document.getElementById('pointsScore');
      newPoints.innerHTML = `Score = ${points}`;
    } else {
      --health;
      let newHealth = document.getElementById('healthScore');
      newHealth.innerHTML = `Health = ${health}`;
    }
  }

  if (
    chosenMove.style.backgroundImage ==
    `url("https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Defense/dopponent/esquivadeladoo.png")`
  ) {
    if (
      state.kick1 === true ||
      state.kick2 === true ||
      state.kick3 === true ||
      state.kick4 === true ||
      state.kick5 === true ||
      state.kick6 === true ||
      state.acrobatics1 === true ||
      state.acrobatics2 === true
    ) {
      points++;
      let newPoints = document.getElementById('pointsScore');
      newPoints.innerHTML = `Score = ${points}`;
    } else {
      --health;
      let newHealth = document.getElementById('healthScore');
      newHealth.innerHTML = `Health = ${health}`;
    }
  }

  if (
    chosenMove.style.backgroundImage ==
    `url("https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Defense/dopponent/cocorinhao.png")`
  ) {
    if (state.kick1 === true || state.kick3 === true || state.kick5 === true) {
      points++;
      let newPoints = document.getElementById('pointsScore');
      newPoints.innerHTML = `Score = ${points}`;
    } else {
      --health;
      let newHealth = document.getElementById('healthScore');
      newHealth.innerHTML = `Health = ${health}`;
    }
  }

  if (
    chosenMove.style.backgroundImage ==
    `url("https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Acrobatics/aopponent/macacosideo.png")`
  ) {
    if (
      state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics1 === true
    ) {
      points++;
      let newPoints = document.getElementById('pointsScore');
      newPoints.innerHTML = `Score = ${points}`;
    } else {
      --health;
      let newHealth = document.getElementById('healthScore');
      newHealth.innerHTML = `Health = ${health}`;
    }
  }

  if (
    chosenMove.style.backgroundImage ==
    `url("https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Acrobatics/aopponent/cartwheelo.png")`
  ) {
    if (
      state.kick1 === true ||
      state.kick2 === true ||
      state.kick3 === true ||
      state.kick4 === true ||
      state.kick5 === true ||
      state.kick6 === true ||
      state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics1 === true ||
      state.acrobatics2 === true
    ) {
      points++;
      let newPoints = document.getElementById('pointsScore');
      newPoints.innerHTML = `Score = ${points}`;
    } else {
      --health;
      let newHealth = document.getElementById('healthScore');
      newHealth.innerHTML = `Health = ${health}`;
    }
  }

  if (
    chosenMove.style.backgroundImage ==
    `url("https://raw.githubusercontent.com/ThePF/capoeiraGame/master/picsMovements/Acrobatics/aopponent/cartwheelstraighto.png")`
  ) {
    if (
      state.kick1 === true ||
      state.kick3 === true ||
      state.kick5 === true ||
      state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics3 === true
    ) {
      points++;
      let newPoints = document.getElementById('pointsScore');
      newPoints.innerHTML = `Score = ${points}`;
    } else {
      --health;
      let newHealth = document.getElementById('healthScore');
      newHealth.innerHTML = `Health = ${health}`;
    }
  }
  if (health == 0) {
    console.log('health is 0');
    gameOver = true;
    console.log(intervalId);
    clearInterval(intervalId);
    let gameOverDiv = document.createElement('div');
    document.querySelector('body').appendChild(gameOverDiv);
    gameOverDiv.innerText = 'GAME OVER';
    gameOverDiv.classList.add('gameover');
  }
}
