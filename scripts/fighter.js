let state = {
  kick1: false,
  kick2: false,
  kick3: false,
  kick4: false,
  kick5: false,
  kick6: false,
  defense1: false,
  defense2: false,
  defense3: false,
  defense4: false,
  defense5: false,
  acrobatics1: false,
  acrobatics2: false,
  acrobatics3: false
};

//Create classes for fighter//

// function renderEverything() {
//   // console.log('Hello2');
//   renderKick1();
//   renderKick2();
//   renderKick3();
//   renderKick4();
//   renderKick5();
//   renderKick6();
// }

document.addEventListener('keydown', evt => {
  Object.keys(state).forEach(v => (state[v] = false));
  switch (evt.code) {
    case 'KeyA':
      state.kick1 = !state.kick1;
      break;
    case 'KeyS':
      state.kick2 = !state.kick2;
      break;
    case 'KeyD':
      state.kick3 = !state.kick3;
      break;
    case 'KeyF':
      state.kick4 = !state.kick4;
      break;
    case 'KeyG':
      state.kick5 = !state.kick5;
      break;
    case 'KeyH':
      state.kick6 = !state.kick6;
      break;
    case 'KeyQ':
      state.defense1 = !state.defense1;
      break;
    case 'KeyW':
      state.defense2 = !state.defense2;
      break;
    case 'KeyE':
      state.defense3 = !state.defense3;
      break;
    case 'KeyR':
      state.defense4 = !state.defense4;
      break;
    case 'KeyT':
      state.defense5 = !state.defense5;
      break;
    case 'KeyY':
      state.acrobatics1 = !state.acrobatics1;
      break;
    case 'KeyX':
      state.acrobatics2 = !state.acrobatics2;
      break;
    case 'KeyC':
      state.acrobatics3 = !state.acrobatics3;
      break;
  }
  console.log(state);
  renderKick();
});

const fighter = document.querySelector('.fighter');

function renderKick() {
  if (state.kick1 === true) {
    fighter.style.backgroundImage = "url('/picsMovements/Kicks/K-Fighter/Meia Lua de frente.png')";
  } else if (state.kick2 === true) {
    fighter.style.backgroundImage = "url('/picsMovements/Kicks/K-Fighter/Meia Lua de compasso.png')";
  } else if (state.kick3 === true) {
    fighter.style.backgroundImage = "url('/picsMovements/Kicks/K-Fighter/Martelo.png')";
  } else if (state.kick4 === true) {
    fighter.style.backgroundImage = "url('/picsMovements/Kicks/K-Fighter/Macaco.png')";
  } else if (state.kick5 === true) {
    fighter.style.backgroundImage = "url('/picsMovements/Kicks/K-Fighter/Jump Kick.png')";
  } else if (state.kick6 === true) {
    fighter.style.backgroundImage = "url('/picsMovements/Kicks/K-Fighter/Cartwheel_kick-F.png')";
  } else if (state.defense1 === true) {
    fighter.style.backgroundImage = "url('/picsMovements/Defense/D-Fighter/Negativa-F.png')";
  } else if (state.defense2 === true) {
    fighter.style.backgroundImage = "url('/picsMovements/Defense/D-Fighter/Queda de quatro-F.png')";
  } else if (state.defense3 === true) {
    fighter.style.backgroundImage = "url('/picsMovements/Defense/D-Fighter/Cocorinha-F.png')";
  } else if (state.defense4 === true) {
    fighter.style.backgroundImage = "url('/picsMovements/Defense/D-Fighter/Esquiva de lado-F.png')";
  } else if (state.defense5 === true) {
    fighter.style.backgroundImage = "url('/picsMovements/Defense/D-Fighter/Rastera-F.png')";
  } else if (state.acrobatics1 === true) {
    fighter.style.backgroundImage =
      "url('/picsMovements/Acrobatics/A-Fighter/Cartwheel straight-F.png')";
  } else if (state.acrobatics2 === true) {
    fighter.style.backgroundImage = "url('/picsMovements/Acrobatics/A-Fighter/Macaco side-F.png')";
  } else if (state.acrobatics3 === true) {
    fighter.style.backgroundImage =
      "url('/picsMovements/Acrobatics/A-Fighter/New_Project__1_-removebg.png')";
  } else {
    fighter.style.backgroundImage = "url('/picsMovements/Ginga-F.png')";
  }
}

// function renderKick2() {
//   if (state.kick2 === true) {
//     fighter.style.backgroundImage = "url('/picsMovements/Kicks/K-Fighter/Martelo.png')";
//   } else {
//     fighter.style.backgroundImage = "url('/picsMovements/Ginga-F.png')";
//   }
// }

// function renderKick3() {
//   if (state.kick3 === true) {
//     fighter.style.backgroundImage = "url('/picsMovements/Kicks/K-Fighter/Macaco.png')";
//     // fighter.style.width = '500px';
//   } else {
//     fighter.style.backgroundImage = "url('/picsMovements/Ginga-F.png')";
//     // fighter.style.width = '350px;';
//   }
// }

// function renderKick4() {
//   if (state.kick4) {
//     fighter.classList.add('kick4');
//   } else {
//     fighter.classList.remove('kick4');
//   }
// }

// function renderKick5() {
//   if (state.kick5) {
//     fighter.classList.add('kick5');
//   } else {
//     fighter.classList.remove('kick5');
//   }
// }

// function renderKick6() {
//   if (state.kick6) {
//     fighter.classList.add('kick6');
//   } else {
//     fighter.classList.remove('kick6');
//   }
// }
