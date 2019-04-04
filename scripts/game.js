
// let playBtn = document.getElementById('playButton');
// playBtn.addEventListener('click', evt => {
//   document.getElementsByClassName('startPage').style.display = "none"
// });






let startBtn = document.getElementById('startPauseBtn');
startBtn.addEventListener('click', evt => {
  startGame();
});

let points = 0;
let health = 3;

var chosenMove = document.querySelector('.opponent');



// function reduceHealth() {
//   if (
//     chosenMove.style.backgroundImage ==
//       `url("/picsMovements/Kicks/K-Opponent/Meia_Lua_de_frente-O.png")` ||
//     chosenMove.style.backgroundImage ==
//       `url("/picsMovements/Kicks/K-Opponent/Meia_Lua_de_compasso-O.png")` ||
//     chosenMove.style.backgroundImage == `url("/picsMovements/Kicks/K-Opponent/Martelo2-O.png")` ||
//     chosenMove.style.backgroundImage == `url("/picsMovements/Kicks/K-Opponent/Macaco-O.png")` ||
//     chosenMove.style.backgroundImage == `url("/picsMovements/Kicks/K-Opponent/Cartwheel kick-O.png"` &&
//     state.kick1 === true ||
//     state.kick2 === true ||
//     state.kick3 === true ||
//     state.kick4 === true ||
//     state.kick5 === true ||
//     state.kick6 === true ||
//     state.acrobatics1 === true ||
//     state.acrobatics3 === true
//   ) {
//     --health;
//     let newHealth = document.getElementById('healthScore');
//     newHealth.innerHTML = `Health = ${health}`;
//     console.log('health IF 1: ', health);
//   }

//   if (
//     chosenMove.style.backgroundImage == `url("/picsMovements/Defense/D-Opponent/Rastera-O.png")` ||
//     chosenMove.style.backgroundImage == `url("/picsMovements/Defense/D-Opponent/Negativa-O.png")` &&
//     state.defense1 === true ||
//     state.defense2 === true ||
//     state.defense3 === true ||
//     state.defense4 === true ||
//     state.defense5 === true
//   ) {
//     --health;
//     let newHealth = document.getElementById('healthScore');
//     newHealth.innerHTML = `Health = ${health}`;
//     console.log('health IF 2: ', health);
//   }
//   if (
//     chosenMove.style.backgroundImage ==
//       `url("/picsMovements/Defense/D-Opponent/Queda_de_quatro-O.png")` ||
//     chosenMove.style.backgroundImage ==
//       `url("/picsMovements/Defense/D-Opponent/Esquiva_de_lado-O.png")` &&
//     state.defense1 === true ||
//     state.defense2 === true ||
//     state.defense3 === true ||
//     state.defense4 === true ||
//     state.defense5 === true ||
//     state.acrobatics3 === true
//   ) {
//     --health;
//     let newHealth = document.getElementById('healthScore');
//     newHealth.innerHTML = `Health = ${health}`;
//     console.log('health IF 3: ', health);
//   }

//   if (
//     chosenMove.style.backgroundImage == `url("/picsMovements/Defense/D-Opponent/Cocorinha-O.png")` &&
//     state.defense1 === true  ||
//     state.defense2 === true ||
//     state.defense3 === true ||
//     state.defense4 === true ||
//     state.defense5 === true ||
//     state.acrobatics3 === true ||
//     state.acrobatics1 === true ||
//     state.acrobatics2 === true ||
//     state.kick2 === true ||
//     state.kick4 === true ||
//     state.kick6 === true
//   ) {
//     --health;
//     let newHealth = document.getElementById('healthScore');
//     newHealth.innerHTML = `Health = ${health}`;
//     console.log('health IF 4: ', health);
//   }
// }
/*Points functions*/

function score() {
  if(oppMove.style.backgroundImage == `url("/picsMovements/Kicks/K-Opponent/Meia_Lua_de_frente-O.png")`){
    if(state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics3 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`;
      }
  }
  
  if(oppMove.style.backgroundImage == `url("/picsMovements/Kicks/K-Opponent/Meia_Lua_de_compasso-O.png")`){
    if(state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics3 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        health -=1
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`
      }
  }
  
  if(oppMove.style.backgroundImage == `url("/picsMovements/Kicks/K-Opponent/Martelo2-O.png")`){
    if(state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics3 === true){
        points++;
    
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`
      }
  }
  
  if(oppMove.style.backgroundImage == `url("/picsMovements/Kicks/K-Opponent/Macaco-O.png")`){
    if(state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics3 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`
      }
  }
  
  if(oppMove.style.backgroundImage == `url("/picsMovements/Kicks/K-Opponent/Cartwheel kick-O.png")`){
    if(state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics3 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`
      }
  }
  
  if(oppMove.style.backgroundImage == `url("/picsMovements/Defense/D-Opponent/Rastera-O.png")`){
    if(state.kick1 === true ||
       state.kick2 === true ||
       state.kick3 === true ||
       state.kick4 === true ||
       state.kick5 === true ||
       state.kick6 === true ||
       state.acrobatics1 === true ||
       state.acrobatics2 === true ||
       state.acrobatics3 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`
      }
  }

  if(oppMove.style.backgroundImage == `url("/picsMovements/Defense/D-Opponent/Queda_de_quatro-O.png")`){
    if(state.kick1 === true ||
      state.kick2 === true ||
      state.kick3 === true ||
      state.kick4 === true ||
      state.kick5 === true ||
      state.kick6 === true ||
      state.acrobatics1 === true ||
      state.acrobatics2 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`
      }
  }

  if(oppMove.style.backgroundImage == `url("/picsMovements/Defense/D-Opponent/Negativa-O.png")`){
    if(state.kick1 === true ||
      state.kick2 === true ||
      state.kick3 === true ||
      state.kick4 === true ||
      state.kick5 === true ||
      state.kick6 === true ||
      state.acrobatics1 === true ||
      state.acrobatics2 === true ||
      state.acrobatics3 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`
      }
  }

  if(oppMove.style.backgroundImage == `url("/picsMovements/Defense/D-Opponent/Esquiva_de_lado-O.png")`){
    if(state.kick1 === true ||
      state.kick2 === true ||
      state.kick3 === true ||
      state.kick4 === true ||
      state.kick5 === true ||
      state.kick6 === true ||
      state.acrobatics1 === true ||
      state.acrobatics2 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`
      }
  }

  if(oppMove.style.backgroundImage == `url("/picsMovements/Defense/D-Opponent/Cocorinha-O.png")`){
    if(state.kick1 === true ||   
      state.kick3 === true || 
      state.kick5 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`
      }
  }

  if(oppMove.style.backgroundImage == `url("/picsMovements/Acrobatics/A-Opponent/Macaco_side-O.png")`){
    if(state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics1 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`;
      }
  }

  if(oppMove.style.backgroundImage == `url("/picsMovements/Acrobatics/A-Opponent/Cartwheel-O.png")`){
    if (state.kick1 === true ||
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
      state.acrobatics2 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`;
      }
  }

  if(oppMove.style.backgroundImage == `url("/picsMovements/Acrobatics/A-Opponent/Cartwheel-O.png")`){
    if (state.kick1 === true ||   
      state.kick3 === true ||    
      state.kick5 === true ||   
      state.defense1 === true ||
      state.defense1 === true ||
      state.defense2 === true ||
      state.defense3 === true ||
      state.defense4 === true ||
      state.defense5 === true ||
      state.acrobatics3 === true){
        points++;
    let newPoints = document.getElementById('pointsScore');
    newPoints.innerHTML = `Score = ${points}`;
      } else {
        --health
        let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`;
      }
  }
}
