const queryString = require('querystring')
const http = require('http')
const url = require('url')
const fs = require('fs')

const game = require('./game')

let playerWon = 0
let playerLastAction = null
let sameCount = 0

http.createServer(function(request, response) {
    const parsedUrl = url.parse(request.url)
    if (parsedUrl.pathname == './favicon.ico') {
        response.writeHead(200)
        response.end()
        return
    }

    if (parsedUrl.pathname == '/game') {
        const query = queryString.parse(parsedUrl.query)
        const playerAction = query.action

        // console.log(playerAction);

        // 9 means cheating
        if (playerWon >= 3 || sameCount == 9) {
            response.writeHead(500)
            response.end('FAREWELL')
        }
        if (playerLastAction && playerAction == playerLastAction) {
            sameCount++
        } else {
            sameCount = 0
        }
        playerLastAction = playerAction
        if (sameCount >= 3) {
            response.writeHead(400)
            response.end('not fair, you must cheated')
            sameCount = 9
            return
        }
        const gameResult = game(playerAction)
        response.writeHead(200)

        if (gameResult == 0) {
            response.end('A draw!')
        } else if (gameResult == 1) {
            response.end('You win!')
            playerWon++
        } else {
            response.end('You lose!')
        }
    }

    if (parsedUrl.pathname == '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(response)
    }

}).listen(3002)