const net = require('net')
const data = {
    11111: '1',
    22222: '2',
    33333: '3',
    4444: '4'
}
const server = net.createServer((socket) => {
    socket.on('data', function (buffer) {
        const pageid = buffer.readInt32BE()
        setTimeout(() => {
            socket.write(
                Buffer.from(data[pageid] + '')
            )
        }, 500)
    })
})

server.listen(4000)

