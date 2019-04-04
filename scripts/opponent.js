const c = document.getElementById('countdown');
let time = 5;
let nextMove = '/picsMovements/Ginga-O.png';
let nextMoveWidth = '';
let oppMove = '';
let nextMoveMarginLeft = '';

function startGame() {
  //   setInterval();
  console.log('start game');
  const interval = setInterval(() => {
    if (time <= 0) {
      time = 5;
      renderOppMove();
      renderRanDisMove();
    } else {
      c.innerHTML = time--;
    }
  }, 1000);
}

// function renderOpponent() {
// }

let opponentMoves = [
  {
    src: '/picsMovements/Kicks/K-Opponent/Meia_Lua_de_frente-O.png',
    width: '300px',
    marginLeft: '1px'
  },
  {
    src: (url = '/picsMovements/Kicks/K-Opponent/Meia_Lua_de_compasso-O.png'),
    width: '430px',
    marginLeft: '-70px'
  },
  {
    src: (url = '/picsMovements/Kicks/K-Opponent/Martelo2-O.png'),
    width: '350px',
    height: '250px',
    marginLeft: '-50px'
  },
  {
    src: (url = '/picsMovements/Kicks/K-Opponent/Macaco-O.png'),
    width: '500px',
    height: '250px',
    marginLeft: '-60px'
  },
  {
    src: (url = '/picsMovements/Kicks/K-Opponent/Cartwheel kick-O.png'),
    width: '450px',
    height: '250px',
    marginLeft: '1px'
  },
  {
    src: (url = '/picsMovements/Defense/D-Opponent/Rastera-O.png'),
    width: '480px',
    height: '250px',
    marginLeft: '-80px'
  },
  {
    src: (url = '/picsMovements/Defense/D-Opponent/Queda_de_quatro-O.png'),
    width: '320px',
    height: '250px',
    marginLeft: '1px'
  },
  {
    src: (url = '/picsMovements/Defense/D-Opponent/Negativa-O.png'),
    width: '380px',
    height: '250px',
    marginLeft: '-80px'
  },
  {
    src: (url = '/picsMovements/Defense/D-Opponent/Esquiva_de_lado-O.png'),
    width: '480px',
    height: '250px',
    marginLeft: '-50px'
  },
  {
    src: (url = '/picsMovements/Defense/D-Opponent/Cocorinha-O.png'),
    width: '220px',
    height: '250px',
    marginLeft: '-40px'
  },
  {
    src: (url = '/picsMovements/Acrobatics/A-Opponent/Macaco_side-O.png'),
    width: '290px',
    height: '250px',
    marginLeft: '1px'
  },
  {
    src: (url = '/picsMovements/Acrobatics/A-Opponent/Cartwheel-O.png'),
    width: '450px',
    height: '250px',
    marginLeft: '1px'
  },
  {
    src: (url = '/picsMovements/Acrobatics/A-Opponent/Cartwheel_straight-O.png'),
    width: '580px',
    height: '250px',
    marginLeft: '1px'
  }
];

function renderRanDisMove() {
  let randomOppMove = Math.floor(Math.random() * opponentMoves.length);
  let nextOppDisMove = opponentMoves[randomOppMove];
  nextMove = nextOppDisMove.src;
  nextMoveWidth = nextOppDisMove.width;
  nextMoveMarginLeft = nextOppDisMove.marginLeft;
  let curOppDisMove = document.querySelector('.oppDis');
  curOppDisMove.style.backgroundImage = `url("${nextOppDisMove.src}")`;
}

const renderOppMove = () => {
  oppMove = document.querySelector('.opponent');
  oppMove.style.backgroundImage = `url("${nextMove}")`;
  oppMove.style.width = `${nextMoveWidth}`;
  oppMove.style.marginLeft = `${nextMoveMarginLeft}`;

  console.log('opp file: ', oppMove);
};
