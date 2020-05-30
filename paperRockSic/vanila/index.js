var playerAction = process.argv[process.argv.length - 1]
console.log('You played ' + playerAction);

var random = Math.random() * 3

if (random < 1) {
    var computerAction = 'rock'
} else if (random > 2) {
    var computerAction = 'scissor'
} else {
    var computerAction = 'paper'
}
console.log('I played ' + computerAction);

if (computerAction === playerAction) {
    console.log('It\'s a draw.');
} else if (
    (computerAction === 'rock' && playerAction === 'paper') ||
    (computerAction === 'scissor' && playerAction === 'rock') ||
    (computerAction === 'paper' && playerAction === 'scissor')
) {
    console.log('you win.');
} else {
    console.log('you lose.');
}

// Difference js in node and browser
// requestAnimationFrame => setImmediate
// console.log(__filename);
// console.log(__dirname);
// console.log(process);


