const c = document.getElementById('countdown');
let time = 5;
let nextMove = '/picsMovements/Ginga-O.png';
let nextMoveWidth = '';

const interval = setInterval(() => {
  if (time <= 0) {
    time = 5;
    renderOppMove();
    renderRanDisMove();
  } else {
    c.innerHTML = time--;
  }
}, 1000);

let opponentMoves = [
  {
    src: '/picsMovements/Kicks/K-Opponent/Meia_Lua_de_frente-O.png',
    width: '300px'
  },
  {
    src: (url = '/picsMovements/Kicks/K-Opponent/Meia_Lua_de_compasso-O.png'),
    width: '430px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Kicks/K-Opponent/Martelo2-O.png'),
    width: '350px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Kicks/K-Opponent/Macaco-O.png'),
    width: '500px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Kicks/K-Opponent/Jump_Kick-O.png'),
    width: '320px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Kicks/K-Opponent/Cartwheel kick-O.png'),
    width: '450px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Defense/D-Opponent/Rastera-O.png'),
    width: '480px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Defense/D-Opponent/Queda_de_quatro-O.png'),
    width: '320px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Defense/D-Opponent/Negativa-O.png'),
    width: '380px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Defense/D-Opponent/Esquiva_de_lado-O.png'),
    width: '480px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Defense/D-Opponent/Cocorinha-O.png'),
    width: '220px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Acrobatics/A-Opponent/Macaco_side-O.png'),
    width: '290px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Acrobatics/A-Opponent/Cartwheel-O.png'),
    width: '450px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Acrobatics/A-Opponent/Cartwheel_straight-O.png'),
    width: '580px',
    height: '250px'
  }
];

function renderRanDisMove() {
  let randomOppMove = Math.floor(Math.random() * opponentMoves.length);
  let nextOppDisMove = opponentMoves[randomOppMove];
  nextMove = nextOppDisMove.src;
  nextMoveWidth = nextOppDisMove.width;
  let curOppDisMove = document.querySelector('.oppDis');
  curOppDisMove.style.backgroundImage = `url("${nextOppDisMove.src}")`;
}

const renderOppMove = () => {
  let oppMove = document.querySelector('.opponent');
  oppMove.style.backgroundImage = `url("${nextMove}")`;
  oppMove.style.width = `${nextMoveWidth}`;
};
