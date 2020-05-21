module.exports = function (playerAction) {

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
        return 0
    } else if (
        (computerAction === 'rock' && playerAction === 'paper') ||
        (computerAction === 'scissor' && playerAction === 'rock') ||
        (computerAction === 'paper' && playerAction === 'scissor')
    ) {
        console.log('you win.');
        return -1
    } else {
        console.log('you lose.');
        return 1
    }

}

// console.log('hello nerd');

// exports.hello = 'world'
// exports.add = function (a, b) {
//     return a + b
// }
// exports.nerd = { hello: 'world' }


// module.exports = function minus(a, b) {
//     return a - b
// }
// // lib.additional is gone after you modified module.exports

// setTimeout(() => {
//     console.log(exports);
// }, 5000) 

//webpack --devtool node --mode development --target node index.js