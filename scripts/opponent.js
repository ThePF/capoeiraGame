const c = document.getElementById('countdown');
let time = 5;
let nextMove = '/picsmovements/gingao.png';
let nextMoveWidth = '';
let oppMove = '';
let nextMoveMarginLeft = '';
let intervalId
let gameOver = false
let mySound
let myMusic
let mySoundOnce = false 

function startGame() {
    time = 5
    health = 4
    points = 0

    if (!mySoundOnce) {

      const sound = document.createElement("audio");
      sound.src = '/picsmovements/soucapoeira.mp3';
      sound.setAttribute("preload", "auto");
      sound.setAttribute("controls", "none");
      sound.setAttribute('loop', true)
      sound.style.display = "none";
      document.body.appendChild(sound);
      sound.play()
      mySoundOnce = true
    }
      
    
    
    Object.keys(state).forEach(v => (state[v] = false));
    renderKick();
    score()

    let newHealth = document.getElementById('healthScore');
        newHealth.innerHTML = `Health = ${health}`

  if (gameOver){
    renderOppMove()
    document.querySelector('.gameover').style.display = 'none';
  }
    
  clearInterval(intervalId)


  intervalId = setInterval(() => {
    if (time < 0) {
      time = 5;
      document.querySelector('.timebar').style.backgroundColor ="green";
      renderOppMove();
      renderRanDisMove();
    } else {
      document.querySelector('.timebar').style.width = `${100*time}px`
      c.innerHTML = time--;
      if (time <= 1) {
        document.querySelector('.timebar').style.backgroundColor ="red";
      }
    }

  }, 1000);
  gameOver = false
}


let opponentMoves = [
  {
    src: '/picsmovements/kicks/kopponent/meialuadefrenteo.png',
    width: '300px',
    marginLeft: '1px'
  },
  {
    src: (url = '/picsmovements/kicks/kopponent/meialuadecompassoo.png'),
    width: '430px',
    marginLeft: '-70px'
  },
  {
    src: (url = '/picsmovements/kicks/kopponent/martelo2o.png'),
    width: '350px',
    height: '250px',
    marginLeft: '-50px'
  },
  {
    src: (url = '/picsmovements/kicks/kopponent/macacoo.png'),
    width: '500px',
    height: '250px',
    marginLeft: '-60px'
  },
  {
    src: (url = '/picsmovements/kicks/kopponent/cartwheelkicko.png'),
    width: '450px',
    height: '250px',
    marginLeft: '1px'
  },
  {
    src: (url = '/picsmovements/defense/dopponent/rasterao.png'),
    width: '480px',
    height: '250px',
    marginLeft: '-80px'
  },
  {
    src: (url = '/picsmovements/defense/dopponent/quedadequatroo.png'),
    width: '320px',
    height: '250px',
    marginLeft: '1px'
  },
  {
    src: (url = '/picsmovements/defense/dopponent/negativao.png'),
    width: '380px',
    height: '250px',
    marginLeft: '-80px'
  },
  {
    src: (url = '/picsmovements/defense/dopponent/esquivadeladoo.png'),
    width: '480px',
    height: '250px',
    marginLeft: '-50px'
  },
  {
    src: (url = '/picsmovements/defense/dopponent/cocorinhao.png'),
    width: '220px',
    height: '250px',
    marginLeft: '-40px'
  },
  {
    src: (url = '/picsmovements/acrobatics/aopponent/macacosideo.png'),
    width: '290px',
    height: '250px',
    marginLeft: '1px'
  },
  {
    src: (url = '/picsmovements/acrobatics/aopponent/cartwheelstraighto.png'),
    width: '450px',
    height: '250px',
    marginLeft: '1px'
  },
  {
    src: (url = '/picsmovements/acrobatics/aopponent/cartwheelo.png'),
    width: '580px',
    height: '250px',
    marginLeft: '1px'
  }
];

/* Big */
function renderRanDisMove() {
  let randomOppMove = Math.floor(Math.random() * opponentMoves.length);
  let nextOppDisMove = opponentMoves[randomOppMove];
  nextMove = nextOppDisMove.src;
  nextMoveWidth = nextOppDisMove.width;
  nextMoveMarginLeft = nextOppDisMove.marginLeft;
  let curOppDisMove = document.querySelector('.oppDis');
  curOppDisMove.style.backgroundImage = `url("${nextOppDisMove.src}")`;
}

/* Small */
const renderOppMove = () => {

  if (gameOver){
    oppMove.style.backgroundImage = `url("/picsmovements/gingao.png")`;
    oppMove.style.width = `350px`;
    oppMove.style.height = `500px`;
    oppMove.style.marginLeft = `1px`;

  } else {
  oppMove = document.querySelector('.opponent');
  oppMove.style.backgroundImage = `url("${nextMove}")`;
  oppMove.style.width = `${nextMoveWidth}`;
  oppMove.style.marginLeft = `${nextMoveMarginLeft}`;
  }
  console.log('opp file: ', oppMove);
};