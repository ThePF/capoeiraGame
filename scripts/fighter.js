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
  console.log('Hello2');
  renderKick1();
  renderKick2();
  renderKick3();
  renderKick4();
  renderKick5();
  renderKick6();
}

document.addEventListener('keydown', evt => {
  switch (evt.code) {
    case 65:
      state.kick1 = true;
      break;
    case 83:
      state.kick2;
      break;
    case 68:
      state.kick3;
      break;
    case 70:
      state.kick4;
      break;
    case 71:
      state.kick5;
      break;
    case 72:
      state.kick6;
      break;
  }
  console.log(evt.code);
  renderEverything();
});

const fighter = document.querySelector('.fighter');

function renderKick1() {
  if (state.kick1) {
    console.log('hello');
    figther.classList.remove('fighter');
    fighter.classList.add('kick1');
  } else {
    fighter.classList.remove('kick1');
  }
}

function renderKick2() {
  if (state.kick1) {
    fighter.classList.add('kick2');
  } else {
    fighter.classList.remove('kick2');
  }
}

function renderKick3() {
  if (state.kick1) {
    fighter.classList.add('kick3');
  } else {
    fighter.classList.remove('kick3');
  }
}

function renderKick4() {
  if (state.kick1) {
    fighter.classList.add('kick4');
  } else {
    fighter.classList.remove('kick4');
  }
}

function renderKick5() {
  if (state.kick1) {
    fighter.classList.add('kick5');
  } else {
    fighter.classList.remove('kick5');
  }
}

function renderKick6() {
  if (state.kick1) {
    fighter.classList.add('kick6');
  } else {
    fighter.classList.remove('kick6');
  }
}
