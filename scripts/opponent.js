const c = document.getElementById('countdown');
let time = 5;
let nextMove = '';
let nextMoveWidth = '';

const interval = setInterval(() => {
  if (time == 1) {
    renderOppMove();
  }
  if (time <= 0) {
    time = 5;
    renderRanDisMove();
  } else {
    c.innerHTML = time--;
  }
}, 1000);

let opponentMoves = [
  {
    src: '/picsMovements/Kicks/K-Opponent/Meia Lua de frente-O.jpeg',
    width: '200px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Kicks/K-Opponent/Meia Lua de compasso-O.jpeg'),
    width: '150px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Kicks/K-Opponent/Martelo2-O.jpeg'),
    width: '150px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Kicks/K-Opponent/Macaco-O.jpeg'),
    width: '150px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Kicks/K-Opponent/Jump Kick-O.jpeg'),
    width: '150px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Kicks/K-Opponent/Cartwheel kick-O.png'),
    width: '150px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Defense/D-Opponent/Rastera-O.png'),
    width: '150px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Defense/D-Opponent/Queda de quatro-O.jpeg'),
    width: '150px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Defense/D-Opponent/Negativa-O.jpeg'),
    width: '150px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Defense/D-Opponent/Esquiva de lado-O.jpeg'),
    width: '150px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Defense/D-Opponent/Cocorinha-O.jpeg'),
    width: '150px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Acrobatics/A-Opponent/Macaco side-O.jpeg'),
    width: '150px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Acrobatics/A-Opponent/Cartwheel-O.jpeg'),
    width: '150px',
    height: '250px'
  },
  {
    src: (url = '/picsMovements/Acrobatics/A-Opponent/Cartwheel straight-O.jpeg'),
    width: '150px',
    height: '250px'
  }
];

function renderRanDisMove() {
  let randomOppMove = Math.floor(Math.random() * opponentMoves.length);
  let nextOppDisMove = opponentMoves[0];
  nextMove = nextOppDisMove.src;
  nextMoveWidth = nextOppDisMove.width;
  let curOppDisMove = document.querySelector('.oppDis');
  curOppDisMove.style.backgroundImage = `url("${nextOppDisMove.src}")`;
}

// function renderOppMove() {
//   let curOppMov =

const renderOppMove = () => {
  let oppMove = document.querySelector('.opponent');
  oppMove.style.backgroundImage = `url("${nextMove}")`;
  oppMove.style.width = `${nextMoveWidth}`;
};
