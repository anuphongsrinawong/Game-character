let playerState = 'idle';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function (e) {
    playerState = e.target.value;
    console.log(playerState)
})

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1000;
const CANVAS_HEIGHT = canvas.height = 900;

const playerImage = new Image();
playerImage.src = 'sprite_robot.png';
const spriteWidth = 795;
const spriteHeight = 765;


let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
    
    {
        name: 'run-ready',
        frames: 11,
        spriteWidth: 795,
        spriteHeight: 746
    },
    {
        name: 'run-finish',
        frames: 11,
        spriteWidth: 795,
        spriteHeight: 746
    },
    {
        name: 'jump-ready',
        frames: 11,
        spriteWidth: 795,
        spriteHeight: 746
    },
    {
        name: 'jump-start',
        frames: 11,
        spriteWidth: 795,
        spriteHeight: 746
    },
    {
        name: 'jump-finish',
        frames: 11,
        spriteWidth: 795,
        spriteHeight: 746
    },
    {
        name: 'idle',
        frames: 21,
        spriteWidth: 816,
        spriteHeight: 746
    },
    {
        name: 'run-start',
        frames: 19,
        spriteWidth: 816,
        spriteHeight: 746
    },
    {
        name: 'ko',
        frames: 41,
        spriteWidth: 816,
        spriteHeight: 746
    },
    {
        name: 'punch',
        frames: 4,
        spriteWidth: 816,
        spriteHeight: 746
    }
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * state.spriteWidth;
        let positionY = index * state.spriteHeight;
        frames.loc.push({ x: positionX, y: positionY ,spriteWidth: state.spriteWidth,spriteHeight: state.spriteHeight});
    }
    spriteAnimations[state.name] = frames;

});
console.log(spriteAnimations);

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteAnimations[playerState].loc[position].x;
    let frameY = spriteAnimations[playerState].loc[position].y;

    // console.log(frameX)
    // ctx.fillRect(150,100,70,100)

    ctx.drawImage(playerImage, frameX, frameY, spriteAnimations[playerState].loc[position].spriteWidth, spriteAnimations[playerState].loc[position].spriteHeight, 0, 0, spriteAnimations[playerState].loc[position].spriteWidth, spriteAnimations[playerState].loc[position].spriteHeight);

    gameFrame++;
    requestAnimationFrame(animate);
};
animate();