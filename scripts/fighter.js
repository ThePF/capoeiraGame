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

function renderEverything() {
  // console.log('Hello2');
  renderKick1();
  renderKick2();
  renderKick3();
  renderKick4();
  renderKick5();
  renderKick6();
}

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
      state.kick4;
      break;
    case 'KeyG':
      state.kick5;
      break;
    case 'KeyH':
      state.kick6;
      break;
  }
  console.log(state);
  renderEverything();
});

const fighter = document.querySelector('.fighter');

function renderKick1() {
  if (state.kick1 === true) {
    fighter.style.backgroundImage = "url('/picsMovements/Kicks/K-Fighter/Meia Lua de frente.png')";
  } else {
    fighter.style.backgroundImage = "url('/picsMovements/Ginga-F.png')";
  }
}

function renderKick2() {
  if (state.kick2 === true) {
    fighter.style.backgroundImage = "url('/picsMovements/Kicks/K-Fighter/Martelo.png')";
  } else {
    fighter.style.backgroundImage = "url('/picsMovements/Ginga-F.png')";
  }
}

function renderKick3() {
  // if (state.kick3 === true) {
  //   fighter.style.backgroundImage = "url('/picsMovements/Kicks/K-Fighter/Macaco.png')";
  //   // fighter.style.width = '500px';
  // } else {
  //   fighter.style.backgroundImage = "url('/picsMovements/Ginga-F.png')";
  //   // fighter.style.width = '350px;';
  // }
}

function renderKick4() {
  if (state.kick4) {
    fighter.classList.add('kick4');
  } else {
    fighter.classList.remove('kick4');
  }
}

function renderKick5() {
  if (state.kick5) {
    fighter.classList.add('kick5');
  } else {
    fighter.classList.remove('kick5');
  }
}

function renderKick6() {
  if (state.kick6) {
    fighter.classList.add('kick6');
  } else {
    fighter.classList.remove('kick6');
  }
}
