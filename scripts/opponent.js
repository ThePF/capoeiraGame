const c = document.getElementById('countdown');
let time = 5;

const interval = setInterval(() => {
  if (time <= 0) {
    clearInterval(interval);
  } else {
    c.innerHTML = time--;
  }
}, 1000);

let opponnentMoves = [
  {
    src: URL('/picsMovements/Kicks/K-Opponent/Meia Lua de frente-O.jpeg'),
    width: '150px',
    height: '250px'
  },
  {
    src: URL('/picsMovements/Kicks/K-Opponent/Meia Lua de compasso-O.jpeg'),
    width: '150px',
    height: '250px'
  },
  {
    src: URL('/picsMovements/Kicks/K-Opponent/Martelo2-O.jpeg'),
    width: '150px',
    height: '250px'
  },
  {
    src: URL('/picsMovements/Kicks/K-Opponent/Macaco-O.jpeg'),
    width: '150px',
    height: '250px'
  },
  {
    src: URL('/picsMovements/Kicks/K-Opponent/Jump Kick-O.jpeg'),
    width: '150px',
    height: '250px'
  },
  {
    src: URL('/picsMovements/Kicks/K-Opponent/Cartwheel kick-O.png'),
    width: '150px',
    height: '250px'
  },
  {
    src: URL('/picsMovements/Defense'),
    width: '150px',
    height: '250px'
  },
  {
    src: URL('/picsMovements/Kicks/K-Opponent/Meia Lua de frente-O.jpeg'),
    width: '150px',
    height: '250px'
  },
  {
    src: URL('/picsMovements/Kicks/K-Opponent/Meia Lua de frente-O.jpeg'),
    width: '150px',
    height: '250px'
  },
  {
    src: URL('/picsMovements/Kicks/K-Opponent/Meia Lua de frente-O.jpeg'),
    width: '150px',
    height: '250px'
  },
  {
    src: URL('/picsMovements/Kicks/K-Opponent/Meia Lua de frente-O.jpeg'),
    width: '150px',
    height: '250px'
  },
  {
    src: URL('/picsMovements/Kicks/K-Opponent/Meia Lua de frente-O.jpeg'),
    width: '150px',
    height: '250px'
  },
  {
    src: URL('/picsMovements/Kicks/K-Opponent/Meia Lua de frente-O.jpeg'),
    width: '150px',
    height: '250px'
  },
  {
    src: URL('/picsMovements/Kicks/K-Opponent/Meia Lua de frente-O.jpeg'),
    width: '150px',
    height: '250px'
  },
  {
    src: URL('/picsMovements/Kicks/K-Opponent/Meia Lua de frente-O.jpeg'),
    width: '150px',
    height: '250px'
  }
];
opponentMovements[0].src = '/picsMovements/Kicks/K-Opponent/Meia Lua de frente-O.jpeg';
