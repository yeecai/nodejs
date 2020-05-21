var playerAction = process.argv[process.argv.length - 1]
const game = require('./lib')
// const result = game(playerAction)
// console.log(result);
let count = 0
process.stdin.on('data', e => {
    const playerAction = e.toString().trim()
    const result = game(playerAction)

    if( result === -1) {
        count++
    }
    if(count === 3) {
        console.log('You\'re too good, am out.');
        process.exit()
    }
    console.log(result);

})
// console.log('start require');
// var lib = require('./lib.js')
// console.log('end require', lib);
// console.log(lib.add);
// lib.addtional = 'test'
